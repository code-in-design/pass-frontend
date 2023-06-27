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
}

const NaesinScoreInputTableItem = (props: Props) => {
  const [disable, setDisable] = useState(false);

  return (
    <TableBodyTr key={props.id}>
      <TableBodyTd>
        <Checkbox
          {...props.register(`naesinScores.${props.index}.selectCareer`, {
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
      <TableBodyTd>
        <Select size="miniBorder" register={props.register} setValue={props.setValue} name={`naesinScores.${props.index}.subjectGroup`} placeholder="선택" options={subjectGroup} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register(`naesinScores.${props.index}.subject`)} placeholder="과목명 입력" width={'100px'} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.number`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.rawScore`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.subjetAverage`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.standardDeviation`, { disabled: disable })} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register(`naesinScores.${props.index}.achievement`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.studentNumber`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`naesinScores.${props.index}.grade`, { disabled: disable })} />
      </TableBodyTd>
    </TableBodyTr>
  );
};

export default NaesinScoreInputTableItem;

const TableBodyTr = styled.tr``;

const TableBodyTd = styled.td`
  height: 48px;
  vertical-align: middle;
  padding: 4px;
  text-align: center;
`;

const Input = styled.input<{ width?: string }>`
  width: ${props => (props.width ? '100px' : '72px')};
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
