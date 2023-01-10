import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Post } from './Post';

export default {
  title: 'Post',
  component: Post,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => (
  <div className="md:mx-10">
    <Post {...args} />
  </div>
);

export const SimplePost = Template.bind({});

SimplePost.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  commentCount: 0,
  isLiked: false,
  likeCount: 0,
  link: 'Random Link',
};

const TemplateWithImage: ComponentStory<typeof Post> = (args) => (
  <div className="md:mx-10">
    <Post {...args}>
      <img src="https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg" />
    </Post>
  </div>
);

export const FullPost = TemplateWithImage.bind({});
FullPost.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  isLiked: true,
  likeCount: 13,
  link: 'Random Link',
  hashtags: ['muchart', 'veryphoto', 'soballoons'],
};

const TemplateWithGif: ComponentStory<typeof Post> = (args) => (
  <div className="md:mx-10">
    <Post {...args}>
      <img src="https://gifdb.com/images/high/neon-car-synthwave-drive-loop-43ljtbdmd15bzat5.webp" />
    </Post>
  </div>
);

export const PostWithGif = TemplateWithGif.bind({});
PostWithGif.args = {
  name: 'Robert Vogt',
  userName: 'robertvogt',
  postCreationTime: 'vor 11 Minuten',
  src: 'assets/images/profile/r.vogt.jpg',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut >labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  commentCount: 1234,
  isLiked: true,
  likeCount: 4235,
  link: 'Random Link',
  hashtags: ['fast', 'hip', 'retro'],
};
