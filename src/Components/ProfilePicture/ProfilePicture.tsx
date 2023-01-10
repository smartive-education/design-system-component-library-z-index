import React, { FC, useCallback } from 'react';

import { Icon, IconColor } from '../Icon';

export type AvatarSize = 'small' | 'medium' | 'large';

interface ProfilePictureProps {
  name: string;
  src?: string;
  size: AvatarSize;
  edit?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
}

export const ProfilePicture: FC<ProfilePictureProps> = ({ name, src = '', size, edit = false, onClick, onEdit }) => {
  const getClasses = useCallback((size: string) => {
    if (size === 'small') {
      return {
        size: 'h-10 w-10',
        div: 'h-10',
      };
    }
    if (size === 'medium') {
      return {
        size: 'h-16 w-16',
        div: 'outline outline-8 outline-slate-100 h-16',
      };
    }
    return {
      size: 'h-40 w-40',
      div: 'outline outline-8 outline-slate-100',
    };
  }, []);

  const getImage = useCallback((src: string, size: string) => {
    if (!src && size === 'large') {
      return 'assets/images/profile/no.image.png';
    }
    return src;
  }, []);

  return (
    <div className={`relative ${getClasses(size).size}`}>
      <div
        className={`cursor-pointer rounded-full object-cover overflow-hidden ${getClasses(size).div} ${
          getImage(src, size) ? '' : 'bg-violet-100'
        }`}
      >
        {getImage(src, size) && (
          <img
            src={getImage(src, size)}
            alt={name}
            onClick={onClick}
            className="hover:scale-125 duration-700 ease-in-out"
          />
        )}
      </div>
      {edit && size === 'large' && (
        <div className="absolute bottom-0 cursor-pointer right-0 bg-slate-600 p-4 rounded-full" onClick={onEdit}>
          <Icon id="edit" size={16} color={IconColor.White} />
        </div>
      )}
    </div>
  );
};
