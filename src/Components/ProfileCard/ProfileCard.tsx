import React, { FC, useMemo, useState } from 'react';
import { ProfilePicture } from '../ProfilePicture/ProfilePicture';
import { Icon, IconColor, IconHoverColor } from '../../Components/Icon';
import { Interaction, TextColor, TextHoverColor } from '../../Components/Interaction';
interface ProfileCardProps {
  name: string;
  userName: string;
  profileImage: string;
  profilePicture: string;
  location: string;
  calendarText: string;
  profileText: string;
  openProfile: () => void;
  followed: boolean;
  onFollow: () => void;
  onEdit: () => void;
}

const iconClose = 'close';
const iconEdit = 'edit';

export const ProfileCard: FC<ProfileCardProps> = ({
  name,
  profileImage,
  profilePicture,
  userName,
  location,
  calendarText,
  profileText,
  openProfile,
  followed,
  onFollow,
  onEdit,
}) => {
  const buttonClasses = useMemo(() => {
    if (followed) {
      return {
        classes: 'text-white bg-slate-600',
        text: 'Unfollow',
      };
    }
    return {
      classes: 'text-black',
      text: 'Follow',
    };
  }, [followed]);
  const [showEditIcon, setShowEditIcon] = useState(false);

  return (
    <div className="py-4 px-6 md:py-8 md:px-12 order-1 border-transparent rounded-xl">
      <div className="relative">
        <div
          className="mb-4 max-h-80 object-contain relative overflow-hidden rounded-xl cursor-pointer bg-violet-600"
          onClick={onEdit}
          onMouseOver={() => setShowEditIcon(true)}
          onMouseOut={() => setShowEditIcon(false)}
        >
          <img src={profileImage} alt="" className="ease-in-out duration-200 hover:opacity-50" />
          <div className={`absolute inset-1/2 ${showEditIcon ? '' : 'hidden'}`}>
            <div className="animate-icontilt"><Icon id={iconEdit} size={32} color={IconColor.White} /></div>
          </div>
        </div>
        <div className="absolute -bottom-20 right-10">
          <ProfilePicture name="unkown" size="large" src={profilePicture} />
        </div>
      </div>
      <h4 className="pt-5 text-3xl whitespace-nowrap text-ellipsis overflow-hidden font-semibold" title={name}>
        {name}
      </h4>
      <div className="flex items-center pt-4">
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
        <Interaction
          iconId="location"
          iconColor={IconColor.LightGray}
          textColor={TextColor.LightGray}
          iconHoverColor={IconHoverColor.Gray}
          textHoverColor={TextHoverColor.Gray}
          label={location}
          size="small"
        />
        <Interaction
          iconId="calendar"
          iconColor={IconColor.LightGray}
          textColor={TextColor.LightGray}
          iconHoverColor={IconHoverColor.Gray}
          textHoverColor={TextHoverColor.Gray}
          label={calendarText}
          size="small"
        />
      </div>
      <div className="pt-4 text-slate-400">{profileText}</div>
      <div className="flex justify-end pt-10">
        {followed && <div className="pr-4 pt-2 text-slate-400">Du folgst Damian Carduff</div>}
        <button
          onClick={onFollow}
          className={`border border-solid rounded-md px-4 py-2 flex border-2 border-slate-600 ${buttonClasses.classes}`}
        >
          <div className="fwhitespace-nowrap">{buttonClasses.text}</div>
          {followed && (
            <div className="pt-1 pl-4">
              <Icon id={iconClose} size={16} color={IconColor.White} />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
