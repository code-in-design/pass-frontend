import { useCallback, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import SignUp from '../components/SignUp/SignUp1';
import SignUp2 from '../components/SignUp/SignUp2';
import SignUp3 from '../components/SignUp/SignUp3';
import SignUp4 from '../components/SignUp/SignUp4';
import SignUp5 from '../components/SignUp/SignUp5';
import SignUp6 from '../components/SignUp/SignUp6';
import { useSetSignUpMutation } from '../authApi';
import Router from 'next/router';

const SignUpContainer = () => {
  const [step, setStep] = useState(1);
  const mutation = useSetSignUpMutation();
  const setSignUp = mutation[0];
  const { register, handleSubmit, setValue, trigger, getValues, control } = useForm();
  const router = Router;

  const checkbox = useWatch({
    control,
    name: ['agree_flag_14_age', 'agree_flag_terms', 'agree_flag_privacy', 'agree_flag_marketing', 'agree_flag_event'],
  });

  const onsubmit = data => {
    console.log(data);
    setSignUp(data);
    router.push('/signIn');
  };

  const goPrevStep = useCallback(() => {
    setStep(prev => prev - 1);
  }, [step]);

  const goNextStep = useCallback(async () => {
    if (step === 1) {
      const result = await trigger(['agree_flag_14_age', 'agree_flag_terms', 'agree_flag_privacy']);
      if (result) {
        setStep(prev => prev + 1);
      } else {
        alert('필수항목을 선택해주세요.');
      }
    } else if (step === 2) {
      const result = await trigger('type');
      if (result) {
        setStep(prev => prev + 1);
      } else {
        alert('신분을 선택해주세요.');
      }
    } else if (step === 3) {
      const result = await trigger(['name', 'phone']);
      if (result) {
        setStep(prev => prev + 1);
      } else {
        if (getValues('name')) {
          alert('연락처를 입력해주세요.');
        } else if (getValues('phone')) {
          alert('이름을 입력해주세요.');
        } else {
          alert('이름과 연락처를 입력해주세요.');
        }
      }
    } else if (step === 4) {
      const result = await trigger(['email', 'address', 'zonecode']);
      if (result) {
        setStep(prev => prev + 1);
      } else {
        if (getValues('email')) {
          alert('주소를 입력해주세요.');
        } else if (getValues('address')) {
          alert('이메일을 입력해주세요.');
        } else {
          alert('이메일과 지역을 입력해주세요.');
        }
      }
    } else if (step === 5) {
      const result = await trigger(['password', 'gender', 'grade']);
      if (result) {
        setStep(prev => prev + 1);
      } else {
        alert('추가정보를 입력해주세요.');
      }
    }
  }, [step]);

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      {step === 1 && <SignUp onNextButtonClick={goNextStep} register={register} setValue={setValue} getValues={getValues} checkbox={checkbox} />}
      {step === 2 && <SignUp2 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} />}
      {step === 3 && <SignUp3 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} />}
      {step === 4 && <SignUp4 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} />}
      {step === 5 && <SignUp5 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} register={register} setValue={setValue} />}
      {step === 6 && <SignUp6 onPrevButtonClick={goPrevStep} register={register} />}
    </form>
  );
};

export default SignUpContainer;
