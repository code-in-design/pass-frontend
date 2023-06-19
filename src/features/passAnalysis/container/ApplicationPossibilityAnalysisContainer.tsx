import React from 'react';
import { useForm } from 'react-hook-form';
import ApplicationPossibilityAnalysis from '../components/ApplicationPossibilityAnalysis';

const ApplicationPossibilityAnalysisContainer = () => {
  const { register, setValue, handleSubmit } = useForm();
  return <ApplicationPossibilityAnalysis register={register} setValue={setValue} handleSubmit={handleSubmit} />;
};

export default ApplicationPossibilityAnalysisContainer;
