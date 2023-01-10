import { getTranslationKeyForError, isFileExtensionValid, isFileSizeValid } from './input-validation.helpers';
describe('Input Validation Helpers', () => {
  describe('getTranslationKeyForError', () => {
    it.each([
      {
        element: { validity: { valueMissing: true } },
        expected: 'error.validation.valueMissing',
      },
      {
        element: { validity: { tooLong: true } },
        expected: 'error.validation.tooLong',
      },
      {
        element: { validity: { tooShort: true } },
        expected: 'error.validation.tooShort',
      },
      {
        element: { validity: { typeMismatch: true } },
        expected: 'error.validation.typeMismatch',
      },
      {
        element: { validity: { patternMismatch: true } },
        expected: 'error.validation.patternMismatch',
      },
      {
        element: { validity: { unknown: true } },
        expected: 'error.validation.unknown',
      },
      {
        element: {},
        expected: 'error.validation.unknown',
      },
      {
        element: undefined,
        expected: 'error.validation.unknown',
      },
    ])('getTranslationKeyForError($element)', ({ element, expected }) => {
      expect(getTranslationKeyForError(element as unknown as HTMLInputElement)).toEqual(expected);
    });
  });

  describe('isFileSizeValid', () => {
    it.each([
      { selectedFile: { size: 1000000 }, allowedFileSize: 1, expected: true },
      { selectedFile: { size: 1000001 }, allowedFileSize: 1, expected: false },
      { selectedFile: { size: 9000 }, allowedFileSize: 1, expected: true },
      { selectedFile: undefined, allowedFileSize: 1, expected: false },
    ])('isFileSizeValid($selectedFile, $allowedFileSize)', ({ selectedFile, allowedFileSize, expected }) => {
      expect(isFileSizeValid(selectedFile as unknown as File, allowedFileSize)).toBe(expected);
    });
  });

  describe('isFileExtensionValid', () => {
    it.each([
      { selectedFilePath: 'something.jpg', allowedExtensions: /(\.jpg|\.jpeg|\.png)$/i, expected: true },
      { selectedFilePath: 'something.png', allowedExtensions: /(\.jpg|\.jpeg|\.png)$/i, expected: true },
      { selectedFilePath: 'something.jpeg', allowedExtensions: /(\.jpg|\.jpeg|\.png)$/i, expected: true },
      { selectedFilePath: 'something.gif', allowedExtensions: /(\.jpg|\.jpeg|\.png)$/i, expected: false },
    ])('isFileExtensionValid($selectedFile, $allowedFileSize)', ({ selectedFilePath, allowedExtensions, expected }) => {
      expect(isFileExtensionValid(selectedFilePath, allowedExtensions)).toBe(expected);
    });
  });
});
