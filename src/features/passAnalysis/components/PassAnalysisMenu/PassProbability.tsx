import React from 'react';
import styled from '@emotion/styled';
import { PieChart } from 'react-minimal-pie-chart';

const PassProbability = () => {
  return (
    <Container>
      <ScoreGraph>
        <PieChart
          animate
          lengthAngle={360}
          data={[{ value: 70, color: '#6B77F8' }]}
          reveal={70}
          background="#E4E6F0"
          lineWidth={18}
          rounded
          label={({ dataEntry }) => dataEntry.value + '%'}
          labelPosition={50}
          labelStyle={{ fontSize: '24px', lineHeight: '28px', fontWeight: 700, color: '#6b77f8' }}
        />
        <ScoreInner>
          <ScoreInnerText>예상 합격 확률</ScoreInnerText>
        </ScoreInner>
      </ScoreGraph>
      <ScoreContainer>
        {/* 내신이 없을 경우 */}
        <TotalScoreBox>
          <TotalScoreTitle>총 환산 점수</TotalScoreTitle>
          <TotalScore>780.16</TotalScore>
        </TotalScoreBox>
        <ScoreWrapper>
          <ScoreBox>
            <ScoreTitle>
              수능
              <br />
              환산 점수
            </ScoreTitle>
            <Score>580.16</Score>
          </ScoreBox>
          <ScoreBox>
            <ScoreTitle>
              실기
              <br />
              환산 점수
            </ScoreTitle>
            <Score>300.16</Score>
          </ScoreBox>
        </ScoreWrapper>

        {/* 내신이 있을 경우 */}
        {/* <TotalScoreBoxNaesin>
          <TotalScoreTitleNaesin>총 환산 점수</TotalScoreTitleNaesin>
          <TotalScoreNaesin>780.16</TotalScoreNaesin>
        </TotalScoreBoxNaesin>
        <ScoreWrapperNaesin>
          <ScoreBoxNaesin>
            <ScoreTitleNaesin>수능환산 점수</ScoreTitleNaesin>
            <ScoreNaesin>580.16</ScoreNaesin>
          </ScoreBoxNaesin>
          <ScoreBoxNaesin>
            <ScoreTitleNaesin>내신환산 점수</ScoreTitleNaesin>
            <ScoreNaesin>580.16</ScoreNaesin>
          </ScoreBoxNaesin>
          <ScoreBoxNaesin>
            <ScoreTitleNaesin>실기환산 점수</ScoreTitleNaesin>
            <ScoreNaesin>580.16</ScoreNaesin>
          </ScoreBoxNaesin>
        </ScoreWrapperNaesin> */}
      </ScoreContainer>
    </Container>
  );
};

export default PassProbability;

const Container = styled.div`
  display: flex;
  gap: 0 16px;
  margin-top: 24px;
`;

const ScoreGraph = styled.div`
  min-width: 144px;
  height: 144px;
  position: relative;
`;

const ScoreContainer = styled.div`
  min-width: 403px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

const ScoreInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: rgba(107, 119, 248, 0.15);
`;

const ScoreInnerText = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray2};
`;

const TotalScoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 68px;
  border-radius: 12px;
  padding: 24px;
  background-color: ${props => props.theme.colors.gray6};
`;

const TotalScoreTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #626474;
`;

const TotalScore = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #6b77f8;
`;

const ScoreWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 0 12px;
`;

const ScoreBox = styled.div`
  flex: 1;
  padding: 14px 24px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.gray6};
`;

const ScoreTitle = styled.div`
  width: 51px;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: ${props => props.theme.colors.gray2};
`;

const Score = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${props => props.theme.colors.black};
`;
// 내신이 있을 경우
const TotalScoreBoxNaesin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 76px;
  border-radius: 12px;
  padding: 24px;
  background-color: ${props => props.theme.colors.gray6};
`;

const TotalScoreTitleNaesin = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #626474;
`;

const TotalScoreNaesin = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #6b77f8;
`;

const ScoreWrapperNaesin = styled.div`
  display: flex;
  width: 100%;
  gap: 0 8px;
`;
const ScoreBoxNaesin = styled.div`
  flex: 1;
  padding: 10px 24px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.gray6};
`;
const ScoreTitleNaesin = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 8px;
`;
const ScoreNaesin = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;
