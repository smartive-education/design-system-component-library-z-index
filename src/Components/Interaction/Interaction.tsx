import React, { FC } from 'react';
import { Icon, IconColor, IconHoverColor } from '../Icon/Icon';

export enum TextColor {
  Gray = 'text-slate-600',
  LightGray = 'text-slate-400',
  LightPink = 'text-pink-500',
  Pink = 'text-pink-600',
  DarkPink = 'text-pink-900',
  Violet = 'text-violet-600',
  DarkViolet = 'text-violet-900',
  White = 'text-violet-50',
}

export enum TextHoverColor {
  Gray = 'hover:text-slate-600',
  LightPink = 'hover:text-pink-500',
  Pink = 'hover:text-pink-600',
  DarkPink = 'hover:text-pink-900',
  Violet = 'hover:text-violet-600',
  DarkViolet = 'hover:text-violet-900',
  White = 'text-violet-50',
}

export enum BackGroundColor {
  Pink = 'hover:bg-pink-50',
  Violet = 'hover:bg-violet-50',
  DarkViolet = 'hover:bg-violet-900',
  Gray = 'hover:bg-slate-100',
  None = '',
}

export type InteractionSize = 'small' | 'standard';

export interface InteractionProps {
  iconId: string;
  label: string;
  iconColor?: IconColor;
  textColor?: TextColor;
  iconHoverColor?: IconHoverColor;
  textHoverColor?: TextHoverColor;
  backgroundColor?: BackGroundColor;
  size?: InteractionSize;
  value?: number;
  onClickFn?: () => void;
}

export const Interaction: FC<InteractionProps> = ({
  iconId,
  label,
  iconColor,
  textColor,
  iconHoverColor,
  textHoverColor,
  backgroundColor,
  size,
  value,
  onClickFn,
}) => {
  return (
    <button
      onClick={onClickFn}
      className={`group flex items-center hover:border-1 hover:border-solid rounded-full
      ${textColor || TextColor.LightGray} ${textHoverColor || TextHoverColor.Gray}
      ${backgroundColor || BackGroundColor.None} ${size === 'standard' ? 'px-3 py-2 font-semibold max-h-9' : 'mr-4'}`}
    >
      <Icon id={iconId} size={size === 'standard' ? 16 : 12} color={iconColor} hoverColor={iconHoverColor} />
      <span className={`inline-block text-inherit ${size === 'standard' ? 'pl-1' : 'pl-0.5 text-base font-semibold'}`}>
        {value}
      </span>
      <span className={`inline-block text-inherit ${size === 'standard' ? 'pl-1' : 'pl-0.5 text-base font-semibold'}`}>
        {label}
      </span>
    </button>
  );
};
