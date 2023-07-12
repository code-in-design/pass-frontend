import theme from '@/theme/theme';
import styled from '@emotion/styled';
import FolderUploadIcon from '../../../../../public/images/icons/drive_folder_upload.svg';
import SuccessIcon from '../../../../../public/images/icons/check_circle.svg';
import { useEffect, useRef, useState } from 'react';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import UploadErrorMessage from './UploadErrorMessage';
import { isEmpty, isNull } from 'lodash';
// import useScoreSheetForm from '../hooks/useScoreSheetForm';

interface Props {
  file: File;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const ScoreSheetUploader = (props: Props) => {
  const { file, register, setValue } = props;
  const isCSV = file?.type === 'text/csv';
  const [isUploaded, setIsisUploaded] = useState(true);

  const handleFileUpload = event => {
    const file = event.target.files[0];

    const allowedExtensions = ['csv'];
    const isAllowed = isOkForUploading(allowedExtensions, file);

    if (isAllowed) {
      setValue('uploadedFile', file);
      setIsisUploaded(true);
    }
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    const allowedExtensions = ['csv'];
    const isAllowed = isOkForUploading(allowedExtensions, file);

    if (isAllowed) {
      setValue('uploadedFile', file);
      setIsisUploaded(true);
      return;
    }
    console.log('업로드 실패');
    setIsisUploaded(false);
  };

  return (
    <Container>
      <ScoreSheetUploaderWrapper isUploaded={isCSV}>
        {!isCSV && (
          <UploadArea htmlFor="fileUpload" onDrop={handleDrop} onDragOver={handleDragOver}>
            <FileUploadInput defaultValue={undefined} type="file" id="fileUpload" {...register('uploadedFile')} onChange={handleFileUpload} />
            <FolderUploadIcon width="80px" height="80px" color={theme.colors.gray3} />
            <BoldText>점수표를 업로드해주세요</BoldText>
            <Text>파일을 드래그 & 드롭하거나 영역을 클릭하여 파일을 등록해 주세요</Text>
          </UploadArea>
        )}
        {isCSV && (
          <UploadSuccess>
            <SuccessIcon width="64px" height="64px" color={theme.colors.deepGreen} />
            <SuccessMessage>업로드 완료!</SuccessMessage>
          </UploadSuccess>
        )}
      </ScoreSheetUploaderWrapper>
      <UploadErrorMessage isHidden={isUploaded} />
    </Container>
  );
};

function isOkForUploading(allowedExtensions, file) {
  const fileExtension = file.name.split('.').pop().toLowerCase();
  console.log(fileExtension);

  const isOkForUploading = allowedExtensions.includes(fileExtension);

  if (isOkForUploading) {
    return true;
  }
  return false;
}

export default ScoreSheetUploader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 24px;
`;

const ScoreSheetUploaderWrapper = styled.div<any>`
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

const UploadErrorMessageWrapper = styled.div`
  height: 56px;
`;
