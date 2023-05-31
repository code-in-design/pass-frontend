import styled from '@emotion/styled';

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
