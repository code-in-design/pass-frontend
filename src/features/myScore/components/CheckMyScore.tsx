import styled from '@emotion/styled';
import InfoIcon from '../../../../public/images/icons/info.svg';
import UniversityFinderModal from './UniversityFinderModal';
import Table from '@/components/Table';

// TODO
export interface ScoreData {}

interface Props {
  lists: Array<TableProps>;
  onClickEditGrades: () => void;
  scoreData: any;
  isScoreEntered: boolean;
  postScore: () => void;
}

interface TableProps {
  list: object;
  area: string;
  english: string;
  history: string;
  korean: string;
  math: string;
  inquiry1: string;
  inquiry2: string;
}

const CheckMyScore = (props: Props) => {
  return (
    <Container>
      <GradeCard>
        <Title> 2024학년도 9월 모의고사 성적 통지표</Title>
        <Horizon />
        <Table lists={props.scoreData} />
        <Information>
          <InfoIconWrapper>
            <InfoIcon />
          </InfoIconWrapper>
          <InfoText>표준점수, 백분위, 등급은 원점수 대비 자체 수능 분석 기준으로 산정된 점수입니다. 업데이트 이후 점수가 달라질 수 있습니다.</InfoText>
        </Information>
      </GradeCard>
      {!props.isScoreEntered && (
        <Buttons>
          <Button onClick={props.onClickEditGrades}>성적 수정하기</Button>
          <UniversityFinderModal postScore={props.postScore} />
        </Buttons>
      )}
    </Container>
  );
};

export default CheckMyScore;

CheckMyScore.defaultProps = {
  lists: [
    { area: '선택과목', history: '-', korean: '화법과작문', math: '확률과통계', english: '-', inquiry1: '사회문화', inquiry2: '생활과윤리' },
    { area: '표준점수', history: '-', korean: '128', math: '138', english: '-', inquiry1: '62', inquiry2: '68' },
    { area: '백분위', history: '-', korean: '96', math: '98', english: '-', inquiry1: '85', inquiry2: '96' },
    { area: '등급', history: '2', korean: '2', math: '1', english: '1', inquiry1: '3', inquiry2: '1' },
  ],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GradeCard = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin-top: 24px;
  padding: 32px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;

const Horizon = styled.hr`
  margin-top: 32px;
  margin-bottom: 48px;
  color: ${props => props.theme.colors.gray3};
  border-style: dotted;
`;

const Information = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const InfoIconWrapper = styled.div`
  color: ${props => props.theme.colors.gray2};
  margin-right: 4px;
`;

const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.gray2};
`;

const Buttons = styled.div`
  margin-top: 198px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  :first-of-type {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.gray1};
    margin-right: 12px;
  }
`;
