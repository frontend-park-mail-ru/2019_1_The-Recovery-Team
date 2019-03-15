import { InputConfig } from 'utils/form/types';

export const validateRequired = (field: InputConfig): boolean => field.touched && field.value.length === 0;

export default (newP: InputConfig, newRepeatP: InputConfig): [InputConfig, InputConfig] => {

  const nextNewPError = validateRequired(newP);
  const nextNewPPlaceholder = nextNewPError ? 'Обязательное поле' : newP.label;

  const nextNewP: InputConfig = {
    ...newP,
    touched: true,
    isError: nextNewPError,
    placeholder: nextNewPPlaceholder,
  };

  if (!newRepeatP.touched) {
    return [nextNewP, newRepeatP];
  }

  const nextNewRepeatPError = validateRequired(newRepeatP);
  if (nextNewRepeatPError) {
    return[nextNewP, {
      ...newRepeatP,
      isError: true,
      placeholder: 'Обязательное поле',
    }];
  }

  if (newRepeatP.value !== newP.value) {
    return[nextNewP, {
      ...newRepeatP,
      isError: true,
      placeholder: 'Новые пароли должны совпадать',
    }];
  }

  return [nextNewP, {
    ...newRepeatP,
    isError: false,
    placeholder: newRepeatP.label,
  }];
};
