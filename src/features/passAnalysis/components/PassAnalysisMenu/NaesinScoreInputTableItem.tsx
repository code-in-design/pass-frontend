import React from 'react';
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
}

const NaesinScoreInputTableItem = (props: Props) => {
  console.log(props.getValues('selectCareer'));
  return (
    <TableBodyTr>
      <TableBodyTd>
        <Checkbox {...props.register('selectCareer')} />
      </TableBodyTd>
      <TableBodyTd>
        <Select size="miniBorder" register={props.register} setValue={props.setValue} name="subjectSelect" placeholder="선택" options={subjectGroup} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register(`subject`, { onChange: e => props.setValue('subject', e.target.value) })} placeholder="과목명 입력" width={'100px'} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register('number')} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register('rawScore')} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register(`${props.getValues('subject')}subjetAverage`)} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register('standardDeviation')} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" {...props.register('achievement')} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register('studentNumber')} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" {...props.register('grade')} />
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
`;
