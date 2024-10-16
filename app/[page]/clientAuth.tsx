// components/ClientAuthComponent.tsx
"use client"
import { useEffect, useState } from 'react';
import { auth } from '../../firebase'; // Adjust path as necessary
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Ensure you're importing Firestore

const ClientAuthComponent: React.FC = () => {
    const [user, setUser] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (loggedInUser) => {
            if (loggedInUser) {
                // Fetch user data from Firestore
                const userDoc = await getDoc(doc(db, "users", loggedInUser.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setFirstName(userData.firstName); // Set first name
                }
                setUser(loggedInUser.email); // Set the user's email
            } else {
                setUser(null);
                setFirstName(null);
            }
        });

        return () => unsubscribe(); // Clean up subscription on unmount
    }, []);

    return (
        <div>
            {user ? (
                <h1>Welcome, {firstName || user}!</h1> // Display first name or email
            ) : (
                <h1>Please sign in</h1>
            )}
        </div>
    );
};

export default ClientAuthComponent;
