import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import styled from '@emotion/styled';
import theme from '@/theme/theme';

export interface TableProps<RowType> {
  columns: ColDef[];
  options: GridOptions;
  rows: RowType[];
}

export const Table = <RowType,>(props: TableProps<RowType>) => {
  const { rows, columns, options } = props;
  return (
    <AgiGridWrapper>
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact rowData={rows} columnDefs={columns} getRowHeight={() => 32} gridOptions={options}></AgGridReact>
      </div>
    </AgiGridWrapper>
  );
};

const AgiGridWrapper = styled.div`
  width: 100%;

  // 바디 고정 높이 제거
  .ag-center-cols-clipper[role='presentation'] {
    min-height: 0;
  }

  // 로우 각 셀 패딩 제거, 가운데 정렬, 폰트 변경
  .ag-row-even .ag-cell,
  .ag-row-odd .ag-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 12px;
    font-family: Pretendard Regular;
    line-height: 16px;
    letter-spacing: -0.24px;
  }

  // 로우 테두리 제거
  .ag-row-even,
  .ag-row-odd {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .ag-center-cols-clipper {
  }
  // 헤더 배경
  .ag-header-viewport {
    background-color: ${theme.colors.gray6};
  }

  .ag-header ag-pivot-off {
  }

  // 헤더 가운데 정렬
  .ag-header-cell-label {
    justify-content: center;
    font-size: 14px;
    font-family: Pretendard Bold;
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  // 테이블 테두리 제거
  .ag-root-wrapper {
    border: none;
    border-radius: 12px;
  }

  // 합계 테두리 변경
  .ag-floating-bottom {
    border-top: 1px solid ${theme.colors.gray4};
    background: #fff;
  }

  // 헤더 테두리 변경
  .ag-header {
    border-bottom: 1px solid ${theme.colors.gray4};
    line-height: 20px;
    letter-spacing: -0.28px;
  }

  // 바디 로우 첫 번째 컬럼 폰트 변경
  .ag-center-cols-container [aria-colindex='1'] {
    font-family: Pretendard SemiBold;
    line-height: 16px;
    letter-spacing: -0.24px;
  }

  // 합계 폰트 변경
  .ag-floating-bottom-container .ag-cell {
    font-size: 14px;
    font-family: Pretendard SemiBold;
    line-height: 16px;
    letter-spacing: -0.28px;
  }

  // 합계 2,3,4 열 폰트 색상 변경
  .ag-floating-bottom-container [aria-colindex='2'],
  .ag-floating-bottom-container [aria-colindex='3'],
  .ag-floating-bottom-container [aria-colindex='4'] {
    color: ${theme.colors.blue};
  }
`;
