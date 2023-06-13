import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const UniversityTable = () => {
  const [rowData] = useState([
    { 군: 'Toyota', 대학명: 'Celica', 실기종목: 35000 },
    { 군: 'Ford', 대학명: 'Mondeo', 실기종목: 32000 },
    { 군: 'Porsche', 대학명: 'Boxster', 실기종목: 72000 },
  ]);

  const [columnDefs] = useState([{ field: '군' }, { field: '대학명' }, { field: '실기종목' }, { field: '기여도' }, { field: '수능 환산 점수' }, { field: 'Z-지수' }, { field: '지원가능성' }, { field: '합격 가능성보기' }]);
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: 400,
        width: '100%',
      }}
    >
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
};

export default UniversityTable;
UniversityTable.defaultProps = {
  data: [
    { 군: '가', 대학명: '한양대학교', 실기종목: ['농구', '사이드스탭', '농구', '사이드스탭', '농구', '사이드스탭'], 기여도: '', 수능환산점수: 145.87, Z지수: 2.12, 지원가능성: '안정' },
    { 군: '가', 대학명: '한양대학교', 실기종목: [], 기여도: '', 수능환산점수: 145.87, Z지수: 2.12, 지원가능성: '적정' },
    { 군: '가', 대학명: '한양대학교', 실기종목: [], 기여도: '', 수능환산점수: 145.87, Z지수: 2.12, 지원가능성: '소신' },
    { 군: '가', 대학명: '한양대학교', 실기종목: [], 기여도: '', 수능환산점수: 145.87, Z지수: 2.12, 지원가능성: '지원불가' },
  ],
};
