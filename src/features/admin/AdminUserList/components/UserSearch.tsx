import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  placeholder: string;
}

export const UserSearch = (props: Props) => {
  return (
    <Container>
      {props.icon}
      <TextInput type="text" placeholder={props.placeholder} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 360px;
  height: 40px;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
  background: ${theme.colors.white};
  color: ${theme.colors.gray3};
`;

const TextInput = styled.input`
  &::placeholder {
    color: ${theme.colors.gray2};
  }
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 16px;
  letter-spacing: -0.24px;
  &:focus {
    outline: none;
  }
  color: ${theme.colors.black};
`;
