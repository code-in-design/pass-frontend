import { Tooltip } from '@chakra-ui/react';
import { AgGridReact } from 'ag-grid-react';
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import HelpOutline from '../../../../public/images/icons/helpOutline.svg';
import 'ag-grid-community/styles/ag-grid.css';
import { GridApi } from 'ag-grid-community';

interface Props {
  data: {
    군: string;
    '대학/학과': string;
    'Z-지수': number;
    지원가능성: string;
  }[];
}

const TooltipRenderer = props => {
  const { displayName } = props;
  const zValue = (
    <div>
      대학별 반영 과목과 반영 비율을 기준으로 등급 을 환산한 수치로, 숫자가 낮을 수록 더 유리하다고 생각하면 돼요. <br />
      예를들어, 국어2등급, 영어 3등급, 탐구 1과목 3등급인 학생의 국어 40% 영어 20% 탐구 상위 1과목 40%를 반영하는 학과에서의 Z-지수는 2x0.4 + 3x0.2 + 3x0.4 = 2.6이에요
    </div>
  );

  return (
    <div style={{ fontSize: '12px', fontWeight: 700, lineHeight: '16px', color: '#353644', display: 'flex', gap: '0 2px' }}>
      {displayName}
      <Tooltip hasArrow label={zValue} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
        <div>
          <HelpOutline />
        </div>
      </Tooltip>
    </div>
  );
};

const SupportabilityRenderer = props => {
  const { value } = props;
  return (
    <SupportabilityWrapper>
      <Supportability type={value}>{value}</Supportability>
    </SupportabilityWrapper>
  );
};

const PassAnalysisUniversityLists = (props: Props) => {
  const [gridApi, setGridApi] = useState<any>(null);
  const [rowData] = useState(props.data);
  const [columnDefs] = useState([
    { field: '군', minWidth: 11, flex: 1, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: '대학/학과', minWidth: 172, flex: 2.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: 'Z-지수', minWidth: 46, flex: 2.1, headerComponent: TooltipRenderer, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: '지원가능성', cellRendererFramework: SupportabilityRenderer, minWidth: 64, flex: 2.1 },
  ]);
  const [selectedRow, setSelectedRow] = useState(null);

  const getRowStyle = params => {
    if (params.rowIndex === selectedRow) {
      return { padding: '16px', fontSize: '12px', lineHeight: '16px', fontWeight: 500, color: '#353644', backgroundColor: '#f3f4fa', borderRadius: '12px' };
    }
    return {
      padding: '16px',
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
  };

  useEffect(() => {
    if (gridApi) {
      gridApi.redrawRows();
    }
  }, [gridApi, selectedRow]);

  return (
    <div
      style={{
        height: 656,
        width: '100%',
      }}
    >
      <AgGridReact onGridReady={params => setGridApi(params.api)} onRowClicked={onRowClick} rowData={rowData} columnDefs={columnDefs} getRowHeight={() => 48} getRowStyle={getRowStyle} headerHeight={48} groupHeaderHeight={48}></AgGridReact>
    </div>
  );
};

export default PassAnalysisUniversityLists;
PassAnalysisUniversityLists.defaultProps = {
  data: [
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '적정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '적정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '지원불가' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '지원불가' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '소신' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '소신' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '안정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '안정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '적정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '적정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '지원불가' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '지원불가' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '소신' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '소신' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '안정' },
    { 군: '가', '대학/학과': '경북대학교 체육교육과', 'Z-지수': 2.12, 지원가능성: '안정' },
  ],
};

const SupportabilityWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Supportability = styled.div<{ type: string }>`
  width: 64px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  font-weight: 600;

  color: ${props => props.type === '안정' && '#4F8AFC'};
  color: ${props => props.type === '적정' && '#00A070'};
  color: ${props => props.type === '소신' && '#F66514'};
  color: ${props => props.type === '지원불가' && '#FF4444'};

  background-color: ${props => props.type === '안정' && 'rgba(79, 138, 252, 0.2)'};
  background-color: ${props => props.type === '적정' && 'rgba(30, 203, 151, 0.2)'};
  background-color: ${props => props.type === '소신' && 'rgba(255, 131, 62, 0.2);'};
  background-color: ${props => props.type === '지원불가' && 'rgba(254, 117, 117, 0.2);'};
`;
