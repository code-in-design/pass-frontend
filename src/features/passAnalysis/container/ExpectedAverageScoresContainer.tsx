import React from 'react';
import { useForm } from 'react-hook-form';
import ExpectedAverageScores from '../components/ExpectedAverageScores';

const ExpectedAverageScoresContainer = () => {
  const { register, setValue } = useForm();
  return <ExpectedAverageScores register={register} setValue={setValue} />;
};

export default ExpectedAverageScoresContainer;
