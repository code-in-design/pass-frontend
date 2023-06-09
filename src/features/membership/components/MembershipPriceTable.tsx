import styled from '@emotion/styled';
import TableItem from './MembershipPriceTableItem';

interface TableProps {
  title: string;
  items: string[];
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
      items: ['circle', 'circle', 'circle'],
    },
    {
      title: '모의고사·수능 성적 입력',
      items: ['X', 'circle', 'circle'],
    },
    {
      title: '대학별 환산 점수 계산',
      items: ['X', 'X', 'circle'],
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
