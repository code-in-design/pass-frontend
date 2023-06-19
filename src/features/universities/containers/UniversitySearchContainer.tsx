import React from 'react';
import styled from '@emotion/styled';
import UniversitySearch from '../components/FindUniversity/UniversitySearch';
import UniversityFilterModalContainer from './UniversitySettingFilterModalContainer';

const UniversitySearchContainer = () => {
  return (
    <Wrapper>
      <UniversitySearch />
      <UniversityFilterModalContainer size="md" />
    </Wrapper>
  );
};

export default UniversitySearchContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
