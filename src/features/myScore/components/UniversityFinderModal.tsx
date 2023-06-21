import React from 'react';
import ProceedingModalLayout from '@/components/Modal/ProceedingModalLayout';
import ProcessBar from '@/components/ProcessBar/ProcessBar';
import School from '../../../../public/images/icons/school.svg';

interface Props {
  isOpen?: boolean;
}

const UniversityFinderModal = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <ProceedingModalLayout isOpen={isOpen}>
          <ProcessBar img={<School />} text="지원 가능한 대학·학과를 찾는 중입니다" />
        </ProceedingModalLayout>
      )}
    </>
  );
};

export default UniversityFinderModal;
