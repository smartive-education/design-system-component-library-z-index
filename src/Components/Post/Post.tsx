import React, { FC, ReactNode } from 'react';
import { Like } from '../Interaction/Like/Like';
import { Share } from '../Interaction/Share/Share';
import { ProfileHeader } from './ProfileHeader/ProfileHeader';
import { Comment } from '../Interaction/Comment';

export interface PostProps {
  name: string;
  userName: string;
  postCreationTime: string;
  src: string;
  content: string;
  commentCount: number;
  likeCount: number;
  isLiked: boolean;
  link: string;
  openProfile: () => void;
  hashtags?: string[];
  children?: ReactNode;
}

export const Post: FC<PostProps> = ({
  name,
  userName,
  postCreationTime,
  src,
  content,
  commentCount,
  likeCount,
  isLiked,
  link,
  openProfile,
  hashtags,
  children,
}) => {
  return (
    <div className="py-4 px-6 md:py-8 md:px-12 bg-white border-1 border-transparent rounded-xl">
      <div className="hidden md:block">
        <ProfileHeader
          name={name}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          size="medium"
          openProfile={openProfile}
        />
      </div>
      <div className="block md:hidden">
        <ProfileHeader
          name={name}
          userName={userName}
          postCreationTime={postCreationTime}
          src={src}
          size="small"
          openProfile={openProfile}
        />
      </div>
      <p className="mb-4 md:text-2xl">{content}</p>
      {children && (
        <div className="mb-4 max-h-80 w-full border-1 border-transparent rounded-xl overflow-hidden object-contain">
          {children}
        </div>
      )}
      {hashtags && (
        <div className="mb-4">
          {hashtags.map((hashtag: string, index: number) => (
            <span className="mr-2 text-violet-600 md:text-2xl" key={index}>{`#${hashtag}`}</span>
          ))}
        </div>
      )}
      <div className="flex md:grid md:grid-cols-12 relative -left-3">
        <div className="md:col-span-4 truncate">
          <Comment value={commentCount} />
        </div>
        <div className="md:col-span-3 truncate">
          <Like value={likeCount} isLiked={isLiked} />
        </div>
        <div className="md:col-span-4">
          <Share value={link} />
        </div>
      </div>
    </div>
  );
};
