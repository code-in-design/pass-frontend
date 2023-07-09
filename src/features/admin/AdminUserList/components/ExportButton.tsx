import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
}

export const ExportButton = (props: Props) => {
  return (
    <Button>
      {props.icon}
      {props.text}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 8px;
  background: ${theme.colors.gray1};

  color: ${theme.colors.white};
  font-size: 12px;
  font-family: Pretendard Bold;
  line-height: 16px;
  letter-spacing: -0.24px;
`;
