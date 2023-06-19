import React, { useState } from 'react';
import styled from '@emotion/styled';
import PracticalScoreAnalysisMenuItem from './PracticalScoreAnalysisMenuItem';
import DistributionTableContainer from '@/components/Table/ScoreDistributionTableContainer';
import Info from '../../../../../public/images/icons/info.svg';

interface Props {
  name: string;
  subTitle: string;
  data: { title: string; record: string; score: string }[];
}

const PracticalScoreAnalysisMenu = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <TitleWrapper>
          <Wrapper>
            <Title>실기 점수 분석</Title>
            <ShowTable onClick={() => setOpenModal(true)}>
              <Info />
              배점표 보기
            </ShowTable>
          </Wrapper>
          <Wrapper>
            <SubTitle>
              남은 실기 변경 횟수 <span>5회</span>
            </SubTitle>
            <ChangeRecord>기록 변경하기</ChangeRecord>
          </Wrapper>
        </TitleWrapper>
        <ItemWrapper>
          {props.data.map((item, index) => {
            return <PracticalScoreAnalysisMenuItem key={index} title={item.title} record={item.record} score={item.score} />;
          })}
        </ItemWrapper>
      </Container>
      {openModal && <DistributionTableContainer onClose={setOpenModal} name={props.name} subTitle={props.subTitle} />}
    </>
  );
};

export default PracticalScoreAnalysisMenu;
PracticalScoreAnalysisMenu.defaultProps = {
  data: [
    { title: '제자리 멀리뛰기', record: '280cm', score: '100' },
    { title: '배근력', record: '180kg', score: '900' },
    { title: '사이드스텝', record: '280cm', score: '100' },
    { title: '메디신볼던지기', record: '280cm', score: '100' },
    { title: '매달리기', record: '180kg', score: '100' },
    { title: '서전트점프', record: '280cm', score: '100' },
  ],
};

const Container = styled.div`
  margin-top: 32px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 0 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors.gray2};
  & > span {
    display: inline-block;
    margin-left: 4px;
    font-weight: 600;
    color: ${props => props.theme.colors.grayBlack};
  }
`;

const ChangeRecord = styled.div`
  width: 80px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.colors.blue};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
  white-space: nowrap;
  cursor: pointer;
`;

const ShowTable = styled.div`
  height: 24px;
  padding: 4px 8px;
  display: flex;
  border-radius: 8px;
  gap: 0 4px;
  border: 1px solid ${props => props.theme.colors.gray4};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  cursor: pointer;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px 12px;
`;
