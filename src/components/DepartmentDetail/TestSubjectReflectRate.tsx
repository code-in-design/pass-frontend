import React from 'react';
import { GradeTable, GradeTableTbody, GradeTableTBodyTr, GradeTableThead, GradeTableTheadTr, MenuTitle, TableTd } from './index.styles';

interface TestSubjectReflectRateProps {
  data: Record<string, any> | undefined;
  inquiryNumber: number;
}

const TestSubjectReflectRate = (props: TestSubjectReflectRateProps) => {
  return (
    <>
      <MenuTitle>수능 과목별 반영 비율</MenuTitle>
      <GradeTable>
        <GradeTableThead>
          <GradeTableTheadTr>
            <TableTd>국어</TableTd>
            <TableTd>수학</TableTd>
            <TableTd>영어</TableTd>
            <TableTd>탐구</TableTd>
            <TableTd>한국사</TableTd>
          </GradeTableTheadTr>
        </GradeTableThead>
        <GradeTableTbody>
          <GradeTableTBodyTr>
            {props.data?.map((subject, index) => {
              const { subjectRate, subjectName } = subject;
              const 과목반영여부 = !!subjectRate;
              const 탐구과목반영개수 = props?.inquiryNumber;
              const 탐구1과목반영 = subjectName === '탐구' && 탐구과목반영개수 === 1;

              if (과목반영여부 && !탐구1과목반영) {
                return <TableTd key={index}>{`${subjectRate}%`}</TableTd>;
              }

              if (과목반영여부 && 탐구1과목반영) {
                return (
                  <TableTd key={index}>
                    {`${subjectRate}%`}
                    <span>(상위1과목)</span>
                  </TableTd>
                );
              }

              return <TableTd key={index}>-</TableTd>;
            })}
          </GradeTableTBodyTr>
        </GradeTableTbody>
      </GradeTable>
    </>
  );
};

export default TestSubjectReflectRate;
