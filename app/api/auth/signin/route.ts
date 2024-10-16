// pages/api/signin.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../../firebase'; // Adjust the path as needed
import { signInWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        try {
            // Attempt to sign in with Firebase
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Sign in successful, return user info
            return res.status(200).json({ message: 'Sign-in successful', user });
        } catch (error: any) {
            // Handle specific errors
            let errorMessage = 'Sign-in failed. Please try again.';
            if (error.code === 'auth/user-not-found') {
                errorMessage = 'No user found with this email.';
            } else if (error.code === 'auth/wrong-password') {
                errorMessage = 'Incorrect password.';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'Invalid email format.';
            }
            return res.status(401).json({ error: errorMessage });
        }
    }

    // Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
