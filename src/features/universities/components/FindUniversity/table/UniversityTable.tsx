import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import { RowClickedEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import TableHeaderTooltip from '@/components/Tooltip/TableHeaderTooltip';
import ApplicationPossibilityTag from '@/components/Tag/ApplicationPossibilityTag';
import { useLazyFetchUniversityListQuery } from '@/features/universities/apis/universityApi';
import { UniversitiesModel } from '@/models/UniversitiesModel';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { PracticalCellRenderer } from './PracticalCellRenderer';
import { SearchImageCellRenderer } from './SearchImageCellRenderer';
import { ImpactLevelCellRenderer } from './ImpactLevelCellRenderer';
import Search from '../../../../../../public/images/icons/search.svg';

export interface UniversityTableRowData {
  id: number;
  group: string;
  universityName: string;
  departmentName: string;
  practicalType: string[];
  contribution: string;
  test: string;
  practical: string;
  conversionScore: number;
  Zvalue: number;
  applicationPossibility: string;
  passPossibility: ReactNode;
}

interface Props {
  data: UniversityTableRowData[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setDataId: React.Dispatch<React.SetStateAction<number>>;
}

const UniversityTable = (props: Props) => {
  const [getUniversityList] = useLazyFetchUniversityListQuery();

  // onCellClicked보다 먼저 호출됨
  const onRowClick = (row: RowClickedEvent) => {
    props.setDataId(row.data.id);
  };

  const onCellClicked = cell => {
    if (cell.colDef.field === 'passPossibility') {
      return props.setIsModalOpen(false);
    }

    props.setIsModalOpen(true);
  };

  const onGridReady = useInfiniteScroll({ api: getUniversityList, model: UniversitiesModel });

  const [columnDefs] = useState([
    { field: 'group', headerName: '군', sortable: true, minWidth: 48, flex: 1 },
    { field: 'universityName', headerName: '대학명', minWidth: 122, flex: 2.5 },
    { field: 'departmentName', headerName: '학과명', minWidth: 122, flex: 2.5 },
    {
      field: 'practicalType',
      headerName: '실기종목',
      cellRendererFramework: PracticalCellRenderer,
      minWidth: 122,
      flex: 2.5,
    },
    {
      field: 'contribution',
      headerName: '기여도',
      children: [
        { field: 'test', headerName: '수능', cellRendererFramework: ImpactLevelCellRenderer, minWidth: 61, flex: 1.2 },
        { field: 'practical', headerName: '실기', cellRendererFramework: ImpactLevelCellRenderer, minWidth: 61, flex: 1.2 },
      ],
      headerGroupComponent: TableHeaderTooltip,
    },
    { field: 'conversionScore', headerName: '수능환산점수', minWidth: 120, flex: 2.5, headerComponent: TableHeaderTooltip },
    { field: 'Zvalue', headerName: 'Z-지수', sortable: true, minWidth: 104, flex: 2.1, headerComponent: TableHeaderTooltip },
    { field: 'applicationPossibility', headerName: '지원가능성', sortable: true, cellRendererFramework: ApplicationPossibilityTag, minWidth: 104, flex: 2.1 },
    { field: 'passPossibility', headerName: '합격가능성보기', cellRendererFramework: SearchImageCellRenderer, minWidth: 96, flex: 2 },
  ]);

  const gridOptions = {
    columnDefs: columnDefs,
    rowHeight: 48, // 모든 행의 높이를 50으로 지정
  };

  return (
    <AgGridWrapper>
      <AgGridReact
        gridOptions={gridOptions}
        rowModelType="infinite"
        onGridReady={onGridReady}
        onRowClicked={onRowClick}
        onCellClicked={onCellClicked}
        paginationPageSize={10}
        cacheBlockSize={10}
        maxBlocksInCache={30}
        infiniteInitialRowCount={10}
        headerHeight={48}
        suppressMovableColumns={true} // cell의 위치이동 비활성화
      ></AgGridReact>
    </AgGridWrapper>
  );
};

UniversityTable.defaultProps = {
  data: [
    {
      id: 1,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠사이언스전공',
      practicalType: ['농구', '달리기10m', '셔틀런', '싯업', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: <Search />,
    },
    {
      id: 2,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠사이언스전공',
      practicalType: ['농구', '달리기10m', '셔틀런', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '최하',
      practical: '하',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '적정',
      passPossibility: '검색',
    },
    {
      id: 3,
      group: '가',
      universityName: '서울대학교',
      departmentName: '스포츠사이언스전공',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '최상',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '소신',
      passPossibility: '검색',
    },
    {
      id: 4,
      group: '가',
      universityName: '고려대학교',
      departmentName: '스포츠사이언스전공',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '지원불가',
      passPossibility: '검색',
    },
    {
      id: 5,
      group: '가',
      universityName: '연세대학교',
      departmentName: '스포츠사이언스전공',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 1,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 6,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 7,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 8,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 9,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
    {
      id: 10,
      group: '가',
      universityName: '한양대학교',
      departmentName: '스포츠응용산업학과',
      practicalType: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      contribution: '',
      test: '중',
      practical: '상',
      conversionScore: 145.87,
      Zvalue: 2.12,
      applicationPossibility: '안정',
      passPossibility: '검색',
    },
  ],
};
export default UniversityTable;

const AgGridWrapper = styled.div`
  height: 548px;
  width: 100%;
  .ag-header-row {
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    color: #353644 !important;
  }

  .ag-header-cell-label {
    justify-content: center;
  }

  div[col-id='practicalType'] {
    justify-content: left !important;
  }

  .ag-ltr .ag-cell {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ag-row {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    color: #353644 !important;
  }

  .ag-row:hover {
    cursor: pointer;
    background-color: #f3f4fa;
  }

  .ag-header-cell-comp-wrapper {
    justify-content: center;
  }
`;
