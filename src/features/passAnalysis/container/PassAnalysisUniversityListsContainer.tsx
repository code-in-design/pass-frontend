import React from 'react';
import PassAnalysisUniversityLists from '../components/PassAnalysisUniversityLists';

interface Props {
  data: {
    group: string;
    name: string;
    zValue: number;
    possibility: string;
  }[];
}

const PassAnalysisUniversityListsContainer = (props: Props) => {
  return <PassAnalysisUniversityLists data={props.data} />;
};

export default PassAnalysisUniversityListsContainer;
PassAnalysisUniversityListsContainer.defaultProps = {
  data: [
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '적정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '적정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '지원불가' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '지원불가' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '소신' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '소신' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '안정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '안정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '적정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '적정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '지원불가' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '지원불가' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '소신' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '소신' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '안정' },
    { group: '가', name: '경북대학교 체육교육과', zValue: 2.12, possibility: '안정' },
  ],
};
