import theme from '@/theme/theme';
import styled from '@emotion/styled';
import VersionDropDownContainer from './VersionSelectionContainer';
import DataUnifierOptionContainer from './VersionToApplyTestScoreSheetContainer';
import { Box, Button, Flex } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import RadioButtonGroup from '../components/RadionButtonGroup';
import CsvUploader from '../components/CsvUploader';
import UploadErrorMessage from '../components/UploadErrorMessage';
// import ScoreSheetFormProvider from '../context/ScoreSheetFormContext';

const ScoreTableUploadContainer = () => {
  const methods = useForm();
  const { register, setValue, formState, setError, clearErrors, watch, handleSubmit, resetField } = methods;

  const file = watch('uploadFile', undefined);
  const isUploaded = !file?.type;

  const grade = watch('grade');
  console.log(watch());

  const onSubmit = data => {
    // post 요청
    const response = {
      success: false,
      message: '업로드에 실패했습니다',
    };

    // 서버 에러 시
    setError('upload', {
      type: 'manual',
      message: typeof response.message === 'string' ? response.message : '',
    });
  };
  console.log(formState.errors);

  const onError = error => {
    if (error) alert(error);
  };

  const onReset = () => {
    resetField('uploadedFile');
    clearErrors('upload');
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <Title>수능 점수 분석</Title>
        <VersionDropDownContainer />
        <RadioButtonGroup grade={grade} />
        <Flex flex="1" gap="24px">
          <CsvUploader />
          <DataUnifierOptionContainer />
        </Flex>
        <Flex minH="56px" justifyContent="right">
          <Flex minW="432px" gap="12px" fontFamily="Pretendard Bold" fontSize="16px" lineHeight="20px" letterSpacing="-0.32px">
            <Button isDisabled={isUploaded} onClick={() => onReset()} flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.gray1} borderRadius="16px">
              재업로드
            </Button>
            <Button type="submit" name="upload" flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.blue} borderRadius="16px">
              저장
            </Button>
          </Flex>
        </Flex>
      </StyledForm>
    </FormProvider>
  );
};

export default ScoreTableUploadContainer;

const StyledForm = styled.form`
  display: flex;
  height: 100%;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 24px;
  background: ${theme.colors.white};
`;

const Title = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
