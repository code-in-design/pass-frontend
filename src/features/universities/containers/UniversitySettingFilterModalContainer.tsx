import React from 'react';
import UniversitySettingFilterModal from '../components/FindUniversity/modals/FilterModal';
import { useForm } from 'react-hook-form';

const UniversityFilterModalContainer = () => {
  const { register } = useForm();
  return <UniversitySettingFilterModal register={register} />;
};

export default UniversityFilterModalContainer;
