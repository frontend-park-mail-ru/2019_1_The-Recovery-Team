import Requester from 'libs/Requester/Requester';
import { InputConfig } from './types';
import { HTTP_STATUS } from 'config/API';

export type InputValidator = (
  input: InputConfig,
  nextValue?: string | null // Если null, значит, текущее значение
) => InputConfig;

export type AsyncInputValidator = (
  input: InputConfig,
  nextValue?: string | null // Если null, значит, текущее значение
) => Promise<InputConfig>;

export const touchField: InputValidator = (input, nextValue = null) => ({
  ...input,
  isError: false,
  value: nextValue === null ? input.value : nextValue,
  touched: true,
  currentPlaceholder: input.placeholder,
});

export const validateRequired: InputValidator = (input, nextValue = null) => {
  if (input.isError) {
    return input;
  }

  const value = nextValue === null ? input.value : nextValue;
  const isError = input.touched && value.length === 0;

  return {
    ...input,
    isError,
    value,
    currentPlaceholder: isError
      ? `${input.label} - обязательное поле`
      : input.label,
  };
};

export const validateAlreadyExists = (
  url: string
): AsyncInputValidator => async (input, nextValue = null) => {
  const value = nextValue === null ? input.value : nextValue;
  const { error } = await Requester.get(url, {
    [input.name]: value,
  });

  if (!error) {
    return {
      ...input,
      value,
      currentPlaceholder: `Такой ${input.label} уже существует`,
      isError: true,
    };
  }

  if ((error as any).status === HTTP_STATUS.badRequest) {
    return {
      ...input,
      value,
      currentPlaceholder: `Некорректный ${input.label}`,
      isError: true,
    };
  }

  return {
    ...input,
    value,
  };
};
