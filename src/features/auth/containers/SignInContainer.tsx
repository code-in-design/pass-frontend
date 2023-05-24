import { useRouter } from 'next/router';
import { useSignInMutation } from '../apis/authApi';
import SignIn from '../components/SignIn';
import { useForm } from 'react-hook-form';

const SignInContainer = () => {
  const router = useRouter();
  const [setSignIn, { data, isError, isSuccess }] = useSignInMutation();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const onClickSignIn = async data => {
    const isAutoLogin = getValues('autoLogin');
    try {
      const payload = await setSignIn(data).unwrap();
      if (isAutoLogin) {
        window.localStorage.setItem('accessToken', payload.access_token);
        window.localStorage.setItem('refreshToken', payload.refresh_token);
        router.push('/');
      }
      if (!isAutoLogin) {
        window.sessionStorage.setItem('accessToken', payload.access_token);
        window.sessionStorage.setItem('refreshToken', payload.refresh_token);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return <SignIn onClickSignIn={onClickSignIn} isError={isError} router={router} register={register} handleSubmit={handleSubmit} setValue={setValue} />;
};

export default SignInContainer;
