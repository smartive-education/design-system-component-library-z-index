import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Profile = Template.bind({});
Profile.args = {
  profileImage: 'https://cdn.mos.cms.futurecdn.net/CAZ6JXi6huSuN4QGE627NR.jpg',
  name: 'Damian Caduff',
  userName: 'damiancaduff',
  location: 'Chur',
  calendarText: 'Mitglied seit 35 Jahre',
  profilePicture: 'assets/images/profile/r.vogt.jpg',
  followed: true,
  profileText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};
