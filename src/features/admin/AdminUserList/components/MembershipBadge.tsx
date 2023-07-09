import theme from '@/theme/theme';
import styled from '@emotion/styled';

interface Props {
  text: string;
  color: string;
}

export const MemebershipBadge = (props: Props) => {
  return <MemebershipBadgeWrapper>{props.text}</MemebershipBadgeWrapper>;
};

const MemebershipBadgeWrapper = styled.div<any>`
  display: flex;
  padding: 4px 8px;
  gap: 10px;
  color: ${theme.colors.white};
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 12px;
  letter-spacing: -0.24px;
  background-color: ${({ color }) => color};
`;
