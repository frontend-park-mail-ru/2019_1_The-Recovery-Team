import { HTTP_STATUS } from 'config/API';
import Requester from 'libs/Requester/Requester';
import { InputConfig } from './types';

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

export const recoverField: InputValidator = (input, nextValue = null) => {
  const tmpPlaceholder = input.isError ? input.placeholder : input.label;

  return {
    ...input,
    isError: false,
    value: nextValue === null ? input.value : nextValue,
    currentPlaceholder: tmpPlaceholder,
  };
};

export const validateRequired: InputValidator = (input, nextValue = null) => {
  if (input.isError) {
    return input;
  }

  const value = nextValue === null ? input.value : nextValue;
  const isError = value.length === 0;

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

export const setInputError = (
  input: InputConfig,
  message: string | null = null
): InputConfig => ({
  ...input,
  isError: true,
  currentPlaceholder: message || input.label,
});

const MIN_PASSWORD_LENGTH = 4;
const MAX_PASSWORD_LENGTH = 32;

export const validatePasswordLength  = (input: InputConfig): InputConfig => {
  if (input.value.length < MIN_PASSWORD_LENGTH) {
    return {
      ...input,
      currentPlaceholder: 'Слишком короткий пароль',
      isError: true,
    };
  }
  if (input.value.length > MAX_PASSWORD_LENGTH) {
    return {
      ...input,
      currentPlaceholder: 'Слишком длинный пароль',
      isError: true,
    };
  }

  return {
    ...input,
    currentPlaceholder: 'Пароль',
    isError: false,
  };
};
