import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const MessageButtons = Template.bind({});
MessageButtons.args = {
  LLabel: 'Bild Hochladen',
  RLabel: 'Senden',
};
