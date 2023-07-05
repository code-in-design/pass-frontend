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
  const { register, handleSubmit, setValue, watch, reset, getValues } = useForm();
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
    if (!isEmpty(formData)) {
      // formData에 false인 값은 제거한다.
      const filteredData = Object.entries(formData)
        .filter(([_, value]) => value !== false)
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

      const query = queryString.stringify(filteredData);
      setFilterQuery(query, 'replace');
    }
    setIsOpen(false);
  };

  useEffect(() => {
    universityCount();
  }, [filterQuery]);

  useEffect(() => {
    const result = queryString.parse(filterQuery);

    if (!isEmpty(filterQuery)) {
      setValue('applyGroup', result.applyGroup || false);
      setValue('department', result.department || false);
      setValue('exceptionPractical', result.exceptionPractical || false);
      setValue('isEnglishRequired', result.isEnglishRequired || false);
      setValue('isInquiryRequired', result.isInquiryRequired || false);
      setValue('isKoreanRequired', result.isKoreanRequired || false);
      setValue('isMathRequired', result.isMathRequired || false);
      setValue('practicalContribution', result.practicalContribution || false);
      setValue('testContribution', result.testContribution || false);
      setValue('region', result.region || false);
    }
  }, [isOpen]);

  return <UniversitySettingFilterModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} searchResultNumber={data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
