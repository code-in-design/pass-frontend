import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import Edit from '../../../../../public/images/icons/edit.svg';

interface Props {
  title: string;
}

const NaesinScoreInputModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  return (
    <>
      <ScoreContainer onClick={openModal}>
        <TitleWrapper>
          <ScoreInputIconWrapper>
            <Edit />
          </ScoreInputIconWrapper>
          <ScoreInputTitle>{props.title}</ScoreInputTitle>
        </TitleWrapper>
        <ScoreButton>입력하기</ScoreButton>
      </ScoreContainer>
      {isOpen && (
        <ModalLayout onClose={closeModal} padding="24px">
          <Container>
            <Wrapper>
              <ModalTitle>{props.title}</ModalTitle>
              <SaveButton>저장</SaveButton>
            </Wrapper>
          </Container>
        </ModalLayout>
      )}
    </>
  );
};

export default NaesinScoreInputModal;

const ScoreContainer = styled.div`
  width: 100%;
  height: 48px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0 8px;
`;

const ScoreInputIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.gray2};
`;

const ScoreInputTitle = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;

const ScoreButton = styled.div`
  width: 70px;
  height: 24px;
  border-radius: 8px;
  background-color: ${prpos => prpos.theme.colors.green};
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${prpos => prpos.theme.colors.white};
  padding: 4px 0;
  text-align: center;
`;

//modal
const Container = styled.div`
  min-width: 856px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.black};
`;

const SaveButton = styled.button`
  width: 128px;
  height: 32px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.blue};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
`;