import React, { FC, FormEvent, useState } from 'react';
import { FileInput } from '../../Input/FileInput';
import { Modal } from '../Modal';

export interface FileUploadModalProps {
  isOpen: boolean;
  header: string;
  title: string;
  restrictions: string;
  label: string;
  closeFn: () => void;
  submitFn: (file: File) => void;
}

export const FileUploadModal: FC<FileUploadModalProps> = ({
  isOpen,
  header,
  title,
  restrictions,
  label,
  closeFn,
  submitFn,
}) => {
  const [file, setFile] = useState<File>();

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    if (file) {
      submitFn(file);
      setFile(undefined);
      closeFn();
    }
  };

  const handleClose = (): void => {
    closeFn();
  };

  return (
    <Modal isOpen={isOpen} title={header} closeFn={handleClose} submitFn={handleSubmit}>
      <FileInput
        label={label}
        title={title}
        restrictions={restrictions}
        addFileFn={(file: File) => setFile(() => file)}
      />
    </Modal>
  );
};
