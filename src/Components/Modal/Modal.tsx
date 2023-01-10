import React, { FC, FormEvent, ReactNode } from 'react';
import { ButtonGroup } from '../ButtonGroup';
import { Icon, IconColor } from '../Icon';

export interface ModalProps {
  isOpen: boolean;
  title: string;
  closeFn: () => void;
  submitFn: (event: FormEvent) => void;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, title, closeFn, submitFn, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div>
      <div className="fixed left-0 top-0 right-0 bottom-0 overflow-y-scroll flex items-center justify-center bg-violet-600/30">
        <div className="md:w-3/6">
          <div className="flex justify-between items-center p-8 bg-violet-600 h-16 rounded-t-lg text-white">
            <h3 className="text-3xl">{title}</h3>
            <button type="button" onClick={closeFn}>
              <Icon id="close" color={IconColor.White} />
            </button>
          </div>
          <div className="bg-white p-8 rounded-b-lg">
            <form onSubmit={submitFn} noValidate>
              <div className="mb-10">{children}</div>
              <div>
                <ButtonGroup LLabel="Abbrechen" RLabel="Speichern" LId="cancel" RId="save" LOnClick={closeFn} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
