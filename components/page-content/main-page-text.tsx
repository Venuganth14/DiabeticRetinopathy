"use client";

import React, { useEffect } from "react";
import AOS from "aos";

import ReadMore from "../other/read-more-util";

type Props = {
    description: string;
}

export const MainPageText: React.FC<Props> = ({ description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <div>
      <div className="md:block hidden">
        <div className="text-sm lg:text-base font-normal">
          {description}
        </div>
      </div>
      <div data-aos="zoom-in" className="md:hidden text-black text-sm">
        <ReadMore text={description} maxWordCount={30} />
      </div>
    </div>
  );
};
