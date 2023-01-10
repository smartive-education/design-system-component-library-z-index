import React, { FC } from 'react';
import { Icon, IconColor } from '../Icon';
import { WordSpinnerAnimation } from '../WordSpinnerAnimation';

export const LandingPage: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-screen w-screen">
      <div className="h-full bg-gradient-to-r to-pink-500 from-violet-600 items-center justify-center flex w-screen">
        <div>
          <div className="flex justify-center pt-2">
            <Icon id="mumble" size={48} color={IconColor.White} />
          </div>
          <h1 className="pt-4 pb-4 text-white font-bold text-6xl text-center">Mumble</h1>
          <h2 className="pt-4 pb-2 text-pink-300 font-bold text-4xl">Find out what&apos;s new</h2>
          <h2 className="text-pink-300 font-bold text-4xl flex justify-center pb-2">
            in&nbsp;
            <WordSpinnerAnimation />
          </h2>
        </div>
      </div>
    </div>
  );
};
