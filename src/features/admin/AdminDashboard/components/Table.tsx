import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

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

  const gridOptions: GridOptions = {
    domLayout: 'autoHeight',
    suppressMovableColumns: true,
  };

  const columnDefs: ColDef[] = [
    { headerName: '일자', field: 'orderDate', flex: 1, cellStyle: { fontSize: '12px', justifyContent: 'center' } },
    { headerName: '주문수', field: 'orderItems', flex: 1, cellStyle: { textAlign: 'center' } },
    { headerName: '매출액', field: 'orderTotal', flex: 1, cellStyle: { textAlign: 'center' } },
    { headerName: '유입표본수', field: 'NumberOfSamples', flex: 1, cellStyle: { textAlign: 'center' } },
  ];

  const getRowStyle = () => {
    return {};
  };

  return (
    <div className="Table" style={{ height: '100%', width: '100%' }}>
      <div className="ag-theme-alpine">
        <AgGridReact rowData={data} columnDefs={columnDefs} gridOptions={gridOptions} getRowStyle={getRowStyle}></AgGridReact>
      </div>
    </div>
  );
};
