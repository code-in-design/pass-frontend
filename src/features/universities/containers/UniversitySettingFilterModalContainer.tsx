import React from 'react';
import UniversitySettingFilterModal from '../components/FindUniversity/modals/FilterModal';
import { useForm } from 'react-hook-form';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const { register, handleSubmit, setValue } = useForm();
  return <UniversitySettingFilterModal register={register} handleSubmit={handleSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
