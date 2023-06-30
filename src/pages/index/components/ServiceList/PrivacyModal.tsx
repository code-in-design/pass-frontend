import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';
import ServiceListItem from '@/pages/index/components/ServiceList/ServiceListItem';
import { useState, useCallback } from 'react';
import PanelSettings from '../../../../../public/images/icons/panelSettings.svg';
import Markdown from '@/components/Markdown/Markdown';
import { personalInformationProtection } from './terms';

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
          <Container>
            <Markdown markdown={personalInformationProtection} />
          </Container>
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
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 32px;
`;

const Container = styled.div`
  width: 728px;
  height: 556px;
  background-color: ${props => props.theme.colors.gray6};
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${props => props.theme.colors.grayBlack};
  border-radius: 20px;
  padding: 24px;
  overflow-y: scroll;
`;
