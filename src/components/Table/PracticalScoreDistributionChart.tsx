import React from 'react';
import styled from '@emotion/styled';
import LockFill from '../../../public/images/icons/lockFill.svg';

interface Props {
  title: string;
  data?: {
    men: string;
    women: string;
  }[];
}

const PracticalScoreDistributionChart = (props: Props) => {
  return (
    <>
      {props.data ? (
        <GradeTable>
          <GradeTableThead>
            <GradeTableTheadTr>
              <TableTd colSpan={2}>종목</TableTd>
              <TableTd colSpan={2}>{props.title}</TableTd>
            </GradeTableTheadTr>
            <GradeTableTheadTr>
              <TableTd>급간</TableTd>
              <TableTd>배점</TableTd>
              <TableTd>남</TableTd>
              <TableTd>여</TableTd>
            </GradeTableTheadTr>
          </GradeTableThead>
          <GradeTableTbody>
            {props?.data?.map((item, index) => {
              const score = 100 - index;
              const count = index + 1;
              return (
                <GradeTableTBodyTr key={index}>
                  <TableTd>{count}</TableTd>
                  <TableTd>{score}</TableTd>
                  <TableTd>{item.men}</TableTd>
                  <TableTd>{item.women}</TableTd>
                </GradeTableTBodyTr>
              );
            })}
          </GradeTableTbody>
        </GradeTable>
      ) : (
        <>
          <NoDataWrapper>
            <IconWrapper>
              <LockFill />
            </IconWrapper>
            <NoDataText>
              해당 종목의 배점 및<br />
              실기계산방식은 대학 비공개입니다.
            </NoDataText>
          </NoDataWrapper>
          <Text>
            Z-ONE에서는 빅데이터 분석을 통한
            <br /> 비공개 계산 방식을 추출하여, 합격 예측이 가능합니다.
          </Text>
        </>
      )}
    </>
  );
};

export default PracticalScoreDistributionChart;

const GradeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.gray4};
  overflow: hidden;
`;

const GradeTableThead = styled.thead`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
`;

const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.2);
  height: 32px;
  & > td {
    border: 1px solid ${props => props.theme.colors.gray4};
  }
  &:last-of-type {
    background-color: rgba(107, 119, 248, 0.1);
  }
`;

const GradeTableTbody = styled.tbody`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;

const GradeTableTBodyTr = styled.tr`
  height: 32px;
  & > td {
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

const TableTd = styled.td`
  vertical-align: middle;
`;

const NoDataWrapper = styled.div`
  width: 100%;
  height: 256px;
  border-radius: 24px;
  background-color: ${props => props.theme.colors.gray6};
  margin: 32px 0 24px;
  padding: 64px 0;
`;

const IconWrapper = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto;
`;
const NoDataText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500px;
  width: 215px;
  text-align: center;
  margin: 16px auto 0px;
  color: ${props => props.theme.colors.gray2};
`;

const Text = styled.div`
  width: 286px;
  margin: 0 auto;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  color: ${props => props.theme.colors.deepGreen};
  white-space: nowrap;
`;
