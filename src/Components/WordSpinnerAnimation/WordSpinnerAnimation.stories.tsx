import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { WordSpinnerAnimation } from './WordSpinnerAnimation';

export default {
  title: 'WordSpinnerAnimation',
  component: WordSpinnerAnimation,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof WordSpinnerAnimation>;

const Template: ComponentStory<typeof WordSpinnerAnimation> = (args) => <WordSpinnerAnimation {...args} />;

export const Animation = Template.bind({});
