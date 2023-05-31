import styled from '@emotion/styled';

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
  inquiry1: string;
  inquiry2: string;
}

const Table = (props: Props) => {
  return (
    <GradeTable>
      <GradeTableThead>
        <GradeTableTheadTr>
          <td>영역</td>
          <td>한국사</td>
          <td>국어</td>
          <td>수학</td>
          <td>영어</td>
          <td colSpan={2}>탐구</td>
        </GradeTableTheadTr>
      </GradeTableThead>
      <GradeTableTbody>
        {props.lists.map((list, item) => {
          console.log(list);
          return (
            <GradeTableTBodyTr key={item}>
              <td>{list.area ? list.area : '-'}</td>
              <td>{list.history ? list.history : '-'}</td>
              <td>{list.korean ? list.korean : '-'}</td>
              <td>{list.math ? list.math : '-'}</td>
              <td>{list.english ? list.english : '-'}</td>
              <td>{list.inquiry1 ? list.inquiry1 : '-'}</td>
              <td>{list.inquiry2 ? list.inquiry2 : '-'}</td>
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
