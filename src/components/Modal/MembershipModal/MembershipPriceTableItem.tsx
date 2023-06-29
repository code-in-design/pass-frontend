import styled from '@emotion/styled';

interface Props {
  title: string;
  items: Array<string>;
}

const MembershipPriceTableItem = (props: Props) => {
  return (
    <TBodyTr>
      <TBodyTd>{props.title}</TBodyTd>
      <TBodyTd>{props.items[0] !== 'circle' && props.items[0] !== 'X' ? <span>{props.items[0]}</span> : <TableIcon src={`/images/icons/${props.items[0]}.svg`} />}</TBodyTd>
      <TBodyTd>{props.items[1] !== 'circle' && props.items[1] !== 'X' ? <span>{props.items[1]}</span> : <TableIcon src={`/images/icons/${props.items[1]}.svg`} />}</TBodyTd>
      <TBodyTd>{props.items[2] !== 'circle' && props.items[2] !== 'X' ? <span>{props.items[2]}</span> : <TableIcon src={`/images/icons/${props.items[2]}.svg`} />}</TBodyTd>
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
`;

const TableIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
`;

const TableText = styled.span``;
