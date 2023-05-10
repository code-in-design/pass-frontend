import styled from '@emotion/styled';

export const DefaultButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  background-color: #6b77f8;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => (props.color ? props.color : '#E4E6F0')};
`;
