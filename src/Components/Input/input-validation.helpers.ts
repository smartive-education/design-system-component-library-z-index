export function getTranslationKeyForError(element: HTMLInputElement): string {
  const errors: Record<string, string> = {
    valueMissing: 'error.validation.valueMissing',
    tooLong: 'error.validation.tooLong',
    tooShort: 'error.validation.tooShort',
    typeMismatch: 'error.validation.typeMismatch',
    patternMismatch: 'error.validation.patternMismatch',
  };

  const translationKey = Object.keys(errors).find(
    (key: string) => element?.validity && element.validity[key as keyof ValidityState]
  );
  return translationKey ? errors[translationKey] : 'error.validation.unknown';
}

export function isFileSizeValid(selectedFile: File | null | undefined, allowedFileSize: number): boolean {
  return !!selectedFile && selectedFile.size <= allowedFileSize * 1000 * 1000;
}

export function isFileExtensionValid(selectedFilePath: string, allowedExtensions: RegExp): boolean {
  return !!selectedFilePath && !!selectedFilePath.match(allowedExtensions);
}

export const emailPattern = "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
export const passwordPattern = '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}';
export const defaultFileSize = 5;
export const defaultExtensions = /(\.jpg|\.jpeg|\.png)$/i;

export const defaultErrorMessages: Record<string, string> = {
  'error.validation.valueMissing': 'Bitte geben Sie einen Wert ein.',
  'error.validation.tooLong': 'Wert zu lang.',
  'error.validation.tooShort': 'Wert zu kurz.',
  'error.validation.typeMismatch': 'Der eingegebene Wert entspricht nicht dem Feld Typ.',
  'error.validation.patternMismatch': 'Das Input Format stimmt nicht.',
  'error.validation.sizeOverflow': 'File ist zu gross.',
  'error.validation.invalidExtension': 'File Typ ist nicht erlaubt.',
  'error.validation.tooManyFiles': 'Bitte wählen Sie nur ein File aus.',
  'error.validation.unknown': 'Unbekannter Fehler',
};
