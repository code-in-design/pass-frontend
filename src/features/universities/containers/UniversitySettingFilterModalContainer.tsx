import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import queryString from 'query-string';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { useLazyFetchUniversityCountQuery } from '../apis/universityApi';
import { useQueryParam } from 'use-query-params';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const formData = watch();
  const [universityCount, { data }] = useLazyFetchUniversityCountQuery();
  const [filterQuery, setFilterQuery] = useQueryParam('');

  const onSubmit = data => {
    console.log(data);
  };

  useEffect(() => {
    // formData에 false인 값은 제거한다.
    const filteredData = Object.entries(formData)
      .filter(([_, value]) => value !== false)
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const query = queryString.stringify(filteredData);
    setFilterQuery(query);
  }, [formData, setFilterQuery]);

  useEffect(() => {
    universityCount();
  }, [filterQuery]);

  return <UniversitySettingFilterModal filterResult={data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
