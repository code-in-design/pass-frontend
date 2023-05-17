import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import { useCallback, useState } from 'react';
import ProbabilityItem from './ProbabilityItem';

interface Props {}

const PassingProbabilityModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ProbabilityItem img="/images/icons/probability2.svg" name="민중쌤의" title="합격 가능성 comment" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Container>
            <Title>김민중 선생님이 설명하는</Title>
            <SubTitle>합격 확률</SubTitle>
          </Container>
        </ModalLayout>
      )}
    </>
  );
};

export default PassingProbabilityModal;

const Container = styled.form`
  width: 432px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  color: #191e25;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #626474;
  margin-bottom: 8px;
`;
