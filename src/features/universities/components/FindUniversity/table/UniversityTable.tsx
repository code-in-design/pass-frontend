import React, { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import { AgGridReact } from 'ag-grid-react';
import { GridApi } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import TableHeaderTooltip from '@/components/Tooltip/TableHeaderTooltip';
import ApplicationPossibilityTag from '@/components/Tag/ApplicationPossibilityTag';
import { useLazyFetchUniversityListQuery } from '@/features/universities/apis/universityApi';
import { UniversitiesModel } from '@/models/UniversitiesModel';
import UniversityInfoModalContainer from '../../../containers/UniversityInformationModalContainer';
import customThemes from './UniversityTable.module.css';
import { ExerciseRenderer } from './ExerciseRenderer';
import { SearchImageRenderer } from './SearchImageRenderer';
import { ContributionRenderer } from './ContributionRenderer';
import Search from '../../../../../../public/images/icons/search.svg';

interface Props {
  data: {
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
  }[];
}

const UniversityTable = (props: Props) => {
  const [rowData, setRowData] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedID, setSelectedID] = useState(0);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [getUniversityList] = useLazyFetchUniversityListQuery();

  const onRowClick = props => {
    setToggleModal(true);
    setSelectedID(props.data.id);
  };

  const onCellClicked = props => {
    if (props.colDef.field === '"passPossibility"') {
      setToggleModal(false);
    }
  };

  const onGridReady = params => {
    setGridApi(params.api);

    const pageSize = 10;
    const lastPage = 11;
    const dataSource = {
      getRows: async params => {
        const firstIndex = params.startRow;
        const pageNumber = Math.floor(firstIndex / pageSize);

        if (pageNumber === lastPage) {
          params.failCallback();
          return;
        }

        try {
          const result = await getUniversityList(pageNumber);
          if (result.isSuccess) {
            const universityList = result?.data?.map((item: any) => {
              const universityModel = new UniversitiesModel(item);
              const row = universityModel.getTableRowData();
              return row;
            });

            params.successCallback(universityList);
          }
        } catch (error) {
          console.error(error);
          params.failCallback();
        }
      },
    };
    params.api.setDatasource(dataSource);
  };

  const [columnDefs] = useState([
    { field: 'group', headerName: '군', sortable: true, minWidth: 48, flex: 1 },
    { field: 'universityName', headerName: '대학명', minWidth: 122, flex: 2.5 },
    { field: 'departmentName', headerName: '학과명', minWidth: 122, flex: 2.5 },
    {
      field: 'practicalType',
      headerName: '실기종목',
      cellRendererFramework: ExerciseRenderer,
      minWidth: 122,
      flex: 2.5,
    },
    {
      field: 'contribution',
      headerName: '기여도',
      children: [
        { field: 'test', headerName: '수능', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2 },
        { field: 'practical', headerName: '실기', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2 },
      ],
      headerGroupComponent: TableHeaderTooltip,
    },
    { field: 'conversionScore', headerName: '수능환산점수', minWidth: 120, flex: 2.5, headerComponent: TableHeaderTooltip },
    { field: 'Zvalue', headerName: 'Z-지수', sortable: true, minWidth: 104, flex: 2.1, headerComponent: TableHeaderTooltip },
    { field: 'applicationPossibility', headerName: '지원가능성', sortable: true, cellRendererFramework: ApplicationPossibilityTag, minWidth: 104, flex: 2.1 },
    { field: 'passPossibility', headerName: '합격가능성보기', cellRendererFramework: SearchImageRenderer, minWidth: 96, flex: 2 },
  ]);

  const gridOptions = {
    columnDefs: columnDefs,
    rowHeight: 48, // 모든 행의 높이를 50으로 지정
  };

  return (
    <>
      <AgGridWrapper className={customThemes.table}>
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
          groupHeaderHeight={48}
        ></AgGridReact>
      </AgGridWrapper>
      {toggleModal && <UniversityInfoModalContainer onClose={setToggleModal} data={selectedID} />}
    </>
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
`;
