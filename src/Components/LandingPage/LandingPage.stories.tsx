import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { LandingPage } from './LandingPage';

export default {
  title: 'LandingPage',
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

const Template: ComponentStory<typeof LandingPage> = (args) => <LandingPage {...args} />;

export const Landing = Template.bind({});
Landing.args = {
  isRegistered: true,
};
