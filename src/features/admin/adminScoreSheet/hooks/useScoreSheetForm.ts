import { useForm } from 'react-hook-form';

const useScoreSheetForm = () => {
  const { register, setValue, handleSubmit, watch } = useForm();
  return {
    register,
    setValue,
    handleSubmit,
    watch,
  };
};

export default useScoreSheetForm;
