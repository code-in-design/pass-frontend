import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions, RowClassParams, CellStyle } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Box } from '@chakra-ui/react';
import customStyles from '../styles/Table.module.css';

export const Table = () => {
  const data = [
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
  ];

  const orderItemsTotal = data.reduce((sum, row) => sum + row.orderItems, 0);
  const orderTotal = data.reduce((sum, row) => sum + row.orderTotal, 0);
  const NumberOfSamplesTotal = data.reduce((sum, row) => sum + row.NumberOfSamples, 0);

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
    { headerName: '주문수', field: 'orderItems', flex: 1, cellStyle: { textAlign: 'center' } },
    { headerName: '매출액', field: 'orderTotal', flex: 1, cellStyle: { textAlign: 'center' } },
    {
      headerName: '유입표본수',
      field: 'NumberOfSamples',
      flex: 1,
      cellStyle: params => {
        if (params.data && params.data.total) {
          return { color: 'rgba(107, 119, 248, 1)', textAlign: 'center' };
        }
        return { textAlign: 'center' };
      },
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
    <Box className={customStyles['table']} width="100%">
      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact rowData={data} columnDefs={columnDefs} gridOptions={gridOptions} getRowStyle={() => getRowStyle} getRowHeight={() => 32}></AgGridReact>
      </div>
    </Box>
  );
};
