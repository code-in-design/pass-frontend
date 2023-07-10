import styled from '@emotion/styled';
import { Table } from './Table';
import { ColDef, GridOptions, ValueFormatterParams } from 'ag-grid-community';
import theme from '@/theme/theme';
import { useMemo } from 'react';
import { sumBy } from 'lodash';

interface RowType {
  orderDate: string;
  orderCount: number;
  salesRevenue: number;
  sampleCount: number;
}

interface DailyReportProps {
  columns: ColDef[];
  rows: RowType[];
  rowHeight: number;
  // options: GridOptions;
}

export const DailyReport = (props: DailyReportProps) => {
  const { columns, rows, rowHeight } = props;

  const totalOrders = useMemo(() => sumBy(rows, 'orderCount'), [rows]);
  const totalSales = useMemo(() => sumBy(rows, 'salesRevenue'), [rows]);
  const totalSamples = useMemo(() => sumBy(rows, 'sampleCount'), [rows]);

  const options: GridOptions = {
    headerHeight: 36,
    domLayout: 'autoHeight',
    suppressMovableColumns: true,
    pinnedBottomRowData: [
      {
        orderDate: '최근 7일 합계',
        orderCount: totalOrders,
        salesRevenue: totalSales,
        sampleCount: totalSamples,
        total: true,
      },
    ],
  };

  return (
    <DailyReportWrapper>
      <Title>일자별 요약</Title>
      <TableWrapper>
        <Table<RowType> columns={columns} rows={rows} options={options} rowHeight={rowHeight} />
      </TableWrapper>
    </DailyReportWrapper>
  );
};

DailyReport.defaultProps = {
  columns: [
    {
      headerName: '일자',
      field: 'orderDate',
      flex: 1,
      minWidth: 96,
    },
    {
      headerName: '주문수',
      field: 'orderCount',
      flex: 1,
      minWidth: 96,
      valueFormatter: (params: ValueFormatterParams) => params.value.toLocaleString(),
    },
    {
      headerName: '매출액',
      field: 'salesRevenue',
      flex: 1,
      minWidth: 96,
      valueFormatter: (params: ValueFormatterParams) => params.value.toLocaleString() + '원',
    },
    {
      headerName: '유입표본수',
      field: 'sampleCount',
      flex: 1,
      minWidth: 96,
      valueFormatter: (params: ValueFormatterParams) => params.value.toLocaleString(),
    },
  ],
  rows: [
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
    {
      orderDate: '2023-03-03',
      orderCount: 3,
      salesRevenue: 300000,
      sampleCount: 1230,
    },
  ],
  rowHeight: 32,
};

const DailyReportWrapper = styled.div`
  display: flex;
  padding: 24px;
  width: 439px;
  min-width: fit-content;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  background: ${theme.colors.white};
`;

const Title = styled.span`
  color: ${theme.colors.grayBlack};
  font-size: 20px;
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;

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
    background-color: ${theme.colors.white};
  }

  // 헤더 배경
  .ag-header-viewport {
    background-color: ${theme.colors.gray6};
  }

  // 헤더 셀 스타일
  .ag-header-cell {
    padding: 0;
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
  .ag-center-cols-container .ag-cell:first-child {
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

  // 합계 첫 번째 열 제외하고 폰트 색상 변경
  .ag-floating-bottom-container .ag-cell:not(:first-child) {
    color: ${theme.colors.blue};
  }
`;
