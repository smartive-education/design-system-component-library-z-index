import React, { FC, useState } from 'react';
import { IconColor } from '../../../Components/Icon';
import { BackGroundColor, Interaction, TextColor } from '../Interaction';

export interface ShareProps {
  value: string;
}

export const Share: FC<ShareProps> = ({ value }) => {
  const copyToClipBoard = (): void => {
    if (!isCopied) {
      void navigator.clipboard.writeText(value);
      setIsCopied(() => true);
      setTimeout(() => setIsCopied(() => false), 3000);
    }
  };

  const [isCopied, setIsCopied] = useState(false);

  // TODO add translation for label
  return (
    <div>
      <div className="hidden md:block">
        <Interaction
          iconId={'share'}
          label={isCopied ? 'Link is copied' : 'Copy Link'}
          iconColor={IconColor.Gray}
          textColor={TextColor.Gray}
          backgroundColor={BackGroundColor.Gray}
          size="standard"
          onClickFn={copyToClipBoard}
        />
      </div>
      <div className="block md:hidden">
        <Interaction
          iconId={'share'}
          label=""
          iconColor={IconColor.Gray}
          textColor={TextColor.Gray}
          backgroundColor={BackGroundColor.Gray}
          size="standard"
          onClickFn={copyToClipBoard}
        />
      </div>
    </div>
  );
};
