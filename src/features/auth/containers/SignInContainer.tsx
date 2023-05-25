import { useRouter } from 'next/router';
import { useSignInMutation } from '../apis/authApi';
import SignIn from '../components/SignIn';
import { useForm } from 'react-hook-form';
import { setLocalStorage, setSessionStorage } from '@/utils';

const SignInContainer = () => {
  const router = useRouter();
  const [setSignIn, { isError }] = useSignInMutation();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const onClickSignIn = async data => {
    const isAutoLogin = getValues('autoLogin');
    setLocalStorage('autoLogin', isAutoLogin);
    setSignIn(data);
  };

  return <SignIn onClickSignIn={onClickSignIn} isError={isError} router={router} register={register} handleSubmit={handleSubmit} setValue={setValue} />;
};

export default SignInContainer;
