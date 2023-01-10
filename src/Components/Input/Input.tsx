import React, { FC, useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Icon, IconColor } from '../Icon/Icon';
import { defaultErrorMessages, getTranslationKeyForError } from './input-validation.helpers';

export type InputType = 'text' | 'password' | 'email' | 'textarea';
export interface InputProps {
  label: string;
  name: string;
  type: InputType;
  required: boolean;
  validationTrigger: number;
  errorTranslations?: Record<string, string>;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  placeholder?: string;
}

interface InputState {
  value: string;
  errorMessage: string;
  isValid: boolean;
  isDirty: boolean;
  originalType: InputType;
  currentType: InputType;
}

export const Input: FC<InputProps> = ({
  label,
  name,
  type,
  required,
  validationTrigger,
  errorTranslations = defaultErrorMessages,
  minLength,
  maxLength,
  pattern,
  placeholder,
}) => {
  const defaultInputState: InputState = {
    value: '',
    errorMessage: '',
    isValid: false,
    isDirty: false,
    originalType: type,
    currentType: type,
  };

  const [inputState, setInputState] = useState(defaultInputState);
  const inputId = uuid();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    if (input && validationTrigger > 0) {
      const isElementValid = input.checkValidity();
      setInputState((state: InputState) => ({
        ...state,
        isValid: isElementValid,
        isDirty: true,
        errorMessage: !isElementValid ? showErrorMessage(getTranslationKeyForError(input)) : '',
      }));
    }
  }, [validationTrigger]);

  const handleChange = (event: React.ChangeEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity();
    setInputState((state: InputState) => ({
      ...state,
      isValid: isElementValid,
      isDirty: true,
      errorMessage: !isElementValid ? state.errorMessage : '',
      value: element.value,
    }));
  };

  const handleBlur = (event: React.FocusEvent): void => {
    const element = event.target as HTMLInputElement;
    const isElementValid = element.checkValidity();
    setInputState((state: InputState) => ({
      ...state,
      isValid: isElementValid,
      errorMessage: !isElementValid && state.isDirty ? showErrorMessage(getTranslationKeyForError(element)) : '',
      value: element.value,
    }));
  };

  const resetValue = (): void =>
    setInputState((state: InputState) => ({
      ...state,
      value: '',
    }));
  const toggleType = (): void =>
    setInputState((state: InputState) => ({
      ...state,
      currentType: state.currentType === 'password' ? 'text' : 'password',
    }));
  const showErrorMessage = (key: string): string => errorTranslations[key] || key;

  return (
    <div className={`flex flex-col ${inputState.errorMessage ? '' : 'mb-4'}`}>
      <label htmlFor={inputId} className="text-slate-700 font-semibold">
        {label}
      </label>
      <div className="relative">
        {type === 'textarea' ? (
          <textarea
            id={inputId}
            name={name}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputState.value}
            rows={4}
            className={`w-full border border-solid border-slate-200
       bg-slate-50 rounded-md 
       ${
         !inputState.isValid && inputState.isDirty
           ? 'border-2 border-rose-500 focus:outline-none focus:border-2 focus:border-violet-600'
           : 'border-2 hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600'
       }
       p-4
       leading-none`}
          ></textarea>
        ) : (
          <input
            ref={inputRef}
            id={inputId}
            name={name}
            type={inputState.currentType}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputState.value}
            className={`w-full h-12 border border-solid border-slate-200
       bg-slate-50 rounded-md 
       ${
         !inputState.isValid && inputState.isDirty
           ? 'border-2 border-rose-500 focus:outline-none focus:border-2 focus:border-violet-600'
           : 'border-2 hover:border-2 hover:border-violet-600 focus:outline-none focus:border-2 focus:border-violet-600'
       }
       p-4
       leading-none`}
          />
        )}

        <button
          type="button"
          className="inline-block absolute z-10 top-1/2 -translate-y-1/2 right-6"
          onClick={inputState.originalType === 'email' ? resetValue : toggleType}
        >
          {inputState.originalType === 'password' && <Icon size={16} id={'eye'} color={IconColor.Gray} />}
          {inputState.originalType === 'email' && !inputState.isValid && inputState.isDirty && inputState.value && (
            <Icon size={14} id={'close'} color={IconColor.LightPink} />
          )}
        </button>
      </div>
      <span className="self-end text-rose-500 text-xs">{inputState.errorMessage}</span>
    </div>
  );
};
