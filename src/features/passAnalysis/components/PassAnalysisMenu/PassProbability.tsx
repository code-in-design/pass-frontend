import React from 'react';
import styled from '@emotion/styled';

const PassProbability = () => {
  return (
    <Container>
      <ScoreContainer>
        <TotalScoreBox>
          <TotalScoreTitle>총 환산 점수</TotalScoreTitle>
          <TotalScore>780.16</TotalScore>
        </TotalScoreBox>
        {/* 내신이 없을 경우 */}
        {/* <ScoreWrapper>
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
        </ScoreWrapper> */}

        {/* 내신이 있을 경우 */}
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
        </ScoreWrapperNaesin>
      </ScoreContainer>
    </Container>
  );
};

export default PassProbability;

const Container = styled.div`
  display: flex;
  gap: 0 16px;
`;

const ScoreContainer = styled.div`
  min-width: 403px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
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
  padding: 20px 24px;
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

const ScoreWrapperNaesin = styled.div`
  display: flex;
  width: 100%;
  gap: 0 8px;
`;
const ScoreBoxNaesin = styled.div`
  flex: 1;
  padding: 20px 24px;
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
