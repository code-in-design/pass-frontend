import { isEmpty } from 'lodash';
import { SubmitErrorHandler, FieldValues } from 'react-hook-form';

const useFormError = () => {
  // react-hook-form에서 에러가 있을때 맨 첫번째 에러를 alert함
  const onInvalid: SubmitErrorHandler<FieldValues> = (errors, event) => {
    if (!isEmpty(errors)) {
      const firstKey = Object.keys(errors)[0];
      const firstValue = errors[firstKey];
      if (firstValue) {
        alert(firstValue?.message);
      }
    }
  };

  return { onInvalid };
};

export default useFormError;
