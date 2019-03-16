import { InputConfig } from './types';

export type InputValidator = (
  input: InputConfig,
  nextValue: string
) => InputConfig;

export const touchField: InputValidator = (input, nextValue) => ({
  ...input,
  value: nextValue,
  touched: true,
});

export const validateRequired: InputValidator = (input, nextValue) => {
  const isError = input.touched && nextValue.length === 0;

  return {
    ...input,
    isError,
    placeholder: isError ? `${input.label} - обязательное поле` : input.label,
    value: nextValue,
  };
};
