import styled from '@emotion/styled';
import TableItem from './MembershipPriceTableItem';
import Circle from '../../../../public/images/icons/circle.svg';
import X from '../../../../public/images/icons/X.svg';
import { ReactNode } from 'react';

interface TableProps {
  title: string;
  items: string | ReactNode[];
}

interface Props {
  data: Array<TableProps>;
}

const MembershipPriceTable = ({ data }: Props) => {
  return (
    <TableContainer>
      <THead>
        <THeadTr>
          <THedaTd></THedaTd>
          <THedaTd color="Basic">Basic</THedaTd>
          <THedaTd color="Light">Light</THedaTd>
          <THedaTd color="Premium">Premium</THedaTd>
        </THeadTr>
      </THead>
      <TBody>
        {data.map((item, index) => (
          <TableItem key={index} title={item.title} items={item.items} />
        ))}
      </TBody>
    </TableContainer>
  );
};

export default MembershipPriceTable;

MembershipPriceTable.defaultProps = {
  data: [
    {
      title: '실시간 인기 대학 확인',
      items: [<Circle />, <Circle />, <Circle />],
    },
    {
      title: '모의고사 · 수능 성적 입력',
      items: [<X />, <Circle />, <Circle />],
    },
    {
      title: '대학별 환산 점수 계산(실기 만점 기준)',
      items: [<X />, <X />, <Circle />],
    },
    {
      title: '최종 실기 이후, 점수 공개 및 현재 등수 확인',
      items: [<Circle />, <Circle />, <Circle />],
    },
    {
      title: '대학별 환산 총점 계산 (본인 수능,실기 기록,내신 기준)',
      items: [<X />, '1개 대학·학과', <Circle />],
    },
    {
      title: 'Z-지수 자동 계산',
      items: [<Circle />, <Circle />, <Circle />],
    },
    {
      title: '대학·학과 입시 정보 열람',
      items: [<Circle />, <Circle />, <Circle />],
    },
    {
      title: '대학·학과 찾기 (세부 사항 필터링)',
      items: [<Circle />, <Circle />, <Circle />],
    },
    {
      title: '관심 대학 설정',
      items: [<X />, '1개 대학·학과', '최대 3개 대학/학과'],
    },
    {
      title: '지원 가능성 분석(수능 점수 기준)',
      items: ['전체 대학·학과', '전체 대학·학과', '전체 대학·학과'],
    },
    {
      title: '실기 기록 입력 및 수정',
      items: [<X />, '3회', '3회'],
    },
    {
      title: '합격 확률 분석',
      items: [<X />, '1개 대학·학과', '전체 대학·학과'],
    },
    {
      title: '예상 지원자 현황 열람',
      items: [<X />, '1개 대학·학과', '전체 대학·학과'],
    },
  ],
};

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
  color: ${props => (props.color === 'Basic' ? props.theme.colors.gray2 : props.color === 'Light' ? props.theme.colors.green : props.theme.colors.blue)};
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
