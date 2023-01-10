import React, { ComponentMeta } from '@storybook/react';
import { Icon, IconColor } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const sizes = [14, 32, 64];

const IconVariantTemplate = (args) => (
  <ul className="flex">
    {sizes.map((size) => (
      <li className="px-4 flex">
        <Icon size={size} id={args.id} color={args.color} />
      </li>
    ))}
  </ul>
);

export const Close = IconVariantTemplate.bind({});
Close.args = {
  id: 'close',
  color: IconColor.Pink,
};
export const Eyes = IconVariantTemplate.bind({});
Eyes.args = {
  id: 'eye',
  color: IconColor.Gray,
};

const iconIds = [
  'close',
  'eye',
  'mumble',
  'calendar',
  'chat-empty',
  'chat-full',
  'check',
  'down',
  'up',
  'left',
  'right',
  'heart-full',
  'heart-empty',
  'edit',
  'enlarge',
  'location',
  'logout',
  'profile',
  'refresh',
  'share',
  'settings',
  'profile',
  'time',
  'upload',
  'send',
  'logout-start',
];

const IconListTemplate = () => (
  <ul>
    {iconIds.map((id) => (
      <li className="flex items-center pb-2">
        <Icon size={20} id={id} color={IconColor.Violet} />
        <span className="pl-4">{id}</span>
      </li>
    ))}
  </ul>
);

export const IconList = IconListTemplate.bind({});
