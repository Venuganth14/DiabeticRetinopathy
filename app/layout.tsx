// src/app/layout.tsx
"use client";
import { usePathname } from "next/navigation"; // Import usePathname
import { Inter } from "next/font/google";
import "./globals.css";
import BackToTopButton from "../components/button/back-to-top-button";
import { AuthProvider } from "../context/AuthContext";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current pathname

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <BackToTopButton />
          {pathname !== "/signin" && pathname !== "/signup" && pathname !== "/" && <Header />}{" "}
          {/* Render header conditionally */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
