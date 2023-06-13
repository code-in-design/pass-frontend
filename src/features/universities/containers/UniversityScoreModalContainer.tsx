import React from 'react';
import ScoreDistributionModal from '../components/FindUniversity/modals/ScoreDistributionModal';

interface Props {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const UniversityScoreModalContainer = (props: Props) => {
  return <ScoreDistributionModal name="고려대학교 체육교육과" subTitle="수능 일반 전형" onClose={props.onClose} />;
};

export default UniversityScoreModalContainer;
