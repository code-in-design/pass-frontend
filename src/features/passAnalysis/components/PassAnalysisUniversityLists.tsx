import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import { useQueryParam } from 'use-query-params';
import TableHeaderTooltip from '@/components/Tooltip/TableHeaderTooltip';
import 'ag-grid-community/styles/ag-grid.css';
import ApplicationPossibilityTag from '@/components/Tag/ApplicationPossibilityTag';

interface Props {
  data: {
    group: string;
    universityName: string;
    Zvalue: number;
    applicationPossibility: string;
  }[];
}

const PassAnalysisUniversityLists = (props: Props) => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [rowData] = useState(props.data);
  const [columnDefs] = useState([
    { field: 'group', headerName: '군', minWidth: 11, flex: 1, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: 'universityName', headerName: '대학/학과', minWidth: 172, flex: 2.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: 'Zvalue', headerName: 'Z-지수', minWidth: 46, flex: 2.1, headerComponent: TableHeaderTooltip, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: 'applicationPossibility', headerName: '지원가능성', cellRendererFramework: ApplicationPossibilityTag, minWidth: 64, flex: 2.1 },
  ]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [university, setUniversity] = useQueryParam('university');

  const getRowStyle = params => {
    if (params.rowIndex === selectedRow) {
      return { padding: '12px', fontSize: '12px', lineHeight: '16px', fontWeight: 500, color: '#353644', backgroundColor: '#f3f4fa', borderRadius: '12px' };
    }
    return {
      padding: '12px',
      fontSize: '12px',
      lineHeight: '16px',
      fontWeight: 500,
      color: '#353644',
      backgroundColor: '#fff',
      borderRadius: '0px',
    };
  };

  const onRowClick = props => {
    setSelectedRow(props.rowIndex);
    setUniversity(props.data.universityName);
  };

  useEffect(() => {
    if (gridApi) {
      // 행을 선택 했는지 안했는지 확인 할 수 있다.
      gridApi.redrawRows();
    }
  }, [gridApi, selectedRow]);

  return (
    <AgGridReactContainer>
      <AgGridReact onGridReady={params => setGridApi(params.api)} onRowClicked={onRowClick} rowData={rowData} columnDefs={columnDefs} getRowHeight={() => 48} getRowStyle={getRowStyle} headerHeight={48} groupHeaderHeight={48}></AgGridReact>
    </AgGridReactContainer>
  );
};

PassAnalysisUniversityLists.defaultProps = {
  data: [
    { group: '가', universityName: '서울대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '적정' },
    { group: '가', universityName: '고려대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '적정' },
    { group: '가', universityName: '인천대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '지원불가' },
    { group: '가', universityName: '강원대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '지원불가' },
    { group: '가', universityName: '충남대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '소신' },
    { group: '가', universityName: '충북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '소신' },
    { group: '가', universityName: '부산대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '안정' },
    { group: '가', universityName: '제주대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '안정' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '적정' },
    { group: '가', universityName: '경남대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '적정' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '지원불가' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '지원불가' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '소신' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '소신' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '안정' },
    { group: '가', universityName: '경북대학교 체육교육과', Zvalue: 2.12, applicationPossibility: '안정' },
  ],
};
export default PassAnalysisUniversityLists;

const AgGridReactContainer = styled.div`
  height: 656px;
  width: 100%;
  padding-left: 16px;
`;
