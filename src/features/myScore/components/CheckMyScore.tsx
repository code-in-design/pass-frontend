import styled from '@emotion/styled';
import InfoIcon from '../../../../public/images/icons/info.svg';
import UniversityFinderModal from './UniversityFinderModal';
import Table from '@/components/Table';

interface Props {
  lists: Array<TableProps>;
}

interface TableProps {
  list: object;
  area: string;
  english: string;
  history: string;
  korean: string;
  math: string;
  inquirySubject1: string;
  inquirySubject2: string;
}

const CheckMyScore = ({ lists }: Props) => {
  return (
    <Container>
      <GradeCard>
        <Title> 2024학년도 대학수학능력시험 성적 통지표</Title>
        <Horizon />
        <Table lists={lists} />
        <Information>
          <InfoIconWrapper>
            <InfoIcon />
          </InfoIconWrapper>
          <InfoText>표준점수, 백분위, 등급은 원점수 대비 자체 수능 분석 기준으로 산정된 점수입니다. 업데이트 이후 점수가 달라질 수 있습니다.</InfoText>
        </Information>
      </GradeCard>
      <Buttons>
        <Button>성적 수정하기</Button>
        <UniversityFinderModal />
      </Buttons>
    </Container>
  );
};

export default CheckMyScore;

CheckMyScore.defaultProps = {
  lists: [
    { area: '선택과목', history: '-', korean: '화법과작문', math: '확률과통계', english: '-', inquirySubject1: '사회문화', inquirySubject2: '생활과윤리' },
    { area: '표준점수', history: '-', korean: '128', math: '138', english: '-', inquirySubject1: '62', inquirySubject2: '68' },
    { area: '백분위', history: '-', korean: '96', math: '98', english: '-', inquirySubject1: '85', inquirySubject2: '96' },
    { area: '등급', history: '2', korean: '2', math: '1', english: '1', inquirySubject1: '3', inquirySubject2: '1' },
  ],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GradeCard = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 24px;
  padding: 32px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: #353644;
`;

const Horizon = styled.hr`
  margin-top: 32px;
  margin-bottom: 48px;
  color: #b7b9c9;
  border-style: dotted;
`;

const GradeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #6b77f8;
  overflow: hidden;
`;

const GradeTableThead = styled.thead`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #6b77f8;
`;

const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.1);
  height: 51.2px;
  & > td {
    width: 152px;
    border: 1px solid #e4e6f0;
    &:last-of-type {
      width: 216px;
    }
  }
`;

const GradeTableTbody = styled.tbody`
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #191e25;
`;

const GradeTableTBodyTr = styled.tr`
  height: 51.2px;
  letter-spacing: -0.04em;
  & > td {
    width: 152px;
    border: 1px solid #e4e6f0;
    :first-of-type {
      background-color: #f8f8fc;
      color: #7f86d2;
    }
  }
`;

const Information = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
`;

const InfoIconWrapper = styled.div`
  color: #9395a6;
  margin-right: 4px;
`;

const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #9395a6;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.div`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: #fff;
  background-color: #6b77f8;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  :first-of-type {
    color: #fff;
    background-color: #626474;
    margin-right: 12px;
  }
`;
