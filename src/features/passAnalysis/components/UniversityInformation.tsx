import styled from '@emotion/styled';
import React from 'react';
import PassAnalysisMenu from './PassAnalysisMenu/PassAnalysisMenu';

const UniversityInformation = () => {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>경상대학교 체육교육과</Title>
          <SubTitle>수능 일반 전형</SubTitle>
        </TitleWrapper>
        <SideHeader>
          <RecruitmentGroup>가군</RecruitmentGroup>
          <Bookmark />
        </SideHeader>
      </Header>
      <Menu>
        <MenuItem>합격 분석</MenuItem>
        <MenuItem>지원자 현황</MenuItem>
        <MenuItem>학과 정보</MenuItem>
      </Menu>
      <Content>
        <PassAnalysisMenu />
      </Content>
    </Container>
  );
};

export default UniversityInformation;

const Container = styled.div`
  min-width: 611px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  padding: 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${props => props.theme.colors.black};
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.gray2};
`;

const SideHeader = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;

const RecruitmentGroup = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;

const Bookmark = styled.img`
  width: 32px;
  height: 32px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
`;

const MenuItem = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
  border-right: 1px solid ${props => props.theme.colors.gray4};
  :last-of-type {
    border-right: none;
  }
`;

const Content = styled.div`
  padding: 24px 0;
`;
