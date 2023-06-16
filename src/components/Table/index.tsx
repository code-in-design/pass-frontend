import styled from '@emotion/styled';
import { TranscriptModel } from '../../models/TranscriptModel';

interface Props {
  transcript: TranscriptModel;
  size: 'sm' | 'md'; // size = small일경우,합격분석에 수능점수 분석 테이블이보인다.
}

const Table = (props: Props) => {
  return (
    <GradeTable size={props.size}>
      <GradeTableThead size={props.size}>
        <GradeTableTheadTr size={props.size}>
          <TableTd>영역</TableTd>
          <TableTd>한국사</TableTd>
          <TableTd>국어</TableTd>
          <TableTd>수학</TableTd>
          <TableTd>영어</TableTd>
          <TableTd colSpan={2}>탐구</TableTd>
        </GradeTableTheadTr>
      </GradeTableThead>
      <GradeTableTbody size={props.size}>
        {props.transcript?.items?.map((transcriptItem, index) => {
          return (
            <GradeTableTBodyTr key={index} size={props.size}>
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

const GradeTable = styled.table<{ size: 'sm' | 'md' }>`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => (props.size === 'sm' ? props.theme.colors.gray4 : props.theme.colors.blue)};
  overflow: hidden;
`;

const GradeTableThead = styled.thead<{ size: 'sm' | 'md' }>`
  text-align: center;
  font-size: ${props => (props.size === 'sm' ? '14px' : '16px')};
  font-weight: 700;
  line-height: ${props => (props.size === 'sm' ? '16px' : '24px')};
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.blue};
`;

const GradeTableTheadTr = styled.tr<{ size: 'sm' | 'md' }>`
  background-color: ${props => (props.size === 'sm' ? 'rgba(107, 119, 248, 0.2)' : 'rgba(107, 119, 248, 0.1)')};
  height: ${props => (props.size === 'sm' ? '32px' : '51.2px')};
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
    &:last-of-type {
      width: 216px;
    }
  }
`;

const GradeTableTbody = styled.tbody<{ size: 'sm' | 'md' }>`
  text-align: center;
  font-size: ${props => (props.size === 'sm' ? '12px' : '16px')};
  font-weight: 500;
  line-height: ${props => (props.size === 'sm' ? '16px' : '24px')};
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.black};
`;

const GradeTableTBodyTr = styled.tr<{ size: 'sm' | 'md' }>`
  height: ${props => (props.size === 'sm' ? '32px' : '51.2px')};
  letter-spacing: -0.04em;
  & > td {
    width: 152px;
    border: 1px solid ${props => props.theme.colors.gray4};
    :first-of-type {
      background-color: ${props => (props.size === 'sm' ? 'rgba(107, 119, 248, 0.1)' : '#f8f8fc')};
      color: #7f86d2;
    }
  }
`;

const TableTd = styled.td`
  vertical-align: middle;
`;
