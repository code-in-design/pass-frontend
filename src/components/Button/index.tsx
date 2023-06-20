import styled from '@emotion/styled';
import { ReactNode } from 'react';

export const DefaultButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  background-color: ${props => props.theme.colors.blue};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => (props.color ? props.color : props => props.theme.colors.gray4)};
`;

interface CheckButtonProps {
  text?: string;
  children?: ReactNode;
}

export const CheckButton = (props: CheckButtonProps) => {
  return (
    <Button>
      {props.children}
      {props.text}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  font-size: 14px;
  color: ${props => props.theme.colors.gray2};
  :checked {
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
  }
`;
