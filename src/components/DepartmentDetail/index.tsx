import React from 'react';
import styled from '@emotion/styled';
import DepartmentInformation from './DepartmentInformation';
import ApplyMethod from './ApplyMethod';
import TestSubjectRate from './TestSubjectRate';
import PracticalRate from './PracticalRate';
import DepartmentDate from './DepartmentDate';
import UniversityInformation from './UniversityInformation';

const DepartmentDetail = () => {
  return (
    <>
      <InformationWrapper>
        {/* 학과정보 */}
        <DepartmentInformation />
        {/* 전형방법 */}
        <ApplyMethod />
      </InformationWrapper>

      {/*수능 과목별 반영 비율 */}
      <TestSubjectRate />

      {/* 실기 반영 종목 */}
      <PracticalRate />

      {/* 실기고사일정 & 최초 합격자 발표일 */}
      <DepartmentDate />

      {/* 학교 정보 바로가기 */}
      <UniversityInformation />
    </>
  );
};

export default DepartmentDetail;

// 학과 정보
const InformationWrapper = styled.div`
  display: flex;
  gap: 0 24px;
`;
