import React from "react";

import { Alegreya_Sans_SC, Poppins, Raleway } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Alegreya = Alegreya_Sans_SC({
  weight:"800",
  subsets: ["latin"]
});

type titleProps = {
  title1: string;
  title2: string;
  description: string;
};

export const SubTitle: React.FC<titleProps> = ({
  title1,
  title2,
  description,
}) => {
  return (
    <div>
      <h2 className={` ${Alegreya.className} text-xl lg:text-2xl font-black uppercase`}>
        {title1} <span className="text-purple-600">{title2}</span>
      </h2>
      <p className={`${poppins.className} text-sm lg:text-base font-normal`}>{description}</p>
    </div>
  );
};
