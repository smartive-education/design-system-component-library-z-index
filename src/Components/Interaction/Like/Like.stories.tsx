import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Like } from './Like';

export default {
  title: 'Like',
  component: Like,
} as ComponentMeta<typeof Like>;

const Template: ComponentStory<typeof Like> = (args) => <Like {...args} />;

export const DynamicLike = Template.bind({});
DynamicLike.args = {
  value: 0,
  isLiked: false,
};
