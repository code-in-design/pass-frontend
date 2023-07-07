import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ArrayParam, useQueryParams, withDefault } from 'use-query-params';
import { flatten, includes, isEmpty, union } from 'lodash';
import UniversityCategoryListItem, { UniversityCategoryItem } from './UniversityCategoryListItem';
import School from '../../../../../public/images/icons/graduationOutline.svg';
import Location from '../../../../../public/images/icons/location.svg';
import Stickynote from '../../../../../public/images/icons/stickynote.svg';

interface Props {
  lists: UniversityCategoryItem[];
}

const UniversityCategoryList = (props: Props) => {
  const [query, setQuery] = useQueryParams({
    applyGroup: withDefault(ArrayParam, []), // 모집군 (가군, 나군, 다군)
    region: withDefault(ArrayParam, []), // 지역 (서울권, 수도권)
    department: withDefault(ArrayParam, []), // 인기계열 (체육교육과)
  });

  const handleItemClick = (item: UniversityCategoryItem) => {
    const { title, text } = item;
    if (text === '전체보기') setQuery({ applyGroup: [], region: [], department: [] }, 'replace');
    if (title === '모집군') setQuery({ applyGroup: [text!] }, 'replace');
    if (title === '지역') setQuery({ region: [text!] }, 'replace');
    if (title === '인기계열') setQuery({ department: [text!] }, 'replace');
  };

  return (
    <Container>
      {props?.lists?.map((item, index) => {
        const { applyGroup, region, department } = query;
        let isSelected = false;

        const isNotFilterApplied = isEmpty(flatten([applyGroup, region, department]));
        const isSelectedInApplyGroup = includes(applyGroup, item.text); // 카테고리 > 모집군의 항목인가 (가,나,다 군 중 1개)
        const isSelectedInRegion = includes(region, item.text); // 카테고리 > 지역의 항목인가 (서울권, 경기권 ...)
        const isSelectedInDepartment = includes(department, item.text); // 카테고리 > 모집군의 인기계열(학과)인가 (체육교육과 등..)
        const filterApply = union(query?.applyGroup, query?.region, query?.department);

        if (item.text === '전체보기' && isNotFilterApplied) isSelected = true;
        if (item.title === '모집군' && isSelectedInApplyGroup) isSelected = true;
        if (item.title === '지역' && isSelectedInRegion) isSelected = true;
        if (item.title === '인기계열' && isSelectedInDepartment) isSelected = true;
        if (filterApply.length >= 2) isSelected = false;

        return <UniversityCategoryListItem key={index} isSelected={isSelected} onClick={handleItemClick} {...item} />;
      })}
    </Container>
  );
};

export default UniversityCategoryList;
UniversityCategoryList.defaultProps = {
  lists: [
    { text: '전체보기' },
    { title: '모집군', icon: <Stickynote />, text: '가군' },
    { title: '모집군', icon: <Stickynote />, text: '나군' },
    { title: '모집군', icon: <Stickynote />, text: '다군' },
    { title: '지역', icon: <Location />, text: '서울권' },
    { title: '지역', icon: <Location />, text: '경기권' },
    { title: '인기계열', icon: <School />, text: '체육교육과' },
  ],
};

const Container = styled.div`
  display: flex;
  gap: 0 7px;
  width: 100%;
  margin-bottom: 32px;
  padding-right: 16px;
`;
