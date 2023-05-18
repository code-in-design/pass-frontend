import { useCallback, useState } from 'react';
import SignUp from '../components/SignUp/SignUp1';
import SignUp2 from '../components/SignUp/SignUp2';
import SignUp3 from '../components/SignUp/SignUp3';
import SignUp4 from '../components/SignUp/SignUp4';
import SignUp5 from '../components/SignUp/SignUp5';
import SignUp6 from '../components/SignUp/SignUp6';

const SignUpContainer = () => {
  const [step, setStep] = useState(1);

  const goPrevStep = useCallback(() => {
    setStep(prev => prev - 1);
  }, []);
  const goNextStep = useCallback(() => {
    setStep(prev => prev + 1);
  }, []);

  return (
    <>
      {step === 1 && <SignUp onNextButtonClick={goNextStep} />}
      {step === 2 && <SignUp2 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} />}
      {step === 3 && <SignUp3 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} />}
      {step === 4 && <SignUp4 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} />}
      {step === 5 && <SignUp5 onPrevButtonClick={goPrevStep} onNextButtonClick={goNextStep} />}
      {step === 6 && <SignUp6 onPrevButtonClick={goPrevStep} />}
    </>
  );
};

export default SignUpContainer;
