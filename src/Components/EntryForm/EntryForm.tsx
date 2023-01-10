import React, { FC, FormEvent, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { emailPattern, passwordPattern } from '../Input/input-validation.helpers';

export interface FormProps {
  isRegistered: boolean;
  loginFn: () => void;
  registerFn: () => void;
}

// TODO: Translate texts
export const EntryForm: FC<FormProps> = ({ isRegistered, loginFn, registerFn }) => {
  const [showLogin, setShowLogin] = useState(isRegistered);
  const [validationTrigger, setValidationTrigger] = useState(0);

  useEffect(() => setShowLogin(() => isRegistered), [isRegistered]);

  const login = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setValidationTrigger((trigger) => trigger + 1);
    if (form.checkValidity()) {
      loginFn();
      console.log(`Email: ${(form.elements.namedItem('login-email') as HTMLInputElement).value}`);
      console.log(`Password: ${(form.elements.namedItem('login-password') as HTMLInputElement).value}`);
    }
  };
  const register = (event: FormEvent): void => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    setValidationTrigger((trigger) => trigger + 1);
    if (form.checkValidity()) {
      registerFn();
      console.log(`Name: ${(form.elements.namedItem('register-name') as HTMLInputElement).value}`);
      console.log(`User: ${(form.elements.namedItem('register-user') as HTMLInputElement).value}`);
      console.log(`Email: ${(form.elements.namedItem('register-email') as HTMLInputElement).value}`);
      console.log(`Password: ${(form.elements.namedItem('register-password') as HTMLInputElement).value}`);
    }
  };

  const changeLayout = (): void => {
    setShowLogin((showLogin) => !showLogin);
    setValidationTrigger(() => 0);
  };

  return (
    <>
      {showLogin ? (
        <div>
          <form onSubmit={login} className="grid sm:grid-cols-5 mb-6" noValidate>
            <h1 className="sm:col-start-2 sm:col-end-5 mb-6 font-bold text-5xl">Anmelden</h1>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input
                key="login-email"
                name="login-email"
                label="Email"
                type="email"
                required={true}
                validationTrigger={validationTrigger}
                pattern={emailPattern}
              />
              <Input
                key="login-password"
                name="login-password"
                label="Password"
                type="password"
                required={true}
                validationTrigger={validationTrigger}
                pattern={passwordPattern}
              />
            </div>
            <div className="sm:col-start-2 sm:col-end-5">
              <Button
                id="login-button"
                icon="mumble"
                type="submit"
                color="Gradient"
                label="Let's Mumble"
                size="L"
              ></Button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="mr-1">{'Noch kein Account?'}</span>
            <button className="underline text-violet-600" onClick={changeLayout}>
              {'Jetzt registrieren'}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <form onSubmit={register} className="grid sm:grid-cols-5 mb-6" noValidate>
            <h1 className="sm:col-start-2 sm:col-end-5 mb-6 font-bold text-5xl">Registrieren</h1>
            <div className="sm:col-start-2 sm:col-end-5 mb-6">
              <Input
                key="register-name"
                name="register-name"
                label="Name"
                type="text"
                required={false}
                validationTrigger={validationTrigger}
              />
              <Input
                key="register-user"
                name="register-user"
                label="User Name"
                type="text"
                required={true}
                validationTrigger={validationTrigger}
              />
              <Input
                key="register-email"
                name="register-email"
                label="Email"
                type="email"
                required={true}
                validationTrigger={validationTrigger}
                pattern={emailPattern}
              />
              <Input
                key="register-password"
                name="register-password"
                label="Password"
                type="password"
                required={true}
                validationTrigger={validationTrigger}
                pattern={passwordPattern}
              />
            </div>
            <div className="sm:col-start-2 sm:col-end-5">
              <Button
                id="login-button"
                icon="mumble"
                type="submit"
                color="Gradient"
                label="Let's Mumble"
                size="L"
              ></Button>
            </div>
          </form>
          <div className="flex justify-center">
            <span className="mr-1">{'Bereits registriert?'}</span>
            <button className="underline text-violet-600" onClick={changeLayout}>
              {'Jetzt anmelden'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
