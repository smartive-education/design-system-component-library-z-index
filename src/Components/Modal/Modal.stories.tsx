import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Navigation } from '../Navigation';
import { Modal } from './Modal';

export default {
  title: 'Modal',
  component: Modal,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof Modal>;

const noop = () => {};

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navigation
        profilePictureSrc="assets/images/profile/r.vogt.jpg"
        navigateToFeed={noop}
        navigateToProfile={noop}
        logout={noop}
        openSettings={() => setIsOpen(true)}
      />
      <Modal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} />
    </div>
  );
};

export const ModalFrame = Template.bind({});
ModalFrame.args = {
  title: 'Modal Frame',
  closeFn: noop,
  submitFn: noop,
};
