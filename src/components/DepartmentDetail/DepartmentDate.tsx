import React, { ReactNode } from 'react';
import { DateBox, DateContainer, DateName, Date } from './index.styles';

interface DepartmentDateProps {
  icon: ReactNode;
  title: string;
  date: string;
}

const DepartmentDate = (props: DepartmentDateProps) => {
  return (
    <DateBox>
      {props.icon}
      <DateContainer>
        <DateName>{props.title}</DateName>
        <Date>{props.date}</Date>
      </DateContainer>
    </DateBox>
  );
};

export default DepartmentDate;
