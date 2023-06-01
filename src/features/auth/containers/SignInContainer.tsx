import { useRouter } from 'next/router';
import { useSignInMutation } from '../apis/authApi';
import SignIn from '../components/SignIn';
import { useForm } from 'react-hook-form';
import { storageUtil } from '@/utils/StorageUtil';

const SignInContainer = () => {
  const router = useRouter();
  const [setSignIn, { isError }] = useSignInMutation();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const setAutoLoginChecked = () => {
    const isAutoLogin = getValues('autoLogin');
    storageUtil.setItemToLocalStorage('autoLogin', isAutoLogin);
  };

  const onClickSignIn = async data => {
    setAutoLoginChecked();
    setSignIn(data);
  };

  return <SignIn onClickSignIn={onClickSignIn} setAutoLoginChecked={setAutoLoginChecked} isError={isError} router={router} register={register} handleSubmit={handleSubmit} setValue={setValue} />;
};

export default SignInContainer;
