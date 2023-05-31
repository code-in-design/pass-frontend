import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const ProceedingModalLayout = (props: Props) => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={props.onClose} />
      <Container>{props.children}</Container>
    </ModalWrapper>
  );
};

export default ProceedingModalLayout;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

const ModalOutside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: auto;
  padding: 24px;
  height: auto;
  max-height: 816px;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.white};
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
