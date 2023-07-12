import ScoreSheetUploader from '../components/ScoreSheetUploader';
import useScoreSheetForm from '../hooks/useScoreSheetForm';

const ScoreSheetUploaderContainer = () => {
  const { register, setValue, watch } = useScoreSheetForm();
  const fileList = watch('uploadedFile');

  return <ScoreSheetUploader fileList={fileList} register={register} setValue={setValue} />;
};

export default ScoreSheetUploaderContainer;
