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
  // 검색어를 제외한 나머지 쿼리의 개수가 2개 이상인 경우 필터가 적용되었다고 보고 카테고리는 선택 해제한다.
  const filterApplyList = remove(keys(query), removeItem => removeItem !== 'searchKeyword');

  // 카테고리를 눌렀을때 그 카테고리가 선택되었는지 판단하는 로직
  const isCategoryItemSelected = (categoryItem: UniversityCategoryItem) => {
    const isNotFilterApplied = isEmpty(flatten([props.applyGroup, props.region, props.department]));
    const isSelectedInApplyGroup = includes(props.applyGroup, categoryItem.text); // 카테고리 > 모집군의 항목인가 (가,나,다 군 중 1개)
    const isSelectedInRegion = includes(props.region, categoryItem.text); // 카테고리 > 지역의 항목인가 (서울권, 경기권 ...)
    const isSelectedInDepartment = includes(props.department, categoryItem.text); // 카테고리 > 모집군의 인기계열(학과)인가 (체육교육과 등..)

    if (categoryItem.text === '전체보기' && isNotFilterApplied) return true;
    if (categoryItem.title === '모집군' && isSelectedInApplyGroup) return true;
    if (categoryItem.title === '지역' && isSelectedInRegion) return true;
    if (categoryItem.title === '인기계열' && isSelectedInDepartment) return true;

    return false;
  };

  return (
    <Container>
      {props?.lists?.map((item, index) => {
        let isSelected = false;
        isSelected = isCategoryItemSelected(item);

        // 필터가 2개이상 적용되면 카테고리는 선택해제 되어야한다.
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
`;
