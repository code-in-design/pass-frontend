import React from 'react';
import UniversitySettingFilterModal from '../components/FindUniversity/modals/FilterModal';
import { useForm } from 'react-hook-form';

const UniversityFilterModalContainer = () => {
  const { register, handleSubmit, setValue } = useForm();
  return <UniversitySettingFilterModal register={register} handleSubmit={handleSubmit} setValue={setValue} />;
};

export default UniversityFilterModalContainer;
