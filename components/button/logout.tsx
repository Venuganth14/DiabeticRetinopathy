// components/button/LogoutButton.tsx
"use client";
// components/button/LogoutButton.tsx
import React from "react";
import { useAuth } from "../../context/AuthContext"; // Adjust the path as necessary
import { useRouter } from "next/navigation"; // Import useRouter

const LogoutButton: React.FC = () => {
    const { logout } = useAuth(); // Use the useAuth hook
    const router = useRouter(); // Initialize the router

    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function
            alert("Logged out successfully!"); // Optional: Show a message to the user
            router.push("/signin"); // Redirect to the sign-in page after logout
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-none text-purple-600 font-bold rounded hover:bg-none"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
