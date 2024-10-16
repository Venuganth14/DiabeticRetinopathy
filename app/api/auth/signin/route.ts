// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '../../../../firebase'; // Adjust the path as needed
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Basic validation
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 });
  }

  try {
    // Attempt to create a user with Firebase
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // User creation successful, return user info
    return NextResponse.json({ message: 'User created successfully', user }, { status: 201 });
  } catch (error: any) {
    // Handle specific errors
    let errorMessage = 'User creation failed. Please try again.';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'Email is already in use.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email format.';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Password is too weak.';
    }
    return NextResponse.json({ error: errorMessage }, { status: 401 });
  }
}
