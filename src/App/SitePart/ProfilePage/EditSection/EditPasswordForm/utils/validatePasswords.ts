import { InputConfig } from 'utils/form/types';
import { validatePasswordLength } from 'utils/form/validators';

export default (
  newP: InputConfig,
  newRepeatP: InputConfig
): [InputConfig, InputConfig] => {
  if (
    !newP.touched ||
    !newRepeatP.touched ||
    newP.isError ||
    (newRepeatP.isError &&
      newRepeatP.currentPlaceholder !== 'Новые пароли должны совпадать')
  ) {
    return [newP, newRepeatP];
  }

  if (newRepeatP.value !== newP.value) {
    return [
      newP,
      {
        ...newRepeatP,
        isError: true,
        currentPlaceholder: 'Новые пароли должны совпадать',
      },
    ];
  }

  const newRepeatedPas = validatePasswordLength(newRepeatP);

  return [newP, newRepeatedPas];
};
