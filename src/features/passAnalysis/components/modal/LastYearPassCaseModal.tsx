import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import LastYearPassCaseModalScore from './LastYearPassCaseModalScore';

interface Props {
  avatar: string;
  title: string;
  gender: string;
  testData: { name: string; score: string }[];
  practicalData: { name: string; score: string }[];
}

const LastYearPassCaseModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <AddInfoButton onClick={openModal}>추가 정보 보기</AddInfoButton>
      {isOpen && (
        <ModalLayout onClose={closeModal} padding="24px">
          <Container>
            <Header>
              <UserImage src={props.avatar} alt="user" />
              <Title>{props.title}</Title>
              <Gender gender={props.gender}>{props.gender}</Gender>
            </Header>
            <Wrapper>
              <LastYearPassCaseModalScore title="수능 등급" data={props.testData} />
              <LastYearPassCaseModalScore title="실기 성적" data={props.practicalData} />
            </Wrapper>
          </Container>
        </ModalLayout>
      )}
    </>
  );
};

export default LastYearPassCaseModal;
LastYearPassCaseModal.defaultProps = {
  testData: [
    { name: '국어', score: '1등급' },
    { name: '수학', score: '2등급' },
    { name: '영어', score: '3등급' },
    { name: '탐구 1', score: '1등급' },
    { name: '탐구 2', score: '2등급' },
    { name: '한국사', score: '3등급' },
  ],
  practicalData: [
    { name: '제자리 멀리뛰기', score: '280cm' },
    { name: '800m달리기', score: '280cm' },
    { name: '앉아메디신볼던지기', score: '280cm' },
  ],
};

const AddInfoButton = styled.div`
  width: 91px;
  height: 32px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.gray1};
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
`;

const Container = styled.div`
  width: 488px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0 12px;
  margin-bottom: 24px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.grayBlack};
`;

const Gender = styled.div<{ gender: string }>`
  width: 52px;
  height: 24px;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${props => (props.gender === '남학생' ? 'rgba(79, 138, 252, 0.1)' : 'rgba(255, 83, 145, 0.1)')};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  color: ${props => (props.gender === '남학생' ? '#4F8AFC' : '#FF5391')};
  margin-left: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0 24px;
`;
