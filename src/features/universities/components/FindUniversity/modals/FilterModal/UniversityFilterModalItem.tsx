import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const FindUniversityFilterModalItem = (props: Props) => {
  return (
    <FilterItem>
      <TitleWrapper>
        <ItemTitle>{props.title}</ItemTitle>
        <ItemSubTitle>{props.subtitle}</ItemSubTitle>
      </TitleWrapper>
      {props.children}
    </FilterItem>
  );
};

export default FindUniversityFilterModalItem;

const FilterItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.gray6};
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-bottom: 12px;
`;
const ItemTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;
const ItemSubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
`;
