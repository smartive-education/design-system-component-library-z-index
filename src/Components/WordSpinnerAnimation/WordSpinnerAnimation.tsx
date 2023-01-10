import React, { FC, useEffect, useState } from 'react';

interface WordSpinnerAnimationProps {
  keywords?: string[];
}

export const WordSpinnerAnimation: FC<WordSpinnerAnimationProps> = ({
  keywords = ['fashion', 'politics', 'tech', 'lifestyle', 'sports'],
}) => {
  const [keyword, setKeyword] = useState(keywords[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.setInterval(() => {
      setIndex((index) => (index >= keywords.length - 1 ? 0 : index + 1));
    }, 2000);
  }, []);

  useEffect(() => setKeyword(() => keywords[index]), [index]);

  return (
    <div className="text-white animate-textintro w-48">
      #{keyword}
      <span className="text-pink-300 font-bold text-4xl">.</span>
    </div>
  );
};
