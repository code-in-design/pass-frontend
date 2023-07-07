import theme from '@/theme/theme';
import styled from '@emotion/styled';

interface VersionBadgeProps {
  text: string;
}

export const VersionBadge = (props: VersionBadgeProps) => {
  return <Container>{props.text}</Container>;
};

const Container = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: ${theme.colors.grayBlack};
  color: ${theme.colors.white};
  font-family: Pretendard Regular;
  font-size: 14px;
  line-height: 16px;
`;
