import React from "react";
import { Alegreya_Sans_SC, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Alegreya = Alegreya_Sans_SC({
  weight: "800",
  subsets: ["latin"],
});

type ContentProps = {
  videoSrc: string;
  title1: string;
  title2: string;
  description: {
    paragraphs: string[];
  };
  additionalInfo: string;
};

export const VideoTextCard: React.FC<ContentProps> = ({
  videoSrc,
  title1,
  title2,
  description,
  additionalInfo,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Container for the video */}
        <div className="flex-1 lg:mr-4 mb-4 lg:mb-0 flex items-stretch">
          <video
            src={videoSrc}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Container for text */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h2 className={`${Alegreya.className} text-xl lg:text-2xl font-black uppercase mb-4`}>
              {title1} <span className="text-purple-600">{title2}</span>
            </h2>
            {description.paragraphs.map((para, index) => (
              <p key={index} className={`${poppins.className} text-sm lg:text-base font-normal mb-4`}>
                {para}
                <br />
              </p>
            ))}
          </div>
          <div className={`${poppins.className} text-sm lg:text-base font-normal mt-4`}>
            {additionalInfo}
          </div>
        </div>
      </div>
    </div>
  );
};
