import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@chakra-ui/react';
import Select from '@/components/Select';
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

const subjectGroup = [
  { value: 'korean', label: '국어' },
  { value: 'english', label: '영어' },
  { value: 'math', label: '수학' },
  { value: 'social', label: '사회(역사/도덕)' },
  { value: 'history', label: '한국사' },
  { value: 'technologyHome', label: '기술가정/제2외국어/한문/교양' },
  { value: 'physical', label: '체육' },
  { value: 'art', label: '예술' },
];

interface Props {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  id: string;
  index: number;
  title: string;
}

const NaesinScoreInputTableItem = (props: Props) => {
  const [disable, setDisable] = useState(false);

  return (
    <TableBodyTr key={props.id}>
      <TableBodyTd>
        <Checkbox
          {...props.register(`naesinScores.${props.title}.${props.index}.selectCareer`, {
            onChange: e => {
              if (e.target.checked) {
                setDisable(true);
              }
              if (!e.target.checked) {
                setDisable(false);
              }
            },
          })}
        />
      </TableBodyTd>
      <TableBodyTd width="100px">
        <Select height={24} border="8px" register={props.register} setValue={props.setValue} name={`naesinScores.${props.title}.${props.index}.subjectGroup`} placeholder="선택" options={subjectGroup} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register(`naesinScores.${props.title}.${props.index}.subject`)} placeholder="과목명 입력" width={'100px'} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.number`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.rawScore`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.subjetAverage`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.standardDeviation`, { disabled: disable })} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register(`naesinScores.${props.title}.${props.index}.achievement`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.studentNumber`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.title}.${props.index}.grade`, { disabled: disable })} />
      </TableBodyTd>
    </TableBodyTr>
  );
};

export default NaesinScoreInputTableItem;

const TableBodyTr = styled.tr``;

const TableBodyTd = styled.td<{ width?: string }>`
  width: ${props => props.width};
  height: 48px;
  vertical-align: middle;
  text-align: center;
`;

const Input = styled.input<{ width?: string }>`
  width: ${props => (props.width ? props.width : '72px')};
  height: 24px;
  border-radius: 8px;
  padding: 4px 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray2};
  border: 1px solid ${props => props.theme.colors.gray4};
  text-align: center;
  :disabled {
    background-color: ${props => props.theme.colors.gray5};
  }
`;
