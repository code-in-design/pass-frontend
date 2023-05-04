import { useCallback, useState } from 'react';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import SignUp4 from './components/SignUp4';
import SignUp5 from './components/SignUp5';
import SignUp6 from './components/SignUp6';

const SignUpContainer = () => {
  const [step, setStep] = useState(1);

  const changeStep = useCallback((value: number) => {
    setStep(prev => prev + value);
  }, []);

  return (
    <>
      {step === 1 && <SignUp onClick={changeStep} />}
      {step === 2 && <SignUp2 onClick={changeStep} />}
      {step === 3 && <SignUp3 onClick={changeStep} />}
      {step === 4 && <SignUp4 onClick={changeStep} />}
      {step === 5 && <SignUp5 onClick={changeStep} />}
      {step === 6 && <SignUp6 onClick={changeStep} />}
    </>
  );
};

export default SignUpContainer;
