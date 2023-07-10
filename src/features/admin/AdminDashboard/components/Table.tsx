import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridOptions } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export interface TableProps<RowType> {
  columns: ColDef[];
  options: GridOptions;
  rows: RowType[];
  rowHeight: number;
}

export const Table = <RowType,>(props: TableProps<RowType>) => {
  const { rows, columns, options, rowHeight } = props;
  return (
    <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
      <AgGridReact rowData={rows} columnDefs={columns} getRowHeight={() => rowHeight} gridOptions={options}></AgGridReact>
    </div>
  );
};
