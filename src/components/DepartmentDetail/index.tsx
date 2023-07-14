import React from 'react';
import styled from '@emotion/styled';
import DepartmentInformation from './DepartmentInformation';
import ApplicationRate from './ApplicationRate';
import TestSubjectReflectRate from './TestSubjectReflectRate';
import PracticalReflectSubjects from './PracticalReflectSubjects';
import DepartmentDate from './DepartmentDate';
import UniversityInformation from './UniversityInformation';
import LoudSpeaker from '../../../public/images/icons/Loudspeaker.svg';
import Calendar from '../../../public/images/icons/calendar.svg';

interface DepartmentDetailProps {
  data: Record<string, any> | undefined;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DepartmentDetail = (props: DepartmentDetailProps) => {
  return (
    <>
      <Wrapper>
        {/* 학과정보 */}
        <DepartmentInformation data={props.data} />
        {/* 전형방법 */}
        <ApplicationRate data={props.data} />
      </Wrapper>

      {/*수능 과목별 반영 비율 */}
      <TestSubjectReflectRate data={props.data?.subjects} inquiryNumber={props.data?.inquiryNumber} />

      {/* 실기 반영 종목 */}
      <PracticalReflectSubjects data={props.data?.practicalApplyType} setIsModalOpen={props.setIsModalOpen} />

      {/* 실기고사일정 & 최초 합격자 발표일 */}
      <Wrapper>
        <DepartmentDate icon={<Calendar />} title="실기고사 일정" date={props.data?.practicalTestDate} />
        <DepartmentDate icon={<LoudSpeaker />} title="최초 합격자 발표일" date={props.data?.successfulApplicantDate} />
      </Wrapper>

      {/* 학교 정보 바로가기 */}
      <UniversityInformation />
    </>
  );
};

export default DepartmentDetail;

const Wrapper = styled.div`
  display: flex;
  gap: 0 24px;
`;
