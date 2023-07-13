import { useEffect } from 'react';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FieldValues, UseFormRegister, UseFormSetValue, useFormContext } from 'react-hook-form';
import FolderUploadIcon from '../../../../../public/images/icons/drive_folder_upload.svg';
import SuccessIcon from '../../../../../public/images/icons/check_circle.svg';
import { isEmpty } from 'lodash';
import UploadErrorMessage from './UploadErrorMessage';

const CsvUploader = () => {
  const { register, setValue, formState } = useFormContext();
  const { getRootProps } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
    },
    multiple: false,
    onDrop: useCallback(
      acceptedFiles => {
        setValue('uploadedFile', acceptedFiles[0]);
      },
      [setValue],
    ),
  });
  const isUploaded = false;

  return (
    <Container>
      <CsvUploaderWrapper>
        {!isUploaded && (
          <UploadArea htmlFor="fileUpload" {...getRootProps({ className: 'dropzone' })}>
            <FileUploadInput type="file" {...register('uploadFile')} />
            <FolderUploadIcon width="80px" height="80px" color={theme.colors.gray3} />
            <BoldText>점수표를 업로드해주세요</BoldText>
            <Text>파일을 드래그 & 드롭하거나 영역을 클릭하여 파일을 등록해 주세요</Text>
          </UploadArea>
        )}
        {isUploaded && (
          <UploadSuccess>
            <SuccessIcon width="64px" height="64px" color={theme.colors.deepGreen} />
            <SuccessMessage>업로드 완료!</SuccessMessage>
          </UploadSuccess>
        )}
      </CsvUploaderWrapper>
      <ErrorMessageWrapper>{formState.errors?.upload?.message && <UploadErrorMessage message={formState.errors.upload?.message as string} />}</ErrorMessageWrapper>
    </Container>
  );
};

export default CsvUploader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
`;

const CsvUploaderWrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-radius: 32px;
  border: 1px solid ${theme.colors.gray4};
  background: ${({ isUploaded }) => (isUploaded ? theme.colors.gray7 : theme.colors.white)};
  padding: 16px;
`;

const UploadArea = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 2px dashed ${theme.colors.gray4};
`;

const FileUploadInput = styled.input`
  &[type='file'] {
    visibility: hidden;
    position: absolute;
  }
`;

const BoldText = styled.span`
  color: ${theme.colors.grayBlack};
  text-align: center;
  font-family: Pretendard Bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Text = styled.span`
  color: ${theme.colors.gray1};
  text-align: center;
  font-family: Pretendard Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

const UploadSuccess = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`;

const SuccessMessage = styled.span`
  color: ${theme.colors.deepGreen};
  text-align: center;

  font-family: Pretendard Bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const ErrorMessageWrapper = styled.div`
  width: 100%;
  min-height: 56px;
`;
