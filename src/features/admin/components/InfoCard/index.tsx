import styled from '@emotion/styled';
import InfoCardItem from './InfoCardItem';
import { ReactNode } from 'react-markdown/lib/ast-to-react';

interface Props {
  children: ReactNode;
  isFull: boolean;
}

const InfoCard = (props: Props) => {
  const { children, isFull } = props;
  return <InfoCardWrapper isFull={isFull}>{children}</InfoCardWrapper>;
};

export default InfoCard;

InfoCard.defaultProps = {
  children: <InfoCardItem />,
  isFull: false,
};

const InfoCardWrapper = styled.div<{ isFull: boolean; width?: string }>`
  display: flex;
  height: 80px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background: var(--gray-white, #fff);
  flex-grow: ${({ isFull }) => (isFull ? '1' : '0')};
  flex-shrink: 0;
`;
