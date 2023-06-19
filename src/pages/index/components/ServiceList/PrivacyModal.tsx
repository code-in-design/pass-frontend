import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';
import ServiceListItem from '@/pages/index/components/ServiceList/ServiceListItem';
import { useState, useCallback } from 'react';
import PanelSettings from '../../../../../public/images/icons/panelSettings.svg';

const PrivacyModal = props => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ServiceListItem icon={<PanelSettings />} text="개인정보 보호 안내" onClick={openModal} />
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
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;
