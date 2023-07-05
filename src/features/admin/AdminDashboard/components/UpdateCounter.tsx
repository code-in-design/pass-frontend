import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  icon?: ReactNode;
  title?: string;
  content?: string;
}

export const UpdateCounter = (props: Props) => {
  const { icon, title, content } = props;
  return (
    <CardWrapper>
      <Flex width="100%" alignItems="center" justifyContent="space-between">
        <Flex gap="16px">
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <InfoWrapper>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </InfoWrapper>
        </Flex>
        <DdayBadge>{`D-${2}`}</DdayBadge>
      </Flex>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 16px 24px;
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
  align-items: flex-start;
  gap: 4px;
`;

const Title = styled.span`
  color: var(--gray-1, #626474);
  font-size: 16px;
  font-family: Pretendard SemiBold;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Content = styled.span`
  color: var(--gray-3, #b7b9c9);
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const DdayBadge = styled.div`
  color: var(--green-deep, #45bfd9);
  font-size: 32px;
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.64px;
`;
