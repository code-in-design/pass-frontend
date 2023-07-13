import theme from '@/theme/theme';
import styled from '@emotion/styled';
import VersionDropDownContainer from './VersionSelectionContainer';
import DataUnifierOptionContainer from './VersionToApplyTestScoreSheetContainer';
import { Button, Flex } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import RadioButtonGroup from '../components/RadionButtonGroup';
import CsvUploader from '../components/CsvUploader';
// import ScoreSheetFormProvider from '../context/ScoreSheetFormContext';

const ScoreSheetContainer = () => {
  const methods = useForm();
  const { register, setValue, watch, handleSubmit, resetField } = methods;

  // csv 업로드 여부 판단
  const file = watch('uploadedFile', undefined);
  const isUploaded = !file?.type;

  const grade = watch('grade');
  console.log(watch());

  // 서버로 넘길 데이터
  /*
   * 예상 점수표 업로드 반영되는 버전
   * 적용되는 학년
   * 업로드 예상 점수표 (데이터) or
   * 이전에 업로드한 예상 점수표
   */

  const onSubmit = data => {
    console.log('제출', data);
  };

  const onError = error => {
    if (error) alert(error);
  };

  const onReset = () => {
    resetField('uploadedFile');
  };

  return (
    <FormProvider {...methods}>
      <Container>
        <Title>수능 점수 분석</Title>
        <VersionDropDownContainer />
        <RadioButtonGroup grade={grade} />
        <Flex flex="1" gap="24px">
          {/* <ScoreSheetUploaderContainer /> */}
          <CsvUploader file={file} />
          <DataUnifierOptionContainer />
        </Flex>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Flex minH="56px" justifyContent="right">
            <Flex minW="432px" gap="12px" fontFamily="Pretendard Bold" fontSize="16px" lineHeight="20px" letterSpacing="-0.32px">
              <Button isDisabled={isUploaded} onClick={() => onReset()} flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.gray1} borderRadius="16px">
                재업로드
              </Button>
              <Button type="submit" flex={1} height="56px" padding="16px 10px" backgroundColor={theme.colors.blue} borderRadius="16px">
                저장
              </Button>
            </Flex>
          </Flex>
        </form>
      </Container>
    </FormProvider>
  );
};

export default ScoreSheetContainer;

const Container = styled.div`
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
