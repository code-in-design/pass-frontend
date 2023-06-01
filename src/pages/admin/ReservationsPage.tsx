import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';

interface Props {
  list: {
    is_next: boolean;
    is_prev: boolean;
    limit: number;
    page_cur: number;
    page_end: number;
    page_range: number;
    page_start: number;
    page_total: number;
    result: Array<object>;
    total: number;
  };
}

const AdminReservationsPage = (props: Props) => {
  console.log(props.list);
  const columnDefs = [{ field: 'ID' }, { field: '핸드폰번호' }, { field: '등록날짜' }];
  const [rowData] = useState([
    { ID: '1', 핸드폰번호: 'Celica', 등록날짜: '2023-06-01' },
    { ID: '2', 핸드폰번호: 'Mondeo', 등록날짜: '2023-06-01' },
    { ID: '3', 핸드폰번호: 'Boxter', 등록날짜: '2023-06-01' },
  ]);
  return (
    <AdminLayout>
      <div className="ag-theme-balham" style={{ height: '100%', width: '100%' }}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </AdminLayout>
  );
};

export default AdminReservationsPage;
