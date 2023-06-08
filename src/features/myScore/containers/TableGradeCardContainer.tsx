import React, { useState } from 'react';
import TableGradeCard, { TableGradeCardProps } from '../components/TableGradeCard';
import { ScoreModel } from '@/models/ScoreModel';
import { useFetchPreScoresQuery, useFetchScoresQuery } from '../apis/scoresApi';

interface TableGradeCardContainerProps extends TableGradeCardProps {
  isComfirmScore: boolean;
}

const TableGradeCardContainer = (props: TableGradeCardContainerProps) => {
  const [scoreData, setScoreData] = useState(props.scoreData);
  //성적 불러오기
  const beforeScore = useFetchPreScoresQuery();
  const afterScore = useFetchScoresQuery();
  if (props.isComfirmScore) {
    if (scoreData.length === 0) {
      const scoreModel = new ScoreModel(beforeScore.data);
      const tableScoreData: any = scoreModel.getGrades(scoreModel);
      setScoreData(tableScoreData);
    }
  }
  if (!props.isComfirmScore) {
    if (scoreData.length === 0) {
      const scoreModel = new ScoreModel(afterScore.data);
      const tableScoreData: any = scoreModel.getGrades(scoreModel);
      setScoreData(tableScoreData);
    }
  }

  return <TableGradeCard {...props} scoreData={scoreData} />;
};

export default TableGradeCardContainer;
