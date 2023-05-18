import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';
import ServiceListItem from '@/pages/index/components/ServiceList/ServiceListItem';
import { useState, useCallback } from 'react';

interface Props {}

const PrivacyModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ServiceListItem img="/images/icons/panelSettings.svg" text="개인정보 보호 안내" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Title>개인정보 보호 안내</Title>
        </ModalLayout>
      )}
    </>
  );
};

export default PrivacyModal;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #191e25;
  margin-bottom: 8px;
`;
