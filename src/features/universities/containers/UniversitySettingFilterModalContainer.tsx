import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { universityApi, useFetchUniversityCountQuery } from '../apis/universityApi';
import useUniversity from '../hooks/useUniversity';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const formData = watch();
  const fetchUniversityCountMutation = useFetchUniversityCountQuery();
  const { dispatchFilterData } = useUniversity();

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    console.log(formData);
    dispatchFilterData(formData);
  }, [formData]);

  return <UniversitySettingFilterModal register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
