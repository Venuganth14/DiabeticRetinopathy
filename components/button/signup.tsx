"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { Alegreya_Sans_SC } from "next/font/google";

const Alegreya = Alegreya_Sans_SC({
  weight: "800",
  subsets: ["latin"],
});

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignupClick = () => {
    setLoading(true);
    // Navigate to the signup page
    router.push("/signup");
  };

  return (
    <div className="flex items-center space-x-4"> {/* Flex container to align side by side */}
      <h1
        className={`${Alegreya.className} text-xl lg:text-2xl font-black uppercase text-purple-600`}
      >
        To Predict Your Diabetic Retinopathy Stage
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <button
          type="button"
          disabled={loading}
          onClick={handleSignupClick} // Redirect on button click
          className={`button-71 ${
            loading ? "bg-gray-400" : "bg-[#ad0660]"
          } text-white hover:text-slate-700 text-lg rounded-md px-4 py-1 font-semibold uppercase`}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
