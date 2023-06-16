import React from 'react';
import styled from '@emotion/styled';

interface Props {
  title: string;
  data: {
    men: string;
    women: string;
  }[];
}

const ScoreDistributionTable = (props: Props) => {
  return (
    <GradeTable>
      <GradeTableThead>
        <GradeTableTheadTr>
          <TableTd>종목</TableTd>
          <TableTd colSpan={2}>{props.title}</TableTd>
        </GradeTableTheadTr>
        <GradeTableTheadTr>
          <TableTd>배점</TableTd>
          <TableTd>남</TableTd>
          <TableTd>여</TableTd>
        </GradeTableTheadTr>
      </GradeTableThead>
      <GradeTableTbody>
        {props.data.map((item, index) => {
          const score = 100 - index;
          return (
            <GradeTableTBodyTr key={index}>
              <TableTd>{score}</TableTd>
              <TableTd>{item.men}</TableTd>
              <TableTd>{item.women}</TableTd>
            </GradeTableTBodyTr>
          );
        })}
      </GradeTableTbody>
    </GradeTable>
  );
};

export default ScoreDistributionTable;
ScoreDistributionTable.defaultProps = {
  data: [
    { men: '300이상', women: '250이상' },
    { men: '297-299', women: '247-249' },
    ,
    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },
    { men: '300이상', women: '250이상' },
    { men: '297-299', women: '247-249' },
    ,
    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },

    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },
  ],
};

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
    width: 30%;
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
