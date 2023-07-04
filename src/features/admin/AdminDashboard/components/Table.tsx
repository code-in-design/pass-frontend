import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, RowClassParams, CellStyle } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Box } from '@chakra-ui/react';
import customStyles from '../styles/Table.module.css';
import styled from '@emotion/styled';

interface Props {
  data: {
    orderDate: string;
    orderItems: number;
    orderTotal: number;
    NumberOfSamples: number;
  }[];
}

export const Table = (props: Props) => {
  const { data } = props;
  const orderItemsTotal = data.reduce((sum, row) => sum + row.orderItems, 0);
  const orderTotal = data.reduce((sum, row) => sum + row.orderTotal, 0);
  const NumberOfSamplesTotal = data.reduce((sum, row) => sum + row.NumberOfSamples, 0);

  const customizeCell = params => {
    if (params.data && params.data.total) {
      return { color: 'rgba(107, 119, 248, 1)', textAlign: 'center', fontFamily: 'Pretendard SemiBold', fontSize: 14 };
    }
    return { textAlign: 'center', fontFamily: 'Pretendard Regular' };
  };

  const gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    suppressMovableColumns: true,
    pinnedBottomRowData: [
      {
        orderDate: '최근 7일 합계',
        orderItems: orderItemsTotal,
        orderTotal: orderTotal,
        NumberOfSamples: NumberOfSamplesTotal,
        total: true,
      },
    ],
  };
  const columnDefs: ColDef[] = [
    { headerName: '일자', field: 'orderDate', flex: 1, minWidth: 96, cellStyle: { fontSize: '12px', justifyContent: 'center', textAlign: 'center', fontFamily: 'Pretendard SemiBold' } },
    { headerName: '주문수', field: 'orderItems', flex: 1, cellStyle: params => customizeCell(params) },
    { headerName: '매출액', field: 'orderTotal', flex: 1, cellStyle: params => customizeCell(params) },
    {
      headerName: '유입표본수',
      field: 'NumberOfSamples',
      flex: 1,
      minWidth: 96,
      cellStyle: params => customizeCell(params),
    },
  ];

  const getRowStyle = params => {
    console.log(params);
    if (params.data.total) {
      return { fontSize: '14px' };
    }
    return {
      padding: '',
    };
  };

  return (
    <AgiGridWrapper>
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact rowData={data} columnDefs={columnDefs} gridOptions={gridOptions} getRowHeight={() => 32}></AgGridReact>
      </div>
    </AgiGridWrapper>
  );
};

Table.defaultProps = {
  data: [
    {
      orderDate: '2023-03-24',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-25',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-26',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-26',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-26',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-26',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
    {
      orderDate: '2023-03-26',
      orderItems: 3,
      orderTotal: 300000,
      NumberOfSamples: 1230,
    },
  ],
};

const AgiGridWrapper = styled.div`
  width: 100%;

  .ag-header-row-column {
    border-radius: 12px 12px 0px 0px;
    border-bottom: 1px solid var(--gray-4, #e4e6f0);
    background: var(--gray-6, #f8f8fc);
  }

  .ag-header-cell-label {
    font-size: 14px;
    font-family: Pretendard Bold;
    justify-content: center;
  }

  .ag-cell {
    padding: 0;
    font-size: 12px;
  }

  .ag-floating-bottom-container {
    font-size: 14px;
  }

  .ag-row-even,
  .ag-row-odd {
    border: none;
    background-color: rgba(255, 255, 255, 1);
  }

  .ag-floating-bottom {
    border-top: 1px solid var(--gray-4, #e4e6f0);
    background: #fff;
  }

  .ag-root-wrapper {
    border: none;
    border-radius: 12px 12px 0 0;
  }
`;
