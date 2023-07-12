import ScoreSheetUploader from '../components/ScoreSheetUploader';
import useScoreSheetFormContext from '../hooks/useScoreSheetFormContext';
// import useScoreSheetForm from '../hooks/useScoreSheetForm';

const ScoreSheetUploaderContainer = () => {
  const { register, setValue, watch } = useScoreSheetFormContext();
  const file = watch('uploadedFile');

  return <ScoreSheetUploader file={file} register={register} setValue={setValue} />;
};

export default ScoreSheetUploaderContainer;
