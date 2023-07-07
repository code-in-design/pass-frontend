import React, { useCallback, useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useQueryParams } from 'use-query-params';
import { useFetchUniversityCountQuery } from '../apis/universityApi';
import UniversitySettingFilterModal from '../../../components/Modal/UniversityFilterModal/UniversityFilterModal';
import { UniversityFilterModel } from '../../../models/UniversityFilterModel';

interface Props {
  size: 'sm' | 'md';
}

const UniversityFilterModalContainer = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const universityFilterModel = new UniversityFilterModel();
  const [query, setQuery] = useQueryParams(universityFilterModel.toQueryParams());

  const { register, handleSubmit, setValue, watch, reset } = useForm({ defaultValues: query });
  const formData = watch();
  const router = useRouter();

  const countData = useFetchUniversityCountQuery();

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    reset(query);
    setIsOpen(false);
  }, [isOpen]);

  const onSubmit = data => {
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
  }, [router.query]);

  useEffect(() => {
    countData;
  }, [formData]);

  return <UniversitySettingFilterModal openModal={openModal} closeModal={closeModal} isOpen={isOpen} searchResultNumber={countData.data} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} setValue={setValue} size={props.size} />;
};

export default UniversityFilterModalContainer;
