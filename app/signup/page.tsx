// components/SignupForm.tsx
"use client"; // Ensure this component is a client component
import React, { useState } from "react";
import { Card } from "@/components/ui/card"; // Import Card component
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label"; 
import { Button } from "@/components/ui/button"; 
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = () => {
    const [firstName, setFirstName] = useState(""); // Separate state for first name
    const [lastName, setLastName] = useState(""); // Separate state for last name
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessages, setErrorMessages] = useState({
        general: "",
        email: "",
        age: "",
        password: "",
        firstName: "",
        lastName: "",
    });
    const [success, setSuccess] = useState("");
    const router = useRouter(); // Initialize the router here

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessages({ general: "", email: "", age: "", password: "", firstName: "", lastName: "" });
        setSuccess("");

        // Basic validation
        if (!firstName) setErrorMessages((prev) => ({ ...prev, firstName: "First name is required" }));
        if (!lastName) setErrorMessages((prev) => ({ ...prev, lastName: "Last name is required" }));
        if (!email) setErrorMessages((prev) => ({ ...prev, email: "Email is required" }));
        if (!age) setErrorMessages((prev) => ({ ...prev, age: "Age is required" }));
        if (!password) setErrorMessages((prev) => ({ ...prev, password: "Password is required" }));

        if (firstName && lastName && email && age && password) {
            try {
                // Create user with Firebase
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccess("Signup successful! Redirecting to signin...");

                // Redirect to signin page after a short delay
                setTimeout(() => {
                    router.push("/signin");
                }, 2000); // Redirect after 2 seconds
            } catch (error: any) {
                setErrorMessages((prev) => ({ ...prev, general: error.message }));
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="lg:w-2/5 w-full p-4">
                <h2 className="uppercase text-lg md:text-xl text-center mb-4">Signup</h2>
                <p className="text-sm md:text-base text-center mb-4">Create your account.</p>
                <form onSubmit={handleSignup} className="flex flex-col space-y-4">
                    {errorMessages.general && <p className="text-red-500 text-center">{errorMessages.general}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <div>
                        <Label htmlFor="firstName" className="block text-[#354C68] text-sm font-medium">First Name</Label>
                        <Input
                            id="firstName"
                            type="text"
                            placeholder="Enter First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="mt-2"
                        />
                        {errorMessages.firstName && <p className="text-red-500 text-sm">{errorMessages.firstName}</p>}
                    </div>
                    <div>
                        <Label htmlFor="lastName" className="block text-[#354C68] text-sm font-medium">Last Name</Label>
                        <Input
                            id="lastName"
                            type="text"
                            placeholder="Enter Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="mt-2"
                        />
                        {errorMessages.lastName && <p className="text-red-500 text-sm">{errorMessages.lastName}</p>}
                    </div>
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
                        {errorMessages.email && <p className="text-red-500 text-sm">{errorMessages.email}</p>}
                    </div>
                    <div>
                        <Label htmlFor="age" className="block text-[#354C68] text-sm font-medium">Age</Label>
                        <Input
                            id="age"
                            type="number"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-2"
                        />
                        {errorMessages.age && <p className="text-red-500 text-sm">{errorMessages.age}</p>}
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
                        {errorMessages.password && <p className="text-red-500 text-sm">{errorMessages.password}</p>}
                    </div>
                    <Button type="submit" className="bg-[#ad0660] text-white hover:text-slate-700 text-lg rounded-md px-4 py-2 font-semibold uppercase">
                        Sign Up
                    </Button>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/signin" className="text-[#ad0660] hover:underline">Sign in here</a>
                </p>
            </Card>
        </div>
    );
};

export default SignupForm;
