import { InfoCard } from '../InfoCard';
import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const GradeAndSampleCounter = () => {
  const todayGradeCount = '123';
  const todaySampleCount = '50';

  return (
    <GradeAndSampleCounterWrapper>
      <InfoCard isFlexible={true} isTitleCustom={true} titleAlign="center" title={'오늘의<br/> 성적 입력 개수'} content="123" />
      <InfoCard isFlexible={true} isTitleCustom={true} titleAlign="center" title={'오늘의<br/> 표본 입력 개수'} content="50" />
    </GradeAndSampleCounterWrapper>
  );
};

const GradeAndSampleCounterWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  min-width: 130px;
`;

const Title = styled.span`
  color: var(--gray-1, #626474);
  text-align: center;
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Content = styled.span`
  color: #6b77f8;
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

// const InfoCard = styled.div`
//   display: flex;
//   // width: 130px;
//   width: 100%;
//   padding: 16px 24px;
//   justify-content: center;
//   align-items: center;
//   gap: 16px;
//   flex: 1 0 0;
//   border-radius: 16px;
//   background: var(--gray-white, #fff);
// `;
