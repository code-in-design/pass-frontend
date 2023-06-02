import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import More from '../../../../public/images/icons/moreHoriz.svg';
import ProceedingModalLayout from '@/components/Modal/ProceedingModalLayout';
import TooltipImg from '../../../../public/images/icons/ExclamationMark.svg';
import MyTooltip from '@/components/Tooltip';
import ProgressBar from '@ramonak/react-progress-bar';
import { useRouter } from 'next/router';

const UniversityFinderModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  useEffect(() => {
    setTimeout(() => {
      // 대학찾기 메인페이지로 이동시키기
      // router.push("/")
    }, 3000);
  }, []);

  return (
    <>
      <Button type="button" data-tooltip-id="tooltip-myScore" data-tooltip-offset={16} onClick={openModal}>
        확인
        <MyTooltip id="tooltip-myScore">
          <TooltipContainer>
            <TooltipImg />
            <TooltipText>
              위의 가상 성적표와 실제 성적표를 비교한 뒤, <TextEmphasis>점수가 일치하면 ‘확인’</TextEmphasis>을 눌러주세요
            </TooltipText>
          </TooltipContainer>
        </MyTooltip>
      </Button>
      {isOpen && (
        <ProceedingModalLayout isOpen={isOpen} onClose={closeModal}>
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

const Button = styled.button`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  position: relative;
`;

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

const TooltipText = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-left: 12px;
  text-align: left;
`;

const TextEmphasis = styled.span`
  color: ${props => props.theme.colors.blue};
`;

const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
`;
