import React, { FC } from 'react';
import { Icon, IconColor, IconHoverColor } from '../../Icon';
import { BackGroundColor, TextColor, TextHoverColor } from '../Interaction';

export type EffectSize = 'normal' | 'large';

export interface EffectProps {
  iconId: string;
  label: string;
  size: EffectSize;
  effect: string;
  squared: boolean;
  secondaryIcon?: string;
  backgroundColor?: BackGroundColor;
  navigate: () => void;
}

export const Effect: FC<EffectProps> = ({
  iconId,
  label,
  size,
  effect,
  squared,
  secondaryIcon,
  backgroundColor,
  navigate,
}) => {
  return (
    <button
      onClick={navigate}
      className={`group flex items-center rounded-lg
        ${squared ? 'flex-col' : 'flex-row'}
        ${backgroundColor || BackGroundColor.None} ${squared ? 'p-3' : ''}
      ${TextColor.White} ${TextHoverColor.White}
      ${size === 'large' ? 'text-3xl font-bold' : 'text-base'}`}
    >
      <div className={`${effect} ${secondaryIcon ? 'group-hover:hidden' : ''}`}>
        <Icon id={iconId} size={size === 'large' ? 40 : 20} color={IconColor.White} hoverColor={IconHoverColor.White} />
      </div>
      <div className={`${effect} hidden group-hover:inline-block`}>
        {secondaryIcon && (
          <Icon
            id={secondaryIcon}
            size={size === 'large' ? 40 : 20}
            color={IconColor.White}
            hoverColor={IconHoverColor.White}
          />
        )}
      </div>

      <span className={`inline-block text-inherit ${squared ? '' : 'ml-4'}`}>{label}</span>
    </button>
  );
};
