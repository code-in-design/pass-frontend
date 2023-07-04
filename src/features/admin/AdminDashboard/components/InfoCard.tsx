import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  title?: string;
  content?: string;
  isTitleCustom?: boolean;
  titleAlign?: 'left' | 'center' | 'right';
  isFlexible?: boolean;
  padding?: string;
}

export const InfoCard = (props: Props) => {
  const { icon, title, content, isTitleCustom, titleAlign, isFlexible, padding } = props;
  return (
    <CardWrapper isFlexible={isFlexible} padding={padding}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <InfoWrapper>
        {isTitleCustom ? <Title titleAlign={titleAlign} dangerouslySetInnerHTML={{ __html: title ?? '' }} /> : <Title>{title}</Title>}
        <Content>{content}</Content>
      </InfoWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ isFlexible?: boolean; padding?: string }>`
  display: flex;
  flex: ${({ isFlexible }) => (isFlexible ? '1 0 0' : '0')};
  width: ${({ isFlexible }) => (isFlexible ? '100%' : 'auto')};
  height: ${({ isFlexible }) => (isFlexible ? '100%' : 'auto')};
  min-width: fit-content;
  justify-content: center;
  padding: ${({ padding }) => (padding ? padding : '16px 24px')};
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background: var(--gray-white, #fff);
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

const Title = styled.span<{ titleAlign?: 'left' | 'center' | 'right' }>`
  text-align: ${({ titleAlign }) => titleAlign};
  color: var(--gray-1, #626474);
  font-size: 16px;
  font-family: Pretendard SemiBold;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Content = styled.span`
  color: #6b77f8;
  font-size: 20px;
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.4px;
`;
