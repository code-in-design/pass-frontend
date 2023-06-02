import React, { useState } from 'react';
import { AgGridReact, AgGridReactProps } from 'ag-grid-react';
import AdminLayout from '@/components/AdminLayout/AdminLayout';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

interface Props {
  rowData: [
    {
      ID: number;
      핸드폰번호: string;
      등록날짜: string;
    },
  ];
}

const ReservationList = (props: Props) => {
  const columnDefs: any = [
    { field: 'ID', flex: 1, sortable: true, sort: 'desc' },
    { field: '핸드폰번호', flex: 1, sortable: true },
    { field: '등록날짜', flex: 1, sortable: true },
  ];

  return (
    <AdminLayout>
      <div className="ag-theme-balham" style={{ height: '100%', width: '100%' }}>
        <AgGridReact columnDefs={columnDefs} rowData={props.rowData} />
      </div>
    </AdminLayout>
  );
};

export default ReservationList;
