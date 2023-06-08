import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import More from '../../../../public/images/icons/moreHoriz.svg';
import ProceedingModalLayout from '@/components/Modal/ProceedingModalLayout';
import ProgressBar from '@ramonak/react-progress-bar';

interface Props {
  isOpen?: boolean;
}

const UniversityFinderModal = ({ isOpen }: Props) => {
  return (
    <>
      {isOpen && (
        <ProceedingModalLayout isOpen={isOpen}>
          <SchoolIconWrapper>
            <SchoolIcon src="/images/icons/school.jpg" alt="school" />
          </SchoolIconWrapper>
          <TextWrapper>
            <Text>지원 가능한 대학·학과를 찾는 중입니다</Text>
            <MoreWrpper>
              <More />
            </MoreWrpper>
          </TextWrapper>
          <ProgressBar completed={100} bgColor="#6B77F8" height="24px" width="784px" borderRadius="53px" baseBgColor="#F3F4FA" />
        </ProceedingModalLayout>
      )}
    </>
  );
};

export default UniversityFinderModal;

const SchoolIconWrapper = styled.div`
  width: 63px;
  height: 63px;
  margin: 0 auto 8px;
`;

const SchoolIcon = styled.img`
  display: block;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${props => props.theme.colors.grayBlack};
`;
const MoreWrpper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
