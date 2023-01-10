import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { emailPattern, passwordPattern } from './input-validation.helpers';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text',
  type: 'text',
  required: true,
  maxLength: 40,
  placeholder: 'Type in some text',
};

export const TextAreaInput = Template.bind({});
TextAreaInput.args = {
  label: 'Textarea',
  type: 'textarea',
  required: true,
  maxLength: 200,
  placeholder: 'Type in some text',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  label: 'Email',
  type: 'email',
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: emailPattern,
  placeholder: 'Email address',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Passwort',
  type: 'password',
  required: true,
  minLength: 6,
  maxLength: 20,
  pattern: passwordPattern,
  placeholder: 'Password',
};
