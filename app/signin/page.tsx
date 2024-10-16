// components/SigninForm.tsx
"use client"; // Ensure this component is a client component
import React, { useState } from "react";
import { Card } from "@/components/ui/card"; // Import Card component
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SigninForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const router = useRouter();

    const handleSignin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");
        setSuccessMessage("");

        if (!email || !password) {
            setErrorMessage("Email and Password are required.");
            return;
        }

        try {
            // Sign in with Firebase
            await signInWithEmailAndPassword(auth, email, password);
            setSuccessMessage("Signin successful! Redirecting...");
            
            // Redirect after a short delay
            setTimeout(() => {
                router.push("/home"); // Adjust the path as needed
            }, 2000);
        } catch (error: any) {
            setErrorMessage(error.message);
        }
    };

    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="lg:w-2/5 w-full p-4">
                <h2 className="uppercase text-lg md:text-xl text-center mb-4">Sign In</h2>
                <form onSubmit={handleSignin} className="flex flex-col space-y-4">
                    {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
                    {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                    <div>
                        <Label htmlFor="email" className="block text-[#354C68] text-sm font-medium">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-[#354C68] text-sm font-medium">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-2"
                        />
                    </div>
                    <Button type="submit" className="bg-[#ad0660] text-white hover:text-slate-700 text-lg rounded-md px-4 py-2 font-semibold uppercase">
                        Sign In
                    </Button>
                </form>
                <p className="mt-4 text-center">
    Don&apos;t have an account? <a href="/signup" className="text-[#ad0660] hover:underline">Sign up here</a>
</p>

            </Card>
        </div>
    );
};

export default SigninForm;
