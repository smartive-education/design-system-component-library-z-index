import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MumblesLikes } from './MumblesLikes';

export default {
  title: 'MumblesLikes',
  component: MumblesLikes,
} as ComponentMeta<typeof MumblesLikes>;

const Template: ComponentStory<typeof MumblesLikes> = (args) => <MumblesLikes {...args} />;

export const ProfileActions = Template.bind({});
