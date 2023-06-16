import React from 'react';
import styled from '@emotion/styled';
import LastYearPassCaseModal from '../modal/LastYearPassCaseModal';

interface Props {
  avatar: string;
  title: string;
  gender: string;
  zValue: number;
}

const LastYearPassCaseItem = (props: Props) => {
  return (
    <Container>
      <TitleWrapper>
        <UserImage src={props.avatar} alt="user" />
        <Title>{props.title}</Title>
      </TitleWrapper>
      <CenterWrapper>
        <Wrapper>
          <Span>성별</Span>
          <Gender gender={props.gender}>{props.gender}</Gender>
        </Wrapper>
        <Wrapper>
          <Span>Z-지수</Span>
          <Zvalue>{props.zValue}</Zvalue>
        </Wrapper>
      </CenterWrapper>
      <LastYearPassCaseModal avatar={props.avatar} title={props.title} gender={props.gender} />
    </Container>
  );
};

export default LastYearPassCaseItem;

const Container = styled.div`
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
  ::after {
    content: '|';
    margin-left: 16px;
    margin-right: 16px;
    color: ${props => props.theme.colors.gray4};
  }
  :last-of-type {
    ::after {
      content: '';
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.grayBlack};
`;

const CenterWrapper = styled.div`
  display: flex;
`;

const Span = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
`;

const Gender = styled.div<{ gender: string }>`
  width: 52px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${props => (props.gender === '남학생' ? 'rgba(79, 138, 252, 0.1)' : 'rgba(255, 83, 145, 0.1)')};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${props => (props.gender === '남학생' ? '#4F8AFC' : '#FF5391')};
`;

const Zvalue = styled.div`
  width: 46px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.gray4};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${props => props.theme.colors.grayBlack};
`;

const AddInfoButton = styled.div`
  width: 91px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray1};
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;
