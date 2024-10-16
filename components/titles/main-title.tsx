import React from "react";
import { Poppins, Alegreya_Sans_SC } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Alegreya = Alegreya_Sans_SC({
  weight:"800",
  subsets: ["latin"]
})

type titleProps = {
  title1: string | undefined;
  title2: string | undefined;
  description: string | undefined;
};

export const MainTitle: React.FC<titleProps> = ({
  title1,
  title2,
  description,
}) => {
  return (
    <div>
      <h2 className={` ${Alegreya.className} text-2xl lg:text-4xl font-black uppercase`}>
        {title1} <span className="text-purple-600">{title2}</span>
      </h2>
      <p className={`${poppins.className} text-sm lg:text-base font-normal mt-4`}>{description}</p>
    </div>
  );
};
