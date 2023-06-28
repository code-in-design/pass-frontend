import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import AdminLayout from '@/features/admin/AdminLayout/AdminLayout';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-balham.css';
import styled from '@emotion/styled';

interface Props {
  rowData: [
    {
      ID: number;
      핸드폰번호: string;
      등록날짜: string;
    },
  ];
  nextPageChange: () => void;
  prevPageChange: () => void;
  limit: number;
}

const ReservationList = (props: Props) => {
  const columnDefs: any = [
    { field: 'ID', flex: 1, sortable: true, sort: 'desc' },
    { field: '핸드폰번호', flex: 1, sortable: true },
    { field: '등록날짜', flex: 1, sortable: true },
  ];

  return (
    <AdminLayout>
      <ButtonWrapper>
        <Button onClick={props.nextPageChange}>이전</Button>
        <Button onClick={props.prevPageChange}>다음</Button>
      </ButtonWrapper>
      <div className="ag-theme-balham" style={{ height: '100%', width: '100%' }}>
        <AgGridReact columnDefs={columnDefs} rowData={props.rowData} pagination={true} paginationPageSize={props.limit} suppressPaginationPanel={true} />
      </div>
    </AdminLayout>
  );
};

export default ReservationList;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 60px;
  height: 40px;
  margin-right: 20px;
  background-color: #626474;
  color: #fff;
`;
