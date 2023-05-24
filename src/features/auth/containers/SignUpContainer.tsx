import { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import SignUp from '../components/SignUp/SignUp1';
import SignUp2 from '../components/SignUp/SignUp2';
import SignUp3 from '../components/SignUp/SignUp3';
import SignUp4 from '../components/SignUp/SignUp4';
import SignUp5 from '../components/SignUp/SignUp5';
import SignUp6 from '../components/SignUp/SignUp6';
import { useSetSignUpMutation } from '../apis/authApi';
import Router from 'next/router';
import { isEmpty } from 'lodash';

const SignUpContainer = () => {
  const [step, setStep] = useState(1);
  const mutation = useSetSignUpMutation();
  const setSignUp = mutation[0];
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    control,
    formState: { errors },
  } = useForm();
  const router = Router;

  const checkbox = useWatch({
    control,
    name: ['agree_flag_14_age', 'agree_flag_terms', 'agree_flag_privacy', 'agree_flag_marketing', 'agree_flag_event'],
  });

  const onsubmit = data => {
    setSignUp(data);
    router.push('/signIn');
  };

  const showError = () => {
    if (!isEmpty(errors)) {
      let firstKey = Object.keys(errors)[0];
      let firstValue = errors[firstKey];
      if (firstValue) {
        alert(firstValue.message);
      }
    }
  };

  const triggerAndCheck = async fields => {
    const result = await trigger(fields);
    if (!result) {
      showError();
      return false;
    }
    return setStep(prev => prev + 1);
  };

  const goPrevStep = useCallback(() => {
    setStep(prev => prev - 1);
  }, []);

  const goNextStep = async () => {
    const steps = [['agree_flag_14_age', 'agree_flag_terms', 'agree_flag_privacy'], 'type', ['name', 'phone'], ['email', 'address', 'zonecode'], ['password', 'gender', 'grade']];
    for (let i = 0; i < steps.length; i++) {
      const result = await triggerAndCheck(steps[i]);
      if (!result) {
        return;
      }
    }
  };

  useEffect(() => {
    showError();
  }, [errors]);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {step === 1 && <SignUp onNextButtonClick={goNextStep} register={register} setValue={setValue} getValues={getValues} checkbox={checkbox} />}
      {step === 2 && <SignUp2 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} errors={errors} />}
      {step === 3 && <SignUp3 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} />}
      {step === 4 && <SignUp4 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} />}
      {step === 5 && <SignUp5 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} />}
      {step === 6 && <SignUp6 onPrevButtonClick={goPrevStep} register={register} />}
    </form>
  );
};

export default SignUpContainer;
