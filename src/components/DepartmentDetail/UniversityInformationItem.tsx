import React, { ReactNode } from 'react';
import { InfoIcon, InfoItem, InfoTitle } from './index.styles';

interface InformationItemProps {
  icon: ReactNode;
  title: string;
}

const UniversityInformationItem = (props: InformationItemProps) => {
  return (
    <InfoItem>
      <InfoIcon>{props.icon}</InfoIcon>
      <InfoTitle>{props.title}</InfoTitle>
    </InfoItem>
  );
};

export default UniversityInformationItem;
