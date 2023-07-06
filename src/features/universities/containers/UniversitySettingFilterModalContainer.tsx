import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import queryString from 'query-string';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { useLazyFetchUniversityCountQuery } from '../apis/universityApi';
import { ArrayParam, useQueryParam, useQueryParams, withDefault } from 'use-query-params';
import { flatten, isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import { UniversityFilterModel } from '../../../models/UniversityFilterModel';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const universityFilterModel = new UniversityFilterModel();
  const [query, setQuery] = useQueryParams(universityFilterModel.toQueryParams());
  const initialValues = universityFilterModel.toJSON();

  const { register, handleSubmit, setValue, watch, reset } = useForm({ defaultValues: query });
  const formData = watch();
  const router = useRouter();

  const [universityCount, { data }] = useLazyFetchUniversityCountQuery();

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

      setQuery(filteredData);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    // query-string과 react-hook-form의 데이터를 일치시킴(싱크)
    reset(query);
    // universityCount();
  }, [router.query]);

  return <UniversitySettingFilterModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} searchResultNumber={data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
