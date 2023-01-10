import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { ProfilePicture } from '../../ProfilePicture/ProfilePicture';
import { FileUploadModal } from './FileUploadModal';

export default {
  title: 'FileUploadModal',
  component: FileUploadModal,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof FileUploadModal>;

const noop = () => {};

const Template: ComponentStory<typeof FileUploadModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ProfilePicture name="unkown" src="" size="large" edit={true} onClick={noop} onEdit={() => setIsOpen(true)} />
      <FileUploadModal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} />
    </div>
  );
};

export const FileUpload = Template.bind({});
FileUpload.args = {
  header: 'Bild hochladen',
  label: '... oder Datei auswählen',
  title: 'Datei hierhin ziehen',
  restrictions: 'JPEG oder PNG, maximal 5 MB',
  submitFn: (file: File) => console.log(file),
};
