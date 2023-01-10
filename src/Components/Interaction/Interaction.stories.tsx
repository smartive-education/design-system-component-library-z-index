import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { IconColor, IconHoverColor } from '../Icon/Icon';
import { Interaction, TextColor, TextHoverColor } from './Interaction';

export default {
  title: 'Interaction',
  component: Interaction,
} as ComponentMeta<typeof Interaction>;

const Template: ComponentStory<typeof Interaction> = (args) => <Interaction {...args} />;

export const UserName = Template.bind({});
UserName.args = {
  iconId: 'profile',
  label: 'Username',
  iconColor: IconColor.Violet,
  textColor: TextColor.Violet,
  iconHoverColor: IconHoverColor.DarkViolet,
  textHoverColor: TextHoverColor.DarkViolet,
};

export const Location = Template.bind({});
Location.args = {
  iconId: 'location',
  label: 'Location',
};

export const Joined = Template.bind({});
Joined.args = {
  iconId: 'calendar',
  label: 'Mitglied seit 4 Wochen',
};

export const Timestamp = Template.bind({});
Timestamp.args = {
  iconId: 'time',
  label: 'vor 11 Minuten',
};
