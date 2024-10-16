// pages/api/signup.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '../../../../firebase'; // Adjust the path based on your project structure
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase'; // Ensure you're importing Firestore

interface SignupData {
    firstName: string;
    lastName: string;
    email: string;
    age: string; // You may want to convert this to a number later
    password: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, age, password }: SignupData = req.body;

        // Basic validation
        if (!firstName || !lastName || !email || !age || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        try {
            // Create user with Firebase
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store additional user info in Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName,
                lastName,
                age,
                email
            });

            return res.status(200).json({ message: 'User registered successfully', user });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
