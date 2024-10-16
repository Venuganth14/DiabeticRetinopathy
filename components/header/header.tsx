"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Raleway } from "next/font/google";


import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import logo from "@/public/logo3.png";
import { useActivePath } from "../helper/active-link-helper";
import { HeaderSheet } from "./header-sheet";
import ClientAuthComponent from "@/app/[page]/clientAuth";
import LogoutButton from "../button/logout";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "500",
});

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const checkActivePath = useActivePath();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("Current Pathname:", pathname);

  return (
    <header
      className={`sticky lg:fixed top-0 left-0 w-full z-10 py-2 transition-colors duration-700 ease-in-out lg:px-20 ${
        raleway.className
      } ${
        isScrolled
          ? "bg-[rgba(82,53,82,0.22)] backdrop-brightness-50 backdrop-blur-lg text-white"
          : "bg-[rgba(208,208,208,0.22)] backdrop-brightness-50 backdrop-blur-sm text-white lg:mt-8"
      }`}
    >
      <div className="flex justify-between items-center container font-normal text-base">
        <div className="group">
          {/* <Link href="/" as="/"> */}
            <Image src={logo} alt="pearl cloud" width={90} />
          {/* </Link> */}
        </div>
          <ClientAuthComponent /> <LogoutButton/>
        {/* <div className="group uppercase tracking-wider text-lg">
          <nav className="sm:block hidden">
            <div className="group">
              <NavigationMenu className="text-lg w-full">
                <NavigationMenuList className="flex space-x-8">
                  <NavigationMenuItem className="bg-transparent hover:bg-transparent">
                    <Link
                      href="/"
                      className={`hover:text-[#ad0660] duration-700 ease-in-out ${
                        pathname === "/" || checkActivePath("/")
                          ? "text-[#ad0660]"
                          : "text-[#800346]"
                      }`}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="bg-transparent hover:bg-transparent">
                    <Link
                      href="/diagnosis-of-diabetic-retinopathy"
                      className={`hover:text-[#ad0660] duration-700 ease-in-out ${
                        pathname === "/diagnosis-of-diabetic-retinopathy" || checkActivePath("/diagnosis-of-diabetic-retinopathy")
                          ? "text-[#ad0660]"
                          : "text-[#800346]"
                      }`}
                    >
                      Diagnosis
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="bg-transparent hover:bg-transparent">
                    <Link
                      href="/prevention-of-diabetic-retinopathy"
                      className={`hover:text-[#ad0660] duration-700 ease-in-out ${
                        pathname === "/prevention-of-diabetic-retinopathy" || checkActivePath("/prevention-of-diabetic-retinopathy")
                          ? "text-[#ad0660]"
                          : "text-[#800346]"
                      }`}
                    >
                      Prevention
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </nav>
        </div> */}
        {/* <div className="group md:hidden">
          <HeaderSheet />
        </div> */}
      </div>
    </header>
  );
};

export default Header;
