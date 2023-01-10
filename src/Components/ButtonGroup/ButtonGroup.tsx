import React, { FC } from 'react';

import { Button, ButtonType } from '../Button';

interface ButtonGroupProps {
  LId: string;
  LType?: ButtonType;
  LColor?: string;
  LSize?: string;
  LLabel: string;
  LIcon?: string;
  LOnClick: () => void;
  RId: string;
  RType?: ButtonType;
  RColor?: string;
  RSize?: string;
  RLabel: string;
  RIcon?: string;
  ROnClick?: () => void;
}

export const ButtonGroup: FC<ButtonGroupProps> = ({
  LId,
  LType = 'button',
  LColor = 'Slate',
  LSize = 'M',
  LLabel,
  LIcon = 'upload',
  LOnClick,
  RId,
  RType = 'submit',
  RColor = 'Violet',
  RSize = 'M',
  RLabel,
  RIcon = 'send',
  ROnClick,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button type={LType} id={LId} color={LColor} size={LSize} label={LLabel} onClick={LOnClick} icon={LIcon} />
      <Button type={RType} id={RId} color={RColor} size={RSize} label={RLabel} onClick={ROnClick} icon={RIcon} />
    </div>
  );
};
