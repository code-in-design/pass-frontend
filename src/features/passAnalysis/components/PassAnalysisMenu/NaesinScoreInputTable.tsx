import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import { GridApi, ColumnApi } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
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

const NaesinScoreInputTable = () => {
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [gridColumnApi, setGridColumnApi] = useState<ColumnApi | null>(null);
  const [rowData, setRowData] = useState([{ checkCareer: '' }, { checkCareer: '' }, { checkCareer: '' }]);

  const onGridReady = params => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const addRow = () => {
    if (gridApi) {
      const newData = {
        // 새 행의 초기 데이터
      };
      gridApi.applyTransaction({ add: [newData] });
    }
  };

  const checkbox = () => {
    return <Checkbox />;
  };
  const selectbox = () => {
    return <Select size="miniBorder" name="subjectSelect" placeholder="선택" options={subjectGroup} />;
  };
  const input = props => {
    return <Input type="text" />;
  };
  const inputNumber = props => {
    return <Input type="number" />;
  };

  const getRowStyle = params => {
    return { padding: '12px 16px' };
  };

  return (
    <div style={{ height: 564, width: 856 }}>
      <AgGridReact
        onGridReady={onGridReady}
        rowData={rowData}
        getRowHeight={() => 48}
        columnDefs={[
          { headerName: '진로선택', field: 'checkCareer', cellRenderer: checkbox, minWidth: 48, flex: 1, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '20px' } },
          { headerName: '교과', field: 'subjectGroup', cellRenderer: selectbox, minWidth: 100, flex: 2, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '과목', field: 'subject', cellRenderer: input, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '단위수', field: 'column2', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '원점수', field: 'rawScore', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '과목평균', field: 'subjectAverage', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '표준편차', field: 'standardDeviation', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '성취도', field: 'Achievement', cellRenderer: input, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '수강자 수', field: 'studentNumber', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
          { headerName: '등급', field: 'grade', cellRenderer: inputNumber, minWidth: 72, flex: 1.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
        ]}
        getRowStyle={getRowStyle}
      ></AgGridReact>
      <AddRowButton type="button" onClick={addRow}>
        과목 추가하기
      </AddRowButton>
    </div>
  );
};

export default NaesinScoreInputTable;

const AddRowButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background-color: rgba(107, 119, 248, 0.15);
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.blue};
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
