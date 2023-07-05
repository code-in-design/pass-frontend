import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';

interface VersionUpdateModalProps {
  isOpen?: boolean;
  padding?: string;
  onClose?: () => void;
}

export const VersionUpdateModal = (props: VersionUpdateModalProps) => {
  const { isOpen, onClose } = props;
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} padding="100px">
      <div>모달</div>
    </ModalLayout>
  );
};
