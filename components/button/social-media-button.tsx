// components/SocialMediaFloatingButtonGroup.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterestP,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SocialMediaFloatingButtonGroup: React.FC = () => {
  const [opacity, setOpacity] = useState(0);

  // Function to handle the scroll event
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setOpacity(1); // Fully visible
    } else {
      setOpacity(0); // Fully transparent
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div
      style={{
        opacity: opacity,
        transition: "opacity 500ms ease-in-out", // Here we set the duration to 400ms
        visibility: opacity === 0 ? "hidden" : "visible", // We toggle visibility based on opacity
      }}
      className="fixed bottom-1/4 right-0 mb-4 mr-0 py-4 px-3 rounded-s-xl z-50 bg-[rgba(166,128,166,0.22)] duration-500  "
    >
      <div className="flex flex-col gap-2 items-center">
        <a
          href="https://www.facebook.com/aerotravelsuk/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2"
        >
          <Facebook
            className=" hover:-translate-x-3 duration-500 text-purple-700"
            size={20}
          />
        </a>
        <a
          href="https://www.instagram.com/aero.travels"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2"
        >
          <Instagram
            className=" hover:-translate-x-3 duration-500 text-purple-700"
            size={20}
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3uEKDT1OWulLJlupRc591Q"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2"
        >
          <Youtube
            className="hover:-translate-x-3 duration-500 text-purple-700"
            size={20}
          />
        </a>
        <a href="https://www.pinterest.co.uk/aerotravelsuk/" target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon
            className=" hover:-translate-x-3 duration-500 text-purple-700"
            size="lg"
            icon={faPinterestP}
          />
        </a>

        <a href="https://www.tiktok.com/@aerotravels.uk" target="_blank" rel="noopener noreferrer" className="mb-2">
          <FontAwesomeIcon
            className=" hover:-translate-x-3 duration-500 text-purple-700"
            size="lg"
            icon={faTiktok}
          />
        </a>
        
        
      </div>
    </div>
  );
};

export default SocialMediaFloatingButtonGroup;
