"use client";

import { useState, useEffect } from "react";
import ImageUploadComponent from "@/components/form/upload";

const ClientSideComponent = () => {
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve the result message from localStorage (client-side only)
    const message = localStorage.getItem("resultMessage");
    if (message) {
      setResultMessage(message);
    }

    // Function to clear the result message on page navigation
    const handleRouteChange = () => {
      localStorage.removeItem("resultMessage");
      setResultMessage(null); // Clear the state
    };

    // Listen for the browser's popstate event (triggers on back/forward navigation)
    window.addEventListener("popstate", handleRouteChange);

    // Optionally, you can listen for other navigation triggers (such as link clicks)
    window.addEventListener("beforeunload", handleRouteChange);

    // Cleanup function to remove the event listeners
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("beforeunload", handleRouteChange);
    };
  }, []);

  return (
    <div>
      {/* Display the result message only if available */}
      {resultMessage && (
        <div className="mt-6 bg-yellow-200 p-4 border border-yellow-300 rounded">
          <p>{resultMessage}</p>
        </div>
      )}

      {/* Uncomment ImageUploadComponent when needed */}
      {/* <div className="mt-12">
        <ImageUploadComponent />
      </div> */}
    </div>
  );
};

export default ClientSideComponent;
