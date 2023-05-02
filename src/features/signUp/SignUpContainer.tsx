import { useState } from 'react';
import SignUp from './components/SignUp';
import SignUp2 from './components/SignUp2';
import SignUp3 from './components/SignUp3';
import SignUp4 from './components/SignUp4';
import SignUp5 from './components/SignUp5';
import SignUp6 from './components/SignUp6';

const SignUpContainer = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <SignUp step={step} setStep={setStep} />}
      {step === 2 && <SignUp2 step={step} setStep={setStep} />}
      {step === 3 && <SignUp3 step={step} setStep={setStep} />}
      {step === 4 && <SignUp4 step={step} setStep={setStep} />}
      {step === 5 && <SignUp5 step={step} setStep={setStep} />}
      {step === 6 && <SignUp6 step={step} setStep={setStep} />}
    </>
  );
};

export default SignUpContainer;
