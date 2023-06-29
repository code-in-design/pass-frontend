import React from 'react';
import styled from '@emotion/styled';
import PaymentTableItem from './PaymentTableItem';

export type statusType = '결제 완료' | '결제 실패' | '결제 대기중';

interface Props {
  data: { date: string; membership: string; info: string; method: string; amount: string; status?: statusType }[];
}

const PaymentTable = (props: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableHeaderTr>
          <TableHeaderTd>결제일</TableHeaderTd>
          <TableHeaderTd>설명</TableHeaderTd>
          <TableHeaderTd>구매자 정보</TableHeaderTd>
          <TableHeaderTd>결제수단</TableHeaderTd>
          <TableHeaderTd>결제금액</TableHeaderTd>
          <TableHeaderTd>결제상태</TableHeaderTd>
        </TableHeaderTr>
      </TableHeader>
      <TableBody>
        {props.data.map((item, index) => {
          return <PaymentTableItem key={index} date={item.date} membership={item.membership} info={item.info} method={item.method} amount={item.amount} status={item.status} />;
        })}
      </TableBody>
    </Table>
  );
};

PaymentTable.defaultProps = {
  data: [
    { date: '2024년 01월 05일', membership: 'Premiun Plan', info: 'gks3628@naver.com', method: '신용카드', amount: '89,000', status: '결제 완료' },
    { date: '2024년 01월 05일', membership: 'Premiun Plan', info: 'gks3628@naver.com', method: '신용카드', amount: '89,000', status: '결제 대기중' },
    { date: '2024년 01월 05일', membership: 'Premiun Plan', info: 'gks3628@naver.com', method: '신용카드', amount: '89,000', status: '결제 실패' },
  ],
};

export default PaymentTable;

const Table = styled.table`
  width: 100%;
`;

const TableHeader = styled.thead``;

const TableHeaderTr = styled.tr`
  height: 44px;
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
`;

const TableHeaderTd = styled.td`
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  vertical-align: middle;
  font-weight: 700;
`;

const TableBody = styled.tbody``;
