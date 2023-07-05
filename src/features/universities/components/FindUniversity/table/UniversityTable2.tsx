import React, { ReactNode, useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import styled from '@emotion/styled';
import 'ag-grid-community/styles/ag-grid.css';
import customThemes from './UniversityTable.module.css';
import UniversityInfoModalContainer from '../../../containers/UniversityInformationModalContainer';
import Search from '../../../../../../public/images/icons/search.svg';
import ArrowDown from '../../../../../../public/images/icons/arrowDropDown.svg';
import ArrowUp from '../../../../../../public/images/icons/arrowDropUp.svg';
import ArrowDoubleDown from '../../../../../../public/images/icons/arrowDropDoubleDown.svg';
import ArrowDoubleUp from '../../../../../../public/images/icons/arrowDropDoubleUp.svg';
import Hyphen from '../../../../../../public/images/icons/hyphen.svg';
import ExerciseIcon from './ExerciseIcon';
import TableHeaderTooltip from '@/components/Tooltip/TableHeaderTooltip';
import ApplicationPossibilityTag from '@/components/Tag/ApplicationPossibilityTag';
import { useFetchUniversityListQuery } from '@/features/universities/apis/universityApi';

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

const ImageRenderer = props => {
  const { value } = props;
  const id = props.data.id;
  return (
    <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
      {value?.map((icon, index) => {
        return (
          <ImageWrapper key={index}>
            <ExerciseIcon type={icon} id={id} />
          </ImageWrapper>
        );
      })}
    </div>
  );
};

const SearchImageRenderer = () => {
  return (
    <IconWrapper>
      <Search />
    </IconWrapper>
  );
};

const ContributionRenderer = props => {
  const { value } = props;
  return (
    <ContributionContainer>
      {value === '최하' && <ArrowDoubleDown />}
      {value === '하' && <ArrowDown />}
      {value === '중' && <Hyphen />}
      {value === '상' && <ArrowUp />}
      {value === '최상' && <ArrowDoubleUp />}
      <ContributionText type={value}>{value}</ContributionText>
    </ContributionContainer>
  );
};

const UniversityTable = (props: Props) => {
  const [rowData] = useState(props.data);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');
  const { data } = useFetchUniversityListQuery();

  const onRowClick = props => {
    setToggleModal(true);
    setSelectedData(props.data.universityName);
  };
  const onCellClicked = props => {
    if (props.colDef.field === '합격가능성보기') {
      console.log(props);
    }
  };

  const getRowStyle = params => {
    return { padding: '12px 16px' };
  };

  const [columnDefs, setColumnDefs] = useState([
    {
      field: 'id',
      headerName: '군',
      sortable: true,
      minWidth: 48,
      flex: 1,
      cellRenderer: props => {
        if (props.value !== undefined) {
          return props.value;
        } else {
          return <img src="https://www.ag-grid.com/example-assets/loading.gif" />;
        }
      },
      cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' },
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      minWidth: 100,
    };
  }, []);

  const onGridReady = useCallback(params => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(resp => resp.json())
      .then(data => {
        const dataSource = {
          rowCount: undefined,
          getRows: params => {
            // console.log('asking for ' + params.startRow + ' to ' + params.endRow);
            // At this point in your code, you would call the server.
            // To make the demo look real, wait for 500ms before returning
            setTimeout(function () {
              // take a slice of the total rows
              const rowsThisPage = data.slice(params.startRow, params.endRow);
              // if on or after the last page, work out the last row.
              let lastRow = -1;
              if (data.length <= params.endRow) {
                lastRow = data.length;
              }
              // call the success callback
              params.successCallback(rowsThisPage, lastRow);
            }, 500);
          },
        };
        params.api.setDatasource(dataSource);
      });
  }, []);

  const onGridReady2 = useCallback(params => {
    const { api } = params;
    const dataSource = {
      rowCount: undefined,
      getRows: params => {
        setTimeout(function () {
          // take a slice of the total rows
          // const rowsThisPage = data.slice(params.startRow, params.endRow);
          // // if on or after the last page, work out the last row.
          // let lastRow = -1;
          // if (data.length <= params.endRow) {
          //   lastRow = data.length;
          // }
          // // call the success callback
          // params.successCallback(rowsThisPage, lastRow);
        }, 500);
      },
    };
    api.setDatasource(dataSource);
  }, []);

  return (
    <>
      <AgGridWrapper className={customThemes.table}>
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowBuffer={0}
          rowSelection={'multiple'}
          rowModelType={'infinite'}
          cacheBlockSize={20}
          cacheOverflowSize={2}
          maxConcurrentDatasourceRequests={1}
          infiniteInitialRowCount={1000}
          maxBlocksInCache={10}
          onGridReady={onGridReady}
        ></AgGridReact>
      </AgGridWrapper>
      {toggleModal && <UniversityInfoModalContainer onClose={setToggleModal} data={selectedData} />}
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

const ContributionContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ContributionText = styled.span<{ type: string }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => (props.type === '최하' || props.type === '하') && '#45BFD9'};
  color: ${props => props.type === '중' && '#626474'};
  color: ${props => (props.type === '상' || props.type === '최상') && '#FF4444'};
`;

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  color: '#626474';
  margin: auto;
`;

const ImageWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
