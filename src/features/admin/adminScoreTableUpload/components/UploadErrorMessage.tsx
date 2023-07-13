import styled from '@emotion/styled';
import WarningIcon from '../../../../../public/images/icons/warningSignal.svg';
import theme from '@/theme/theme';

interface Props {
  message: string;
}

const UploadErrorMessage = (props: Props) => {
  return (
    <UploadErrorMessageWrapper>
      <WarningIcon width="20px" height="20px" color={theme.colors.red} />
      <Text>{props.message}</Text>
    </UploadErrorMessageWrapper>
  );
};

export default UploadErrorMessage;

const UploadErrorMessageWrapper = styled.div<any>`
  display: flex;
  width: 100%;
  padding: 16px;
  align-items: center;
  gap: 8px;

  border-radius: 16px;
  background: var(--red-10, rgba(255, 68, 68, 0.1));
  ${({ isHidden }) =>
    isHidden &&
    `
    visibility: hidden;
  `}
`;

const Text = styled.span`
  color: ${theme.colors.red};
  font-family: Pretendard SemiBold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.32px;
`;
