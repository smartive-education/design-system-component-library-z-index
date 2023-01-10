import React, { FC } from 'react';
import { IconColor, IconHoverColor } from '../../Icon/Icon';
import { BackGroundColor, Interaction, TextColor, TextHoverColor } from '../Interaction';

export interface CommentProps {
  value: number;
}

export const Comment: FC<CommentProps> = ({ value }) => {
  const navigateToComments = (): void => {
    console.log('Navigate to comments');
  }; // TODO implement navigation

  // TODO add translation for label
  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={value === 0 ? 'chat-empty' : 'chat-full'}
          label={value && value > 1 ? 'Comments' : 'Comment'}
          value={value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Violet}
          textColor={TextColor.Gray}
          iconHoverColor={IconHoverColor.Violet}
          textHoverColor={TextHoverColor.Violet}
          backgroundColor={BackGroundColor.Violet}
          size="standard"
          onClickFn={navigateToComments}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={value === 0 ? 'chat-empty' : 'chat-full'}
          label=""
          value={value > 0 ? value : undefined}
          iconColor={value === 0 ? IconColor.Gray : IconColor.Violet}
          textColor={TextColor.Gray}
          iconHoverColor={IconHoverColor.Violet}
          textHoverColor={TextHoverColor.Violet}
          backgroundColor={BackGroundColor.Violet}
          size="standard"
          onClickFn={navigateToComments}
        />
      </div>
    </div>
  );
};
