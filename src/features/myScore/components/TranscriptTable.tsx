import styled from '@emotion/styled';
import InfoIcon from '../../../../public/images/icons/info.svg';
import Table from '@/components/Table';
import { TranscriptModel } from '../../../models/TranscriptModel';
import TooltipImg from '../../../../public/images/icons/ExclamationMark.svg';
import MyTooltip from '../../../components/Tooltip';
import { Tooltip } from '@chakra-ui/react';
import AppTooltip from '@/components/Tooltip/AppTooltip';

export interface TranscriptTableProps {
  // onClickEditGrades: () => void;
  transcript: TranscriptModel;
  // isScoreEntered: boolean;
  // sendScoreToServer: () => void;
  hasButtons?: boolean;
  onModify?: () => any;
  onSubmit?: () => any;
  가채점기간: boolean;
}

const TranscriptTable = (props: TranscriptTableProps) => {
  return (
    <Container>
      {!props?.hasButtons && (
        <>
          <TranscriptTableBackground1 />
          <TranscriptTableBackground2 />
        </>
      )}
      <GradeCard>
        <Title>2024학년도 9월 모의고사 성적 통지표</Title>
        <Horizon />
        <Table transcript={props.transcript} size="md" />
        {props.가채점기간 && (
          <Information>
            <InfoIconWrapper>
              <InfoIcon />
            </InfoIconWrapper>
            <InfoText>표준점수, 백분위, 등급은 원점수 대비 자체 수능 분석 기준으로 산정된 점수입니다. 업데이트 이후 점수가 달라질 수 있습니다.</InfoText>
          </Information>
        )}
      </GradeCard>
      {props?.hasButtons && (
        <Buttons>
          <Button onClick={props.onModify}>성적 수정하기</Button>
          <AppTooltip
            isOpen={true}
            placement="top-end"
            offset={[0, 26]}
            customStyle={{
              '.chakra-tooltip__arrow-wrapper': { width: '19px !important', height: '19px !important', transform: 'none !important', left: '326px !important', bottom: '-8px !important' },
              '.chakra-tooltip__arrow-wrapper .chakra-tooltip__arrow': { borderRadius: '4px' },
            }}
            label={
              <TooltipContainer>
                <TooltipImg />
                <TooltipText>
                  위의 가상 성적표와 실제 성적표를 비교한 뒤,
                  <br />
                  <TextEmphasis>점수가 일치하면 ‘확인’</TextEmphasis>을 눌러주세요
                </TooltipText>
              </TooltipContainer>
            }
          >
            <ConfirmButton>확인</ConfirmButton>
          </AppTooltip>
        </Buttons>
      )}
    </Container>
  );
};

export default TranscriptTable;

TranscriptTable.defaultProps = {
  scoreData: [
    { rowHeader: '선택과목', history: '-', korean: '화법과작문', math: '확률과통계', english: '-', inquiry1: '사회문화', inquiry2: '생활과윤리' },
    { rowHeader: '표준점수', history: '-', korean: '128', math: '138', english: '-', inquiry1: '62', inquiry2: '68' },
    { rowHeader: '백분위', history: '-', korean: '96', math: '98', english: '-', inquiry1: '85', inquiry2: '96' },
    { rowHeader: '등급', history: '2', korean: '2', math: '1', english: '1', inquiry1: '3', inquiry2: '1' },
  ],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const GradeCard = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 3px 3px 24px -4px rgba(36, 62, 113, 0.08);
  border-radius: 8px;
  margin-top: 24px;
  padding: 32px;
  z-index: 9;
  border: 1px solid rgba(0, 0, 0, 0.05);
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
  width: 20px;
  height: 20px;
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

const ConfirmButton = styled.button`
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
  position: relative;
`;

const TooltipText = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  text-align: left;
  white-space: nowrap;
`;

const TextEmphasis = styled.span`
  color: ${props => props.theme.colors.blue};
`;

const TooltipContainer = styled.div`
  width: 339px;
  display: flex;
  align-items: center;
  gap: 0 12px;
`;

const TranscriptTableBackground1 = styled.div`
  width: 100%;
  height: 447px;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  transform: rotate(-3.73deg);
  top: 24px;
  left: 0;
  box-shadow: 3px 3px 24px -4px rgba(36, 62, 113, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const TranscriptTableBackground2 = styled.div`
  width: 100%;
  height: 413px;
  background-color: white;
  border-radius: 8px;
  position: absolute;
  transform: rotate(3.92deg);
  bottom: -3px;
  left: 0;
  box-shadow: 3px 3px 24px -4px rgba(36, 62, 113, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
`;
