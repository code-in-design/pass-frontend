import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Plus from '../../../../../public/images/icons/plus.svg';
import NaesinScoreInputTableItem from './NaesinScoreInputTableItem';
import { FieldValues, UseFieldArrayAppend, UseFormGetValues, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface Props {
  headers: string[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  fields: any;
  append: UseFieldArrayAppend<FieldValues, 'naesinScores'>;
  watch: UseFormWatch<FieldValues>;
}

const NaesinScoreInputTable = (props: Props) => {
  const [subjectCount, setSubjectCount] = useState(10); // 초기 과목 개수는 1로 설정

  const handleAddSubject = () => {
    setSubjectCount(prevCount => prevCount + 1); // 과목 개수 증가
  };

  const watchFieldArray = props.watch('naesinScores');
  const controlledFields = props.fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  useEffect(() => {
    if (subjectCount > controlledFields.length) {
      const additionalCount = subjectCount - controlledFields.length;
      for (let i = 0; i < additionalCount; i++) {
        props.append({
          selectCareer: false,
          subjectGroup: '',
          subject: '',
          number: '',
          rawScore: '',
          subjetAverage: '',
          standardDeviation: '',
          achievement: '',
          studentNumber: '',
          grade: '',
        });
      }
    }
  }, [subjectCount, controlledFields.length, props.append]);

  return (
    <>
      <NasinTableWrapper>
        <NasinScoreTable>
          <TableHeader>
            <TableHeaderTr>
              {props.headers.map(header => (
                <TableHeaderTd key={header}>{header}</TableHeaderTd>
              ))}
            </TableHeaderTr>
          </TableHeader>
          <TableBody>
            {props.fields.map((field, index) => {
              return <NaesinScoreInputTableItem key={index} id={field.id} index={index} register={props.register} setValue={props.setValue} getValues={props.getValues} />;
            })}
          </TableBody>
        </NasinScoreTable>
      </NasinTableWrapper>
      <AddRowButton
        type="button"
        onClick={() => {
          handleAddSubject();
          props.append({
            selectCareer: false,
            subjectGroup: '',
            subject: '',
            number: '',
            rawScore: '',
            subjetAverage: '',
            standardDeviation: '',
            achievement: '',
            studentNumber: '',
            grade: '',
          });
        }}
      >
        <PlusIconWrapper>
          <Plus />
        </PlusIconWrapper>
        과목 추가하기
      </AddRowButton>
    </>
  );
};

NaesinScoreInputTable.defaultProps = {
  headers: ['진로선택', '교과', '과목', '단위수', '원점수', '과목평균', '표준편차', '성취도', '수강자 수', '등급'],
};
export default NaesinScoreInputTable;

const NasinTableWrapper = styled.div`
  max-height: 520px;
  min-height: 520px;
  overflow-y: scroll;
`;

const NasinScoreTable = styled.table`
  width: 100%;
`;

const TableHeader = styled.thead`
  width: 100%;
`;

const TableHeaderTr = styled.tr`
  height: 40px;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

const TableHeaderTd = styled.td`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    height: 1px;
    border-bottom: 1px solid ${props => props.theme.colors.gray4};
  }
`;

const TableBody = styled.tbody`
  height: 48px;
`;

const AddRowButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background-color: rgba(107, 119, 248, 0.15);
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlusIconWrapper = styled.div`
  width: 20px;
  height: 20px;
  color: ${props => props.theme.colors.blue};
`;
