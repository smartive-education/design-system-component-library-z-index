import React, { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileInput } from './FileInput';

export default {
  title: 'FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;

export const DragAndDrop = Template.bind({});
DragAndDrop.args = {
  label: '... oder Datei auswählen',
  title: 'Datei hierhin ziehen',
  restrictions: 'JPEG oder PNG, maximal 5 MB',
  addFileFn: (file: File) => console.log(file),
};
