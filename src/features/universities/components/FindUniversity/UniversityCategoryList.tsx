import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import School from '../../../../../public/images/icons/schoolOutline.svg';
import Location from '../../../../../public/images/icons/location.svg';
import Stickynote from '../../../../../public/images/icons/stickynote.svg';
import UniversityCategoryListItem from './UniversityCategoryListItem';

interface Props {
  lists: [{ total?: string; title?: string; icon?: ReactNode; text: string }];
}

const UniversityCategoryList = (props: Props) => {
  const [toggleItem, setToggleItem] = useState('');

  const handleItemClick = item => {
    setToggleItem(item);
  };
  return (
    <Container>
      {props.lists.map((list, index) => (
        <UniversityCategoryListItem key={index} lists={list} isSelected={toggleItem === list.text} onClick={handleItemClick} />
      ))}
    </Container>
  );
};

export default UniversityCategoryList;
UniversityCategoryList.defaultProps = {
  lists: [
    { total: '전체보기', title: '', text: '' },
    { title: '모집군', icon: <Stickynote />, text: '가군' },
    { title: '모집군', icon: <Stickynote />, text: '나군' },
    { title: '모집군', icon: <Stickynote />, text: '다군' },
    { title: '지역', icon: <Location />, text: '서울권' },
    { title: '지역', icon: <Location />, text: '수도권' },
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
