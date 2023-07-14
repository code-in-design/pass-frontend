import theme from '@/theme/theme';
import styled from '@emotion/styled';
import VersionDropDownContainer from './VersionSelectionContainer';
import VersionToApplyTestScoreTableContainer from './VersionToApplyTestScoreTableContainer';
import { Button, Flex } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import RadioButtonGroup from '../components/RadionButtonGroup';
import CsvUploader from '../components/CsvUploader';
import { isEmpty } from 'lodash';
import { useState } from 'react';

const ScoreTableUploadContainer = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const methods = useForm();
  const { formState, setError, clearErrors, handleSubmit, resetField } = methods;
  const { errors } = formState;

  const onSubmit = async data => {
    const formData = new FormData();
    // 업로드 파일 없거나 이전 버전 선택 안한 경우
    if (isEmpty(data.uploadFile) && !data.versionToApply && !data.TobeAppliedVersionId) {
      alert('점수표를 적용할 파일을 업로드하거나 선택해주세요');
      return;
    } else {
      formData.append('uploadFile', data.uploadFile);
      formData.append('updateVersionId', data.updateVersionId);
      formData.append('grade', data.grade);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    // 성공한 경우
    setIsUploaded(true);
    // 실패한 경우 에러 만들기
    // setError('upload', { type: 'manual', message: '업로드 실패했습니다.' });
  };
  console.log(errors);

  const onError = errors => {
    if (errors) alert(errors[Object.keys(errors)[0]]?.message);
  };

  const onReset = () => {
    resetField('uploadFile');
    setIsUploaded(false);
    clearErrors('upload');
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <Title>수능 점수 분석</Title>
        <VersionDropDownContainer />
        <RadioButtonGroup />
        <Flex flex="1" gap="24px">
          <CsvUploader isUploaded={isUploaded} />
          <VersionToApplyTestScoreTableContainer />
        </Flex>
        <Flex minH="56px" justifyContent="right">
          <Flex minW="432px" gap="12px" fontFamily="Pretendard Bold" fontSize="16px" lineHeight="20px" letterSpacing="-0.32px">
            <Button isDisabled={!isUploaded} onClick={() => onReset()} flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.gray1} borderRadius="16px">
              재업로드
            </Button>
            <Button isDisabled={isUploaded} type="submit" name="upload" flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.blue} borderRadius="16px">
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
