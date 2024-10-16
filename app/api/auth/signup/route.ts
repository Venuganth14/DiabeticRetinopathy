// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../firebase'; // Adjust the path based on your project structure
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../../firebase'; // Ensure you're importing Firestore

export async function POST(req: NextRequest) {
    const { firstName, lastName, email, age, password } = await req.json();

    // Basic validation
    if (!firstName || !lastName || !email || !age || !password) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
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

        return NextResponse.json({ message: 'User registered successfully', user }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
