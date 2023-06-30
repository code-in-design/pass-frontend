import { ReactNode, useMemo } from 'react';
import { useTable } from 'react-table';
import styled from '@emotion/styled';
import Circle from '../../../../public/images/icons/circle.svg';
import X from '../../../../public/images/icons/X.svg';

interface TableProps {
  title: string;
  Basic: string | ReactNode;
  Light: string | ReactNode;
  Premium: string | ReactNode;
}

interface Props {
  data: Array<TableProps>;
}

const MembershipPriceTable = (props: Props) => {
  const data = props.data;

  const columns = useMemo(
    () => [
      { Header: '', accessor: 'title' },
      { Header: 'Basic', accessor: 'basic', headerStyle: { color: '#9395A6' } },
      { Header: 'Light', accessor: 'light', headerStyle: { color: '#45BFD9' } },
      { Header: 'Premium', accessor: 'premium', headerStyle: { color: '#6B77F8' } },
    ],
    [],
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <TableContainer {...getTableProps()}>
      <THead>
        {headerGroups.map(headerGroup => (
          <THeadTr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <THedaTd {...column.getHeaderProps()} style={column.headerStyle}>
                {column.render('Header')}
              </THedaTd>
            ))}
          </THeadTr>
        ))}
      </THead>
      <TBody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <TBodyTr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <TBodyTd {...cell.getCellProps()}>{cell.render('Cell')}</TBodyTd>;
              })}
            </TBodyTr>
          );
        })}
      </TBody>
    </TableContainer>
  );
};

MembershipPriceTable.defaultProps = {
  data: [
    {
      title: '실시간 인기 대학 확인',
      Basic: <Circle />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '모의고사 · 수능 성적 입력',
      Basic: <X />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '대학별 환산 점수 계산(실기 만점 기준)',
      Basic: <X />,
      Light: <X />,
      Premium: <Circle />,
    },
    {
      title: '최종 실기 이후, 점수 공개 및 현재 등수 확인',
      Basic: <Circle />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '대학별 환산 총점 계산 (본인 수능,실기 기록,내신 기준)',
      Basic: <X />,
      Light: '1개 대학·학과',
      Premium: <Circle />,
    },
    {
      title: 'Z-지수 자동 계산',
      Basic: <Circle />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '대학·학과 입시 정보 열람',
      Basic: <Circle />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '대학·학과 찾기 (세부 사항 필터링)',
      Basic: <Circle />,
      Light: <Circle />,
      Premium: <Circle />,
    },
    {
      title: '관심 대학 설정',
      Basic: <X />,
      Light: '1개 대학·학과',
      Premium: '최대 3개 대학/학과',
    },
    {
      title: '지원 가능성 분석(수능 점수 기준)',
      Basic: '전체 대학·학과',
      Light: '전체 대학·학과',
      Premium: '전체 대학·학과',
    },
    {
      title: '실기 기록 입력 및 수정',
      Basic: <X />,
      Light: '3회',
      Premium: '3회',
    },
    {
      title: '합격 확률 분석',
      Basic: <X />,
      Light: '1개 대학·학과',
      Premium: '전체 대학·학과',
    },
    {
      title: '예상 지원자 현황 열람',
      Basic: <X />,
      Light: '1개 대학·학과',
      Premium: '전체 대학·학과',
    },
  ],
};

export default MembershipPriceTable;

const TableContainer = styled.table`
  width: 100%;
  margin-top: 32px;
`;

const THead = styled.thead``;

const THeadTr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.gray1};
`;

const THedaTd = styled.td`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  padding-bottom: 16px;
  width: 182px;
  text-align: center;
  &:first-of-type {
    text-align: left;
    width: 326.5px;
  }
  &:last-of-type {
    padding-right: 53.5px;
  }
`;
const TBody = styled.tbody``;

const TBodyTr = styled.tr`
  border-bottom: 1px solid ${props => props.theme.colors.gray5};
`;

const TBodyTd = styled.td`
  vertical-align: middle;
  height: 40px;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  color: #6f6f6f;
  text-align: center;
  &:first-of-type {
    padding-left: 16px;
    text-align: left;
  }
  &:last-of-type {
    padding-right: 53.5px;
  }
  & svg {
    margin: 0 auto;
  }
`;
