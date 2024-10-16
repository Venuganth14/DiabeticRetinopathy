"use client"

import React, { useState } from 'react';

interface ReadMoreProps {
  text: string;
  maxWordCount: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxWordCount }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split the text into words
  const words = text.split(' ');

  // Determine if the text needs to be truncated
  const needsTruncation = words.length > maxWordCount;

  // Function to toggle the expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      {/* Show either the truncated text or the full text based on isExpanded */}
      {needsTruncation && !isExpanded
        ? words.slice(0, maxWordCount).join(' ') + '....'
        : text}

      {/* Conditionally render the Read More/Less button */}
      {needsTruncation && (
        <button onClick={toggleReadMore} className="text-blue-500 hover:text-blue-700 italic">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
