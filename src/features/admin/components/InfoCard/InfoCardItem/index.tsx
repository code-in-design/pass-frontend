import styled from '@emotion/styled';
import SalesIcon from '../../../../../../public/images/icons/grossSales.svg';
import { ReactNode } from 'react-markdown/lib/ast-to-react';

interface Props {
  icon?: ReactNode;
  title?: string;
  content?: string;
  isCustom?: boolean;
  children?: ReactNode;
}

const InfoCardItem = (props: Props) => {
  const { icon, title, content } = props;
  return (
    <InfoCardItemWrapper>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <InfoWrapper>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </InfoWrapper>
    </InfoCardItemWrapper>
  );
};

export default InfoCardItem;

const InfoCardItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 8px;
  height: fit-content;
  align-items: flex-start;
  gap: 10px;
  border-radius: 70px;
  background: #f1f2ff;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Title = styled.span`
  color: var(--gray-1, #626474);
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Content = styled.span`
  color: #6b77f8;
  font-size: 20px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
