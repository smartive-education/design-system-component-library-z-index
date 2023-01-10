import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { EntryForm } from './EntryForm';

export default {
  title: 'EntryForm',
  component: EntryForm,
} as ComponentMeta<typeof EntryForm>;

const noop = () => {};

const Template: ComponentStory<typeof EntryForm> = (args) => <EntryForm {...args} />;

export const DynamicForm = Template.bind({});
DynamicForm.args = {
  loginFn: noop,
  registerFn: noop,
};
