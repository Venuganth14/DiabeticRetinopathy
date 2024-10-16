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

type ParagraphProps = {
  content: string;
};

const Paragraph: React.FC<ParagraphProps> = ({ content }) => (
  <p className={`${poppins.className} text-sm lg:text-base font-normal mb-4`}>
    {content}
    <br />
  </p>
);

type ListProps = {
  items: string[];
};

const List: React.FC<ListProps> = ({ items }) => (
  <ul className="list-disc list-inside pl-5 mb-4">
    {items.map((item, index) => (
      <li key={index} className={`${poppins.className} text-sm lg:text-base font-normal`}>
        {item}
      </li>
    ))}
  </ul>
);

type TitleProps = {
  title1: string;
  title2: string;
  description: {
    paragraphs: string[];
    listItems: string[];
  };
};

export const SymptomTitle: React.FC<TitleProps> = ({
  title1,
  title2,
  description,
}) => {
  return (
    <div>
      <h2 className={`${Alegreya.className} text-xl lg:text-2xl font-black uppercase mb-4`}>
        {title1} <span className="text-purple-600">{title2}</span>
      </h2>
      {description.paragraphs.map((para, index) => (
        <Paragraph key={index} content={para} />
      ))}
      <List items={description.listItems} />
    </div>
  );
};
