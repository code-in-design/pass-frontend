import React from 'react';
import TableGradeCard, { TableGradeCardProps } from '../components/TableGradeCard';

interface TableGradeCardContainerProps extends TableGradeCardProps {}

const TableGradeCardContainer = (props: TableGradeCardContainerProps) => {
  return <TableGradeCard {...props} />;
};

export default TableGradeCardContainer;
