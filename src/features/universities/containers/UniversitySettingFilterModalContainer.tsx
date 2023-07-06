import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import queryString from 'query-string';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { useLazyFetchUniversityCountQuery } from '../apis/universityApi';
import { ArrayParam, useQueryParam, useQueryParams, withDefault } from 'use-query-params';
import { flatten, isEmpty } from 'lodash';
import { useRouter } from 'next/router';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, setValue, watch, reset, getValues } = useForm();
  const formData = watch();
  const router = useRouter();
  const [universityCount, { data }] = useLazyFetchUniversityCountQuery();
  // const [filterQuery, setFilterQuery] = useQueryParam<any>('filter');
  const [query, setQuery] = useQueryParams({
    applyGroup: withDefault(ArrayParam, []), // 모집군 (가군, 나군, 다군)
    region: withDefault(ArrayParam, []), // 지역 (서울권, 수도권)
    department: withDefault(ArrayParam, []), // 인기계열 (체육교육과)
  });
  const initialValues = {
    applyGroup: [],
    completionTeaching: false,
    department: [],
    exceptionPractical: [],
    isEnglishRequired: [],
    isInquiryRequired: [],
    isKoreanRequired: [],
    isMathRequired: [],
    oneSubject: false,
    practicalContribution: [],
    region: [],
    testContribution: [],
  };

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const onSubmit = data => {
    console.log('formdata :', data);
    if (!isEmpty(formData)) {
      // formData에 false인 값은 제거한다.
      const filteredData = Object.entries(data)
        .filter(([_, value]) => value !== false)
        .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

      const query = queryString.stringify(filteredData);
      // setFilterQuery(query, 'replace');
    }
    setIsOpen(false);
  };

  // useEffect(() => {
  //   universityCount();
  // }, [filterQuery]);

  useEffect(() => {
    const { applyGroup, region, department } = query;
    // const result = queryString.parse(filterQuery);

    // if (!isEmpty(filterQuery)) {
    //   setValue('applyGroup', result.applyGroup);
    //   setValue('department', result.department);
    //   setValue('exceptionPractical', result.exceptionPractical);
    //   setValue('isEnglishRequired', result.isEnglishRequired);
    //   setValue('isInquiryRequired', result.isInquiryRequired);
    //   setValue('isKoreanRequired', result.isKoreanRequired);
    //   setValue('isMathRequired', result.isMathRequired);
    //   setValue('practicalContribution', result.practicalContribution);
    //   setValue('testContribution', result.testContribution);
    //   setValue('region', result.region);
    // }
    if (!isEmpty(flatten([applyGroup, region, department]))) {
      reset(initialValues);
      setValue('applyGroup', applyGroup);
      setValue('region', region);
      setValue('department', department);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isEmpty(router.query)) {
      reset(initialValues);
    }
  }, [router]);

  return <UniversitySettingFilterModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} searchResultNumber={data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
