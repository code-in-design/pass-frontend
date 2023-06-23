import React from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@chakra-ui/react';
import Select from '@/components/Select';

const subjectGroup = [
  { value: 'korean', label: '국어' },
  { value: 'english', label: '영어' },
  { value: 'math', label: '수학' },
  { value: 'social', label: '사회(역사/도덕 포함)' },
  { value: 'history', label: '한국사' },
  { value: 'technologyHome', label: '기술가정/제2외국어/한문/교양' },
  { value: 'physical', label: '체육' },
  { value: 'art', label: '예술' },
];

const NaesinScoreInputTableItem = () => {
  return (
    <TableBodyTr>
      <TableBodyTd>
        <Checkbox />
      </TableBodyTd>
      <TableBodyTd>
        <Select size="miniBorder" name="subjectSelect" placeholder="선택" options={subjectGroup} />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="text" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
      <TableBodyTd>
        <Input type="number" />
      </TableBodyTd>
    </TableBodyTr>
  );
};

export default NaesinScoreInputTableItem;

const TableBodyTr = styled.tr``;

const TableBodyTd = styled.td`
  height: 48px;
`;

const Input = styled.input`
  width: 72px;
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
