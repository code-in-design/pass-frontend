import React from 'react';
import UniversitySettingFilterModal from '../components/FindUniversity/modals/FilterModal';
import { useForm } from 'react-hook-form';

const UniversityFilterModalContainer = () => {
  const { register, handleSubmit } = useForm();
  return <UniversitySettingFilterModal register={register} handleSubmit={handleSubmit} />;
};

export default UniversityFilterModalContainer;
