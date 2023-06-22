import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import ExclamationMark from '../../../../../public/images/icons/exclamation.svg';

interface Props {
  remainChange: number;
}

const ChangePracticalScoreModal = (props: Props) => {
  console.log(props.remainChange);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ChangeRecord onClick={openModal}>기록 변경하기</ChangeRecord>
      {isOpen && (
        <ModalLayout onClose={closeModal} padding="24px">
          <Container>
            <Title>실기 기록 변경권을 사용하시겠습니까?</Title>
            <Information>
              <InfoIconWrapper>
                <ExclamationMark />
              </InfoIconWrapper>
              입력한 실기 기록이 정확한지 다시 한 번 확인해주세요!
            </Information>
            <RemainChangeWrapper>
              보유 실기 기록 변경권 개수
              <RemainChange>{props.remainChange}개</RemainChange>
            </RemainChangeWrapper>
            <Buttons>
              <Button>아니오</Button>
              <Button yes>예</Button>
            </Buttons>
          </Container>
        </ModalLayout>
      )}
    </>
  );
};

export default ChangePracticalScoreModal;

const ChangeRecord = styled.div`
  width: 80px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.colors.blue};
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
  white-space: nowrap;
  cursor: pointer;
`;

const Container = styled.div`
  width: 365px;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin-bottom: 16px;
`;

const Information = styled.div`
  width: 336px;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: rgba(255, 68, 68, 0.1);
  display: flex;
  gap: 0 4px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${props => props.theme.colors.red};
  margin-bottom: 24px;
`;

const InfoIconWrapper = styled.div`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.red};
`;

const RemainChangeWrapper = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: ${porps => porps.theme.colors.gray2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const RemainChange = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${porps => porps.theme.colors.grayBlack};
`;

const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button<{ yes? }>`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  width: 100%;
  height: 44px;
  border-radius: 16px;
  background-color: ${props => (props.yes ? props.theme.colors.blue : props.theme.colors.gray4)};
  color: ${props => (props.yes ? props.theme.colors.white : props.theme.colors.gray1)};
`;
