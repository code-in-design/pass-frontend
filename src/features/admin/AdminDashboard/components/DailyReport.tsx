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
  // options: GridOptions;
}

export const DailyReport = (props: DailyReportProps) => {
  const { columns, rows } = props;

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
      <Table<RowType> columns={columns} rows={rows} options={options} />
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
