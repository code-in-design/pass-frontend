import { useEffect } from 'react';
import FormButtonGroup from '../components/FormButtonGroup';
import useScoreSheetFormContext from '../hooks/useScoreSheetFormContext';
// import useScoreSheetForm from '../hooks/useScoreSheetForm';

const FormButtonGroupContainer = () => {
  const { watch, handleSubmit, reset } = useScoreSheetFormContext();
  const file = watch('uploadedFile');

  const onSubmit = data => {
    alert('csv 데이터 저장 완료');
  };

  const onError = error => {
    if (error) alert('');
  };

  return <FormButtonGroup file={file} reset={reset} handleSubmit={handleSubmit(onSubmit, onError)} />;
};

export default FormButtonGroupContainer;
