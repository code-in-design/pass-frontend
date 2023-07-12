import styled from '@emotion/styled';

interface Props {}

const RadioButtonGroup = (props: Props) => {
  return (
    <RadioButtonGroupWrapper>
      <RadioItem></RadioItem>
    </RadioButtonGroupWrapper>
  );
};

const RadioButtonGroupWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioItem = styled.div`
  display: flex;
`;
