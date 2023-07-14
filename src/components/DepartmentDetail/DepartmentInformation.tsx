import React from 'react';
import { Information, MenuTitle } from './index.styles';
import DepartmentInformationBox from './DepartmentInformationBox';

interface DepartmentInformationProps {
  data: Record<string, any> | undefined;
}

const DepartmentInformation = (props: DepartmentInformationProps) => {
  return (
    <div>
      <MenuTitle>학과정보</MenuTitle>
      <Information>
        <DepartmentInformationBox title="모집군" text={props.data?.recruitmentGroup} />
        <DepartmentInformationBox title="모집정원" text={props.data?.recruitNumber} tooltipText="수시 이월을 포함한 정시 모집 인원입니다." tooltip={true} />
      </Information>
    </div>
  );
};

export default DepartmentInformation;
