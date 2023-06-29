import styled from '@emotion/styled';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  isOpen?: boolean;
  padding?: string;
  onClose?: () => void;
}

const ModalLayout = (props: Props) => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={props.onClose} />
      <Container padding={props?.padding || '32px'}>
        <Close src="/images/icons/close.svg" alt="close" onClick={props.onClose} />
        {props.children}
      </Container>
    </ModalWrapper>
  );
};

export default ModalLayout;

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

const Container = styled.div<{ padding }>`
  width: auto;
  padding: ${props => props.padding};
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

const Close = styled.img`
  padding: 5.43px;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 99;
`;
