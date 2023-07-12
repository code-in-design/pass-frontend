import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const FormButtonGroup = ({ file, reset, handleSubmit }) => {
  const isUploaded = file;

  return (
    <FormButtonGroupWrapper>
      <ButtonWrapper>
        <Button color={theme.colors.gray1} disabled={!isUploaded} onClick={() => console.log('클릭')}>
          재업로드
        </Button>
        <Button color={theme.colors.blue} onClick={handleSubmit}>
          저장
        </Button>
      </ButtonWrapper>
    </FormButtonGroupWrapper>
  );
};

export default FormButtonGroup;

const FormButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 432px;
  align-items: flex-start;
  gap: 12px;
`;

const Button = styled.button<any>`
  display: flex;
  height: 56px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

  color: ${theme.colors.white};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;

  border-radius: 16px;
  background: ${({ color }) => color};
`;
