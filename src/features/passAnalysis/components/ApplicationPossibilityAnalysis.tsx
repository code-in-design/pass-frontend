import styled from '@emotion/styled';
import React from 'react';
import FilterModal from '../../../features/universities/containers/UniversitySettingFilterModalContainer';

const ApplicationPossibilityAnalysis = props => {
  return (
    <Container>
      <TitleWrapper>
        <Title>지원 가능 분석</Title>
        <FilterModal size="sm" />
      </TitleWrapper>
    </Container>
  );
};

export default ApplicationPossibilityAnalysis;

const Container = styled.div`
  min-width: 397px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;
