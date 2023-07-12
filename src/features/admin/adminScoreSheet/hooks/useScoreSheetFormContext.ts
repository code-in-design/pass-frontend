import { useContext } from 'react';
import { ScoreSheetFormContext } from '../context/ScoreSheetFormContext';

const useScoreSheetFormContext = () => {
  const context = useContext(ScoreSheetFormContext);
  if (!context) {
    throw new Error('useScoreSheetFormContext must be used within a ScoreSheetFormProvider');
  }
  return { ...context };
};

export default useScoreSheetFormContext;
