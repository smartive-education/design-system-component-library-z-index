import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Navigation } from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation {...args} />;

export const Header = Template.bind({});

Header.args = {
  profilePictureSrc: 'assets/images/profile/r.vogt.jpg',
};
