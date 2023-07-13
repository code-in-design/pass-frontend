import React from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import DepartmentDetail from '@/components/DepartmentDetail';

interface Props {
  data: any; // TODO: any 제거
  department: any;
  exercise: string[]; // TODO: 어떤? 데이터가 들어오는거지?
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityInformationModal = (props: Props) => {
  return (
    <>
      <ModalLayout onClose={() => props.onClose(false)}>
        <Header>
          <TitleWrapper>
            <Title>{props?.data?.universityName}</Title>
            <SubTitle>{props.department?.applyTypeDetail}</SubTitle>
          </TitleWrapper>
          <CompetitionRate>
            2023 경쟁률 <span>{props.department?.lastYearCompetitionRate}</span>
          </CompetitionRate>
        </Header>
        <DepartmentDetail />
      </ModalLayout>
    </>
  );
};

export default UniversityInformationModal;
UniversityInformationModal.defaultProps = {
  exercise: ['제자리 멀리뛰기', '배근력', '사이드스텝', '메디신볼던지기', '매달리기'],
};

// 학과 제목, 경쟁률
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-right: 40px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray2};
`;

const CompetitionRate = styled.div`
  padding: 10px;
  background-color: ${props => props.theme.colors.gray5};
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayBlack};
  border-radius: 8px;
  & span {
    font-weight: 700;
    color: ${props => props.theme.colors.blue};
  }
`;
