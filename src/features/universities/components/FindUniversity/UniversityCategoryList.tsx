import React from 'react';
import styled from '@emotion/styled';
import { flatten, includes, isEmpty, keys, remove, union } from 'lodash';
import UniversityCategoryListItem, { UniversityCategoryItem } from './UniversityCategoryListItem';
import School from '../../../../../public/images/icons/graduationOutline.svg';
import Location from '../../../../../public/images/icons/location.svg';
import Stickynote from '../../../../../public/images/icons/stickynote.svg';
import { useRouter } from 'next/router';

interface Props {
  lists: UniversityCategoryItem[];
  applyGroup: any;
  region: any;
  department: any;
  searchKeyword: any;
  handleItemClick: (item: UniversityCategoryItem) => void;
}

const UniversityCategoryList = (props: Props) => {
  const { query } = useRouter();

  return (
    <Container>
      {props?.lists?.map((item, index) => {
        let isSelected = false;

        const isNotFilterApplied = isEmpty(flatten([props.applyGroup, props.region, props.department]));
        const isSelectedInApplyGroup = includes(props.applyGroup, item.text); // 카테고리 > 모집군의 항목인가 (가,나,다 군 중 1개)
        const isSelectedInRegion = includes(props.region, item.text); // 카테고리 > 지역의 항목인가 (서울권, 경기권 ...)
        const isSelectedInDepartment = includes(props.department, item.text); // 카테고리 > 모집군의 인기계열(학과)인가 (체육교육과 등..)
        const filterApplyList = remove(keys(query), removeItem => removeItem !== 'searchKeyword');

        if (item.text === '전체보기' && isNotFilterApplied) isSelected = true;
        if (item.title === '모집군' && isSelectedInApplyGroup) isSelected = true;
        if (item.title === '지역' && isSelectedInRegion) isSelected = true;
        if (item.title === '인기계열' && isSelectedInDepartment) isSelected = true;
        if (filterApplyList.length >= 2) isSelected = false;

        return <UniversityCategoryListItem key={index} isSelected={isSelected} onClick={props.handleItemClick} {...item} />;
      })}
    </Container>
  );
};

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

export default UniversityCategoryList;

const Container = styled.div`
  display: flex;
  gap: 0 7px;
  width: 100%;
  margin-bottom: 32px;
  padding-right: 16px;
`;
