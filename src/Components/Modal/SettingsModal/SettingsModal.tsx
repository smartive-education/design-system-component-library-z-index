import React, { FC, FormEvent, useState } from 'react';
import { emailPattern, passwordPattern } from '../../../Components/Input/input-validation.helpers';
import { Input } from '../../Input';
import { Modal } from '../Modal';

export interface SettingsModalProps {
  isOpen: boolean;
  closeFn: () => void;
  submitFn: () => void;
}

export const SettingsModal: FC<SettingsModalProps> = ({ isOpen, closeFn, submitFn }) => {
  const [validationTrigger, setValidationTrigger] = useState(0);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setValidationTrigger((trigger) => trigger + 1);
    if (form.checkValidity()) {
      submitFn();
      console.log(`Name: ${(form.elements.namedItem('settings-name') as HTMLInputElement).value}`);
      console.log(`Email: ${(form.elements.namedItem('settings-email') as HTMLInputElement).value}`);
      console.log(`Location: ${(form.elements.namedItem('settings-location') as HTMLInputElement).value}`);
      console.log(`Bio: ${(form.elements.namedItem('settings-bio') as HTMLInputElement).value}`);
      console.log(`Altes Passwort: ${(form.elements.namedItem('old-password') as HTMLInputElement).value}`);
      console.log(`Neues Passwort: ${(form.elements.namedItem('new-password') as HTMLInputElement).value}`);
      closeFn();
    }
  };

  const handleClose = (): void => {
    setValidationTrigger(() => 0);
    closeFn();
  };

  return (
    <Modal isOpen={isOpen} title="Einstellungen" closeFn={handleClose} submitFn={handleSubmit}>
      <h3 className="mb-2 font-semibold text-2xl leading-6">{'Persönliche Einstellungen'}</h3>
      <div className="mb-6">
        <Input
          name="settings-name"
          label="Name Vorname"
          type="text"
          required={false}
          validationTrigger={validationTrigger}
        />
        <Input
          name="settings-email"
          label="Email Addresse"
          type="email"
          required={true}
          validationTrigger={validationTrigger}
          pattern={emailPattern}
        />
        <Input
          name="settings-location"
          label="Ortschaft"
          type="text"
          required={false}
          validationTrigger={validationTrigger}
        />
        <Input
          name="settings-bio"
          label="Biografie"
          type="textarea"
          required={false}
          validationTrigger={validationTrigger}
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold text-2xl leading-6">{'Passwort Ändern'}</h3>
        <Input
          name="old-password"
          label="Altes Passwort"
          type="password"
          required={true}
          validationTrigger={validationTrigger}
          pattern={passwordPattern}
        />
        <Input
          name="new-password"
          label="Neues Passwort"
          type="password"
          required={true}
          validationTrigger={validationTrigger}
          pattern={passwordPattern}
        />
      </div>
    </Modal>
  );
};
