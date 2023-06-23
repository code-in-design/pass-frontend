import React, { useState } from 'react';
import styled from '@emotion/styled';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Plus from '../../../../../public/images/icons/plus.svg';
import NaesinScoreInputTableItem from './NaesinScoreInputTableItem';

interface Props {
  headers: string[];
}

const NaesinScoreInputTable = (props: Props) => {
  return (
    <>
      <NasinScoreTable>
        <TableHeader>
          <TableHeaderTr>
            {props.headers.map(header => (
              <TableHeaderTd key={header}>{header}</TableHeaderTd>
            ))}
          </TableHeaderTr>
        </TableHeader>
        <TableBody>
          <NaesinScoreInputTableItem />
          <NaesinScoreInputTableItem />
          <NaesinScoreInputTableItem />
          <NaesinScoreInputTableItem />
        </TableBody>
      </NasinScoreTable>
      <AddRowButton type="button">
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

const NasinScoreTable = styled.table`
  width: 100%;
  height: 520px;
`;

const TableHeader = styled.thead`
  width: 100%;
`;

const TableHeaderTr = styled.tr`
  height: 40px;
  border-bottom: 1px solid ${props => props.theme.colors.gray4};
  background-color: pink;
`;

const TableHeaderTd = styled.td`
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-align: center;
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
