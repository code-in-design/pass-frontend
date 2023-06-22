import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import PracticalScoreAnalysisMenuItem from './PracticalScoreAnalysisMenuItem';
import DistributionTableContainer from '@/components/Table/ScoreDistributionTableContainer';
import Info from '../../../../../public/images/icons/info.svg';
import HelpOutline from '../../../../../public/images/icons/helpOutline.svg';

interface Props {
  name: string;
  subTitle: string;
  remainChange: number;
  data: { title: string; record: string; score: string }[];
}

const PracticalScoreAnalysisMenu = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

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
              <Tooltip
                placement="top-start"
                color="#626474"
                bgColor="#fff"
                width="226px"
                height="176px"
                borderRadius="16px"
                padding="16px"
                label={
                  <LabelWrapper>
                    실기 변경 횟수는 가채점 기간 1회,
                    <br />
                    실채점 이후 원서접수 전까지 1회,
                    <br />
                    원서 접수 이후 1회 제공됩니다.
                    <br />
                    <br />
                    추가적으로 실기 기록을 변경하고 싶을 경우, 실기 기록 변경권을 구매해야 합니다.
                    <br />
                    <br />
                    <span>* 남은 실기 변경 횟수가 0회일 때 기록 변경하기 버튼을 클릭하여 구매 가능합니다.</span>
                  </LabelWrapper>
                }
              >
                <HelpIconWrapper>
                  <HelpOutline />
                </HelpIconWrapper>
              </Tooltip>
              남은 실기 변경 횟수 <span>{props.remainChange}회</span>
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
  display: flex;
  align-items: center;
  & > span {
    display: inline-block;
    margin-left: 4px;
    font-weight: 600;
    color: ${props => props.theme.colors.grayBlack};
  }
`;

const HelpIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.gray2};
  margin-right: 4px;
  cursor: pointer;
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

const LabelWrapper = styled.div`
  width: 194px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray1};
  & > span {
    color: ${props => props.theme.colors.gray3};
  }
`;
