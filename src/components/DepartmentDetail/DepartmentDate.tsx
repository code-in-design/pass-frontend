import React from 'react';
import { DateBox, DateContainer, DateName, Wrapper, Date } from './index.styles';
import LoudSpeaker from '../../../public/images/icons/Loudspeaker.svg';
import Calendar from '../../../public/images/icons/calendar.svg';

const DepartmentDate = () => {
  return (
    <Wrapper>
      <DateBox>
        <Calendar />
        <DateContainer>
          <DateName>실기고사 일정</DateName>
          <Date>{props.department?.practicalTestDate}</Date>
        </DateContainer>
      </DateBox>
      <DateBox>
        <LoudSpeaker />
        <DateContainer>
          <DateName>최초 합격자 발표일</DateName>
          <Date>{props.department?.successfulApplicantDate}</Date>
        </DateContainer>
      </DateBox>
    </Wrapper>
  );
};

export default DepartmentDate;
