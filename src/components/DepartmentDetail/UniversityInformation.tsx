import React from 'react';
import { MenuTitle, Wrapper } from './index.styles';
import UniversityInformationItem from './UniversityInformationItem';
import School from '../../../public/images/icons/graduation.svg';
import Book from '../../../public/images/icons/book.svg';
import NoticeBoard from '../../../public/images/icons/noticeBoard.svg';

const UniversityInformation = () => {
  return (
    <>
      <MenuTitle>학교 정보 바로가기</MenuTitle>
      <Wrapper>
        <UniversityInformationItem icon={<School />} title="대학 홈페이지" />
        <UniversityInformationItem icon={<Book />} title="학과 정보" />
        <UniversityInformationItem icon={<NoticeBoard />} title="모집 요강" />
      </Wrapper>
    </>
  );
};

export default UniversityInformation;
