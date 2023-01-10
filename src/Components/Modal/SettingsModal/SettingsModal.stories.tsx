import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { Navigation } from '../../Navigation';
import { SettingsModal } from './SettingsModal';

export default {
  title: 'SettingsModal',
  component: SettingsModal,
  parameters: {
    backgrounds: { default: 'grey' },
  },
} as ComponentMeta<typeof SettingsModal>;

const noop = () => {};

const Template: ComponentStory<typeof SettingsModal> = (args) => {
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
      <SettingsModal {...args} isOpen={isOpen} closeFn={() => setIsOpen(false)} />
    </div>
  );
};

export const Settings = Template.bind({});
Settings.args = {
  title: 'Einstellungen',
  submitFn: noop,
};
