import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const UserListWrapper = (props: Props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border-radius: 24px;
  background: ${theme.colors.white};
`;
