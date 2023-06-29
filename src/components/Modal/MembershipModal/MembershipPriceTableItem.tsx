import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  title: string;
  items: string | ReactNode[];
}

const MembershipPriceTableItem = (props: Props) => {
  return (
    <TBodyTr>
      <TBodyTd>{props.title}</TBodyTd>
      <TBodyTd>{props.items[0]}</TBodyTd>
      <TBodyTd>{props.items[1]}</TBodyTd>
      <TBodyTd>{props.items[2]}</TBodyTd>
    </TBodyTr>
  );
};

export default MembershipPriceTableItem;

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
