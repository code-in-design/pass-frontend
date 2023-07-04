import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import School from '../../../../../public/images/icons/graduationOutline.svg';
import Location from '../../../../../public/images/icons/location.svg';
import Stickynote from '../../../../../public/images/icons/stickynote.svg';
import UniversityCategoryListItem from './UniversityCategoryListItem';
import { useQueryParam } from 'use-query-params';

interface Props {
  lists: [{ total?: string; title?: string; icon?: ReactNode; text: string }];
}

const UniversityCategoryList = (props: Props) => {
  const [toggleItem, setToggleItem] = useState('');
  const [applyGroup, setApplyGroup] = useQueryParam('모집군_리스트');
  const [region, setRegion] = useQueryParam('지역_리스트');
  const [department, setDepartment] = useQueryParam('학과_계열_리스트');

  const handleItemClick = item => {
    setToggleItem(item.text);
    if (item.title === '') {
      setDepartment(undefined);
      setApplyGroup(undefined);
      setRegion(undefined);
    }
    if (item.title === '모집군') {
      setApplyGroup([item.text]);
      setRegion(undefined);
      setDepartment(undefined);
    }
    if (item.title === '지역') {
      setRegion([item.text]);
      setApplyGroup(undefined);
      setDepartment(undefined);
    }
    if (item.title === '인기계열') {
      setDepartment([item.text]);
      setApplyGroup(undefined);
      setRegion(undefined);
    }
  };

  return (
    <Container>
      {props.lists.map((list, index) => (
        <UniversityCategoryListItem key={index} lists={list} isSelected={toggleItem === list.text || applyGroup === list.text || region === list.text || department === list.text} onClick={handleItemClick} />
      ))}
    </Container>
  );
};

export default UniversityCategoryList;
UniversityCategoryList.defaultProps = {
  lists: [
    { total: '전체보기', title: '', text: '전체' },
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
