import React from 'react';
import PracticalScoreDistributionModal from '@/components/Modal/PracticalScoreDistributionModal/PracticalScoreDistributionModal';

interface Props {
  name: string;
  subTitle: string;
  practicals: string[];
  data: { men: string; women: string }[];
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const PracticalScoreDistributionChartContainer = (props: Props) => {
  return <PracticalScoreDistributionModal name={props.name} subTitle={props.subTitle} onClose={props.onClose} exercise={props.practicals} data={props.data} />;
};

PracticalScoreDistributionChartContainer.defaultProps = {
  practicals: ['제자리 멀리뛰기', '배근력', '사이드스텝', '메디신볼던지기', '매달리기'],
  data: [
    { men: '300이상', women: '250이상' },
    { men: '297-299', women: '247-249' },
    ,
    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },
    { men: '300이상', women: '250이상' },
    { men: '297-299', women: '247-249' },
    ,
    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },

    { men: '294-296', women: '244-246' },
    { men: '291-293', women: '241-243' },
    { men: '288-290', women: '238-240' },
  ],
};

export default PracticalScoreDistributionChartContainer;
