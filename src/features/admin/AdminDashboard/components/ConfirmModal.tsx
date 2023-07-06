import ModalLayout from '@/components/Modal/ModalLayout';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { FieldValues, UseFormHandleSubmit, useForm } from 'react-hook-form';

interface ConfirmModalProps {
  isOpen?: boolean;
  onPrev?: () => void;
  onReset: () => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  version: string;
}

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { onPrev, onReset, version, handleSubmit } = props;

  const onSubmit = data => {
    console.log('제출', data);
    onReset();
  };

  return (
    <ModalLayout isCloseButton={false}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Title>업데이트 확인</Title>
          <VersionDisplaySection>
            <VersionDisplaySectionText>아래 버전으로 업데이트합니다.</VersionDisplaySectionText>
            <VersionDisplay>
              <PlaceholderText>ver.</PlaceholderText>
              <VersionText>{version}</VersionText>
            </VersionDisplay>
          </VersionDisplaySection>
          <ButtonSection>
            <Button type="button" fontColor={theme.colors.gray1} backgroundColor={theme.colors.gray4} onClick={onPrev}>
              이전
            </Button>
            <Button type="submit" fontColor={theme.colors.white} backgroundColor={theme.colors.blue}>
              업데이트
            </Button>
          </ButtonSection>
        </Container>
      </form>
    </ModalLayout>
  );
};

ConfirmModal.defaultProps = {
  version: '2.1.03.0',
};

interface ButtonProps {
  fontColor: string;
  backgroundColor: string;
}

const Container = styled.div`
  display: flex;
  width: 365px;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.span`
  color: ${theme.colors.black};
  font-family: Pretendard Bold;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const VersionDisplaySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const VersionDisplaySectionText = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const VersionDisplay = styled.div`
  display: flex;
  height: 48px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
  background: #fff;
`;

const PlaceholderText = styled.span`
  color: ${theme.colors.gray3};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const VersionText = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const ButtonSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  height: 44px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 16px;
  color: ${({ fontColor }) => fontColor};
  background: ${({ backgroundColor }) => backgroundColor};
  font-family: Pretendard Bold;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.32px;
`;
