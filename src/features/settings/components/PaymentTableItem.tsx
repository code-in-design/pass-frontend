import React from 'react';
import styled from '@emotion/styled';

interface Props {
  date: string;
  membership: string;
  info: string;
  method: string;
  amount: string;
  status: '결제 완료' | '결제 실패' | '결제 대기중' | undefined;
}

const PaymentTableItem = (props: Props) => {
  return (
    <TableBodyTr>
      <TableBodyTd>{props.date}</TableBodyTd>
      <TableBodyTd>{props.membership}</TableBodyTd>
      <TableBodyTd>{props.info}</TableBodyTd>
      <TableBodyTd>{props.method}</TableBodyTd>
      <TableBodyTd>{props.amount}</TableBodyTd>
      <TableBodyTd status={props.status}>{props.status}</TableBodyTd>
    </TableBodyTr>
  );
};

export default PaymentTableItem;

const TableBodyTr = styled.tr`
  height: 40px;
`;

const TableBodyTd = styled.td<{ status?: '결제 완료' | '결제 실패' | '결제 대기중' }>`
  text-align: center;
  vertical-align: middle;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => (props?.status === '결제 완료' ? props.theme.colors.blue : props?.status === '결제 실패' ? props.theme.colors.red : props?.status === '결제 대기중' ? props.theme.colors.gray2 : props.theme.colors.grayBlack)};
  :first-of-type {
    font-weight: 600;
  }
  :last-of-type {
    font-weight: 600;
  }
`;
