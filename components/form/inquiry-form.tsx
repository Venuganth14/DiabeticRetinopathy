"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type PredictionFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: string;
  file: FileList;
};

type PredictionSheetProps = {
  prediction: boolean;
};

export const PredictionSheet: React.FC<PredictionSheetProps> = ({
  prediction,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionFormData>();
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const convertFileToBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onSubmit = async (data: PredictionFormData) => {
    if (data.file.length === 0) {
      alert("Please upload an image file.");
      return;
    }

    setLoading(true);

    try {
      const file = data.file[0];
      const base64Image = await convertFileToBase64(file);

      // Here we will send the base64Image to the backend API for prediction
      const response = await fetch("https://8806-34-75-1-74.ngrok-free.app/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Image }),
      });

      const responseData = await response.json();
      setResult(responseData.prediction); // Set the prediction result
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing the prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {/* <button className="button-71 bg-[#ad0660] text-white hover:text-slate-700 text-lg rounded-md px-4 py-2 font-semibold uppercase">
          {prediction ? "Predict Now" : "Upload Details"}
        </button> */}
      </SheetTrigger>
      <SheetContent className="lg:w-2/5 w-full p-4">
        <SheetHeader>
          <SheetTitle className="uppercase text-lg md:text-xl">
            Prediction Form
          </SheetTitle>
          <SheetDescription className="text-sm md:text-base">
            Provide your details for prediction.
          </SheetDescription>
        </SheetHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap justify-between p-4"
        >
          {/* First Name Input */}
          <div className="w-full md:w-1/2 mb-4 pr-0 md:pr-2">
            <label
              htmlFor="firstName"
              className="block text-[#354C68] text-sm font-medium"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="Enter First Name"
              {...register("firstName", { required: "First Name is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 text-gray-900"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name Input */}
          <div className="w-full md:w-1/2 mb-4 pl-0 md:pl-2">
            <label
              htmlFor="lastName"
              className="block text-[#354C68] text-sm font-medium"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Enter Last Name"
              {...register("lastName", { required: "Last Name is required" })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 text-gray-900"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="w-full mb-4">
            <label
              htmlFor="email"
              className="block text-[#354C68] text-sm font-medium"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50 text-gray-900"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* File Upload Input */}
          <div className="w-full mb-4">
            <label
              htmlFor="file"
              className="block text-[#354C68] text-sm font-medium"
            >
              Upload Image
            </label>
            <input
              id="file"
              type="file"
              accept="image/*"
              {...register("file", { required: "Please upload a file" })}
              className="mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
            />
            {errors.file && (
              <p className="text-red-500 text-xs mt-1">{errors.file.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="w-full mb-4">
            <Button
              type="submit"
              className={`${
                loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#ad0660]"
              } text-white hover:text-slate-700 text-lg rounded-md px-4 py-2 font-semibold uppercase`}
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </Button>
          </div>

          {/* Display the Prediction Result */}
          {result && (
            <div className="w-full mt-4">
              <h3 className="text-lg font-semibold">Prediction Result:</h3>
              <p>{result}</p>
            </div>
          )}
        </form>
      </SheetContent>
    </Sheet>
  );
};
