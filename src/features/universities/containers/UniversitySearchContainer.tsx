import { debounce } from 'lodash';
import React from 'react';
import { StringParam, useQueryParams, withDefault } from 'use-query-params';
import UniversitySearch from '../components/FindUniversity/UniversitySearch';

const UniversitySearchContainer = () => {
  const [query, setQuery] = useQueryParams({
    searchKeyword: withDefault(StringParam, null),
  });

  const onInputChange = debounce(event => {
    setQuery({ searchKeyword: event.target.value });
  }, 300);

  return <UniversitySearch onInputChange={onInputChange} />;
};

export default UniversitySearchContainer;
