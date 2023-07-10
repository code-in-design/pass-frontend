import React from 'react';
import { ArrayParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import UniversityCategoryList from '../components/FindUniversity/UniversityCategoryList';
import { UniversityCategoryItem } from '../components/FindUniversity/UniversityCategoryListItem';

const UniversityCategoryContainer = () => {
  const [query, setQuery] = useQueryParams({
    applyGroup: withDefault(ArrayParam, []), // 모집군 (가군, 나군, 다군)
    region: withDefault(ArrayParam, []), // 지역 (서울권, 수도권)
    department: withDefault(ArrayParam, []), // 인기계열 (체육교육과)
    searchKeyword: withDefault(StringParam, null),
  });

  const handleItemClick = (item: UniversityCategoryItem) => {
    const { title, text } = item;
    if (text === '전체보기') setQuery({ applyGroup: [], region: [], department: [], searchKeyword: query.searchKeyword }, 'replace');
    if (title === '모집군') setQuery({ applyGroup: [text!], searchKeyword: query.searchKeyword }, 'replace');
    if (title === '지역') setQuery({ region: [text!], searchKeyword: query.searchKeyword }, 'replace');
    if (title === '인기계열') setQuery({ department: [text!], searchKeyword: query.searchKeyword }, 'replace');
  };

  return <UniversityCategoryList applyGroup={query?.applyGroup} region={query?.region} department={query?.department} searchKeyword={query?.searchKeyword} handleItemClick={handleItemClick} />;
};

export default UniversityCategoryContainer;
