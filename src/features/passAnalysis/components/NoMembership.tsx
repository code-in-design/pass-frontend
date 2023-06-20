import React from 'react';
import styled from '@emotion/styled';
import Tickets from '../../../../public/images/icons/tickets.svg';
import ProTickets from '../../../../public/images/icons/proTickets.svg';
import Infinity from '../../../../public/images/icons/infinity.svg';

const NoMembership = () => {
  return (
    <Container>
      <Box>
        <Title>Basic / Light Plan</Title>
        <ImageWrapper>
          <Tickets />
        </ImageWrapper>
        <Text>합격 분석 열람권 사용하기</Text>
        <SubTitle>
          남아있는 합격 분석 열람권 개수 <span>1개</span>
        </SubTitle>
      </Box>
      <ProBox>
        <ProTitle>Premium plan</ProTitle>
        <ImageWrapper>
          <ProTickets />
          <ProImageWrapper>
            <Infinity />
          </ProImageWrapper>
        </ImageWrapper>
        <ProText>무제한 합격 분석</ProText>
        <ProSubTitle>PRO 멤버십 구매하기</ProSubTitle>
      </ProBox>
    </Container>
  );
};

export default NoMembership;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 190px 0;
  gap: 0 12px;
`;

const Box = styled.div`
  height: 256px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  flex: 1;
  padding: 24px 0;
`;

const ProBox = styled.div`
  height: 256px;
  border-radius: 16px;
  background-color: rgba(107, 119, 248, 0.1);
  flex: 1;
  padding: 24px 0;
`;

const Title = styled.div`
  width: fit-content;
  border-radius: 6px;
  margin: 0 auto;
  height: 24px;
  background-color: ${props => props.theme.colors.gray4};
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
  text-align: center;
`;
const ProTitle = styled.div`
  width: fit-content;
  border-radius: 6px;
  margin: 0 auto;
  height: 24px;
  background-color: rgba(107, 119, 248, 0.2);
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 8px;
  text-align: center;
`;

const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  position: relative;
`;

const Text = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.grayBlack};
`;
const ProText = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.grayBlack};
`;

const SubTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  text-align: center;
  color: ${props => props.theme.colors.gray2};
  > span {
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
  }
`;

const ProSubTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.colors.blue};
`;

const ProImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 61px;
  left: 83px;
`;
