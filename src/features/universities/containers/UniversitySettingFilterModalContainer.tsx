import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import queryString from 'query-string';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { useLazyFetchUniversityCountQuery } from '../apis/universityApi';
import { useQueryParam } from 'use-query-params';
import { isEmpty } from 'lodash';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm();
  const formData = watch();
  const [universityCount, { data }] = useLazyFetchUniversityCountQuery();
  const [filterQuery, setFilterQuery] = useQueryParam('filter');

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const onSubmit = data => {
    console.log(data);
    setIsOpen(false);
  };

  useEffect(() => {
    // formData에 false인 값은 제거한다.
    if (!isEmpty(formData)) {
      const filteredData = Object.entries(formData)
        .filter(([_, value]) => value !== false)
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

      const query = queryString.stringify(filteredData);
      setFilterQuery(query);
    }
  }, [formData]);

  useEffect(() => {
    universityCount();
  }, [filterQuery]);

  return <UniversitySettingFilterModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} filterResult={data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
