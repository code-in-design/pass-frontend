import React from 'react';
import { InfoIcon, InfoItem, InfoTitle, MenuTitle, Wrapper } from './index.styles';
import School from '../../../public/images/icons/graduation.svg';
import Book from '../../../public/images/icons/book.svg';
import NoticeBoard from '../../../public/images/icons/noticeBoard.svg';

const UniversityInformation = () => {
  return (
    <>
      <MenuTitle>학교 정보 바로가기</MenuTitle>
      <Wrapper>
        <InfoItem>
          <InfoIcon>
            <School />
          </InfoIcon>
          <InfoTitle>대학 홈페이지</InfoTitle>
        </InfoItem>
        <InfoItem>
          <Book />
          <InfoTitle>학과 정보</InfoTitle>
        </InfoItem>
        <InfoItem>
          <NoticeBoard />
          <InfoTitle>모집 요강</InfoTitle>
        </InfoItem>
      </Wrapper>
    </>
  );
};

export default UniversityInformation;
