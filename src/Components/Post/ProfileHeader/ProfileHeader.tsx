import React, { FC } from 'react';
import { AvatarSize, ProfilePicture } from '../../ProfilePicture';
import { IconColor, IconHoverColor } from '../../../Components/Icon';
import { Interaction, TextColor, TextHoverColor } from '../../../Components/Interaction';

export interface ProfileHeaderProps {
  name: string;
  userName: string;
  src: string;
  size: AvatarSize;
  location?: string;
  memberSince?: string;
  postCreationTime?: string;
  openProfile: () => void;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({
  name,
  userName,
  src,
  location,
  memberSince,
  postCreationTime,
  size,
  openProfile,
}) => {
  return (
    <div className="relative md:-left-20 flex items-center mb-4">
      {size !== 'large' && <ProfilePicture name={name} onClick={openProfile} src={src} size={size} />}
      <div className="ml-4">
        <h4
          className={`${
            size === 'large'
              ? 'text-3xl font-bold'
              : size === 'medium'
              ? 'text-2xl font-semibold'
              : 'font-semibold text-base'
          }`}
        >
          {name}
        </h4>
        <div className="flex">
          <Interaction
            iconId="profile"
            iconColor={IconColor.Violet}
            textColor={TextColor.Violet}
            iconHoverColor={IconHoverColor.DarkViolet}
            textHoverColor={TextHoverColor.DarkViolet}
            label={userName}
            size="small"
            onClickFn={openProfile}
          />
          {size === 'large' ? (
            <>
              <Interaction
                iconId="location"
                iconColor={IconColor.LightGray}
                textColor={TextColor.LightGray}
                iconHoverColor={IconHoverColor.Gray}
                textHoverColor={TextHoverColor.Gray}
                label={location ?? ''}
                size="small"
              />
              <Interaction
                iconId="calendar"
                iconColor={IconColor.LightGray}
                textColor={TextColor.LightGray}
                iconHoverColor={IconHoverColor.Gray}
                textHoverColor={TextHoverColor.Gray}
                label={memberSince ?? ''}
                size="small"
              />
            </>
          ) : (
            size === 'medium' && (
              <Interaction
                iconId="time"
                iconColor={IconColor.LightGray}
                textColor={TextColor.LightGray}
                iconHoverColor={IconHoverColor.Gray}
                textHoverColor={TextHoverColor.Gray}
                label={postCreationTime ?? ''}
                size="small"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
