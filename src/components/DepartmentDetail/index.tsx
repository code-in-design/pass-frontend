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

const DepartmentDetail = () => {
  return (
    <>
      <Wrapper>
        {/* 학과정보 */}
        <DepartmentInformation />
        {/* 전형방법 */}
        <ApplicationRate />
      </Wrapper>

      {/*수능 과목별 반영 비율 */}
      <TestSubjectReflectRate />

      {/* 실기 반영 종목 */}
      <PracticalReflectSubjects />

      {/* 실기고사일정 & 최초 합격자 발표일 */}
      <Wrapper>
        <DepartmentDate icon={<Calendar />} title="실기고사 일정" date="2024년 1월 23일" />
        <DepartmentDate icon={<LoudSpeaker />} title="최초 합격자 발표일" date="2024년 1월 23일" />
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
