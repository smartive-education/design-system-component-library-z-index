import React, { FC, useState, useCallback, useEffect, useMemo } from 'react';

export type State = 'mumbles' | 'likes';

interface MumblesLikesProps {
  state: State;
  onClick: (param: string) => void;
}
const defaultProps: Partial<MumblesLikesProps> = {
  state: 'mumbles',
};

export const MumblesLikes: FC<MumblesLikesProps> = ({ state, onClick }) => {
  const [display, setDisplay] = useState(state);
  const [expandHover, setExpandHover] = useState(false);
  const handleChange = useCallback(
    (state: State) => {
      setDisplay(state);
      onClick(state);
    },
    [display]
  );

  useEffect(() => {
    if (state === display) {
      return;
    }
    setDisplay(state);
  }, [state]);

  const expandHoverClasses = useMemo(() => {
    if (expandHover) {
      return display === 'mumbles' ? 'origin-left scale-x-105 duration-150' : 'origin-right scale-x-105';
    }
    return display === 'mumbles' ? 'w-[10rem] duration-150' : 'w-[8rem] duration-150';
  }, [display, expandHover]);

  return (
    <div className="bg-slate-200 border-transparent rounded-xl p-1 flex justify-between max-w-xs relative z-0">
      <div
        className={`${display === 'mumbles' ? 'text-violet-600' : ''} p-2 cursor-pointer text-xl z-20`}
        onClick={() => handleChange('mumbles')}
        onMouseOver={() => setExpandHover(display !== 'mumbles' && true)}
        onMouseOut={() => setExpandHover(false)}
      >
        Deine Mumbles
      </div>
      <div
        className={`${display === 'likes' ? 'text-violet-600' : ''} p-2 cursor-pointer text-xl z-20`}
        onClick={() => handleChange('likes')}
        onMouseOver={() => setExpandHover(display !== 'likes' && true)}
        onMouseOut={() => setExpandHover(false)}
      >
        Deine Likes
      </div>
      <div
        className={`absolute top-0 bottom-0 rounded-xl m-1 bg-white z-10
          ${
            display === 'mumbles'
              ? 'left-0 duration-150 translate-x-0 w-[10.8rem]'
              : 'duration-150 translate-x-[11.4rem] w-[7.8rem]'
          }
          ${expandHoverClasses}`}
      ></div>
    </div>
  );
};

MumblesLikes.defaultProps = defaultProps;
