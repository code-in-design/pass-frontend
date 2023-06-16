import styled from '@emotion/styled';
import { TranscriptModel } from '../../models/TranscriptModel';

interface Props {
  transcript: TranscriptModel;
  size; // size = small
}

const Table = (props: Props) => {
  return (
    <GradeTable>
      <GradeTableThead>
        <GradeTableTheadTr>
          <TableTd>영역</TableTd>
          <TableTd>한국사</TableTd>
          <TableTd>국어</TableTd>
          <TableTd>수학</TableTd>
          <TableTd>영어</TableTd>
          <TableTd colSpan={2}>탐구</TableTd>
        </GradeTableTheadTr>
      </GradeTableThead>
      <GradeTableTbody>
        {props.transcript?.items?.map((transcriptItem, index) => {
          return (
            <GradeTableTBodyTr key={index}>
              <TableTd>{transcriptItem?.rowHeader}</TableTd>
              <TableTd>{transcriptItem?.history || '-'}</TableTd>
              <TableTd>{transcriptItem?.korean || '-'}</TableTd>
              <TableTd>{transcriptItem?.math || '-'}</TableTd>
              <TableTd>{transcriptItem?.english || '-'}</TableTd>
              <TableTd>{transcriptItem?.inquiry1 || '-'}</TableTd>
              <TableTd>{transcriptItem?.inquiry2 || '-'}</TableTd>
            </GradeTableTBodyTr>
          );
        })}
      </GradeTableTbody>
    </GradeTable>
  );
};

export default Table;

const GradeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.blue};
  overflow: hidden;
`;

const GradeTableThead = styled.thead`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.blue};
`;

const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.1);
  height: 51.2px;
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
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
  color: ${props => props.theme.colors.black};
`;

const GradeTableTBodyTr = styled.tr`
  height: 51.2px;
  letter-spacing: -0.04em;
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
    :first-of-type {
      background-color: #f8f8fc;
      color: #7f86d2;
    }
  }
`;

const TableTd = styled.td`
  vertical-align: middle;
`;
