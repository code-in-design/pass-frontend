import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Search from '../../../../../public/images/icons/search.svg';
import UniversityInfoModalContainer from '../../containers/UniversityInformationModalContainer';
import styled from '@emotion/styled';

interface Props {
  data: {}[];
}

const UniversityTable = (props: Props) => {
  const [rowData] = useState(props.data);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');
  const SearchImageRenderer = () => {
    return (
      <div style={{ width: '20px', height: '20px', color: '#626474' }}>
        <Search />
      </div>
    );
  };

  const ImageRenderer = props => {
    const { value } = props;
    return (
      <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
        {value.map((img, index) => {
          return <img key={index} src={`/images/icons/exerciseIcon/${img}.png`} alt={img} style={{ width: '16px', height: '16px' }} />;
        })}
      </div>
    );
  };

  const SupportabilityRenderer = props => {
    const { value } = props;
    return <Supportability type={value}>{value}</Supportability>;
  };

  const ContributionRenderer = props => {
    const { value } = props;
    return (
      <div>
        {value === '최하'}
        {value === '하'}
        {value === '중'}
        {value === '상'}
        {value === '최상'}
        <ContributionText type={value}>{value}</ContributionText>
      </div>
    );
  };

  const onRowClick = props => {
    setToggleModal(true);
    setSelectedData(props.data.대학명);
  };

  const [columnDefs] = useState([
    { field: '군', sortable: true },
    { field: '대학명' },
    { field: '학과명' },
    { field: '실기종목', cellRendererFramework: ImageRenderer },
    {
      headerName: '기여도',
      children: [
        { field: '수능', cellRendererFramework: ContributionRenderer },
        { field: '실기', cellRendererFramework: ContributionRenderer },
      ],
    },
    { field: '수능환산점수' },
    { field: 'Z지수', sortable: true },
    { field: '지원가능성', sortable: true, cellRendererFramework: SupportabilityRenderer },
    { field: '합격가능성보기', cellRendererFramework: SearchImageRenderer },
  ]);

  const gridOptions = {
    rowStyle: { padding: 0, textAlign: 'center' },
  };

  return (
    <>
      <div
        className="ag-theme-alpine"
        style={{
          height: 400,
          width: '100%',
        }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} gridOptions={gridOptions} onRowClicked={onRowClick}></AgGridReact>
      </div>
      {toggleModal && <UniversityInfoModalContainer onClose={setToggleModal} data={selectedData} />}
    </>
  );
};

export default UniversityTable;
UniversityTable.defaultProps = {
  data: [
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: <Search />,
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '적정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '서울대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '소신',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '고려대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '지원불가',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '연세대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      Z지수: 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
  ],
};

const Supportability = styled.div<{ type: string }>`
  width: 64px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.type === '안정' && '#4F8AFC'};
  color: ${props => props.type === '적정' && '#00A070'};
  color: ${props => props.type === '소신' && '#F66514'};
  color: ${props => props.type === '지원불가' && '#FF4444'};

  background-color: ${props => props.type === '안정' && 'rgba(79, 138, 252, 0.2)'};
  background-color: ${props => props.type === '적정' && 'rgba(30, 203, 151, 0.2)'};
  background-color: ${props => props.type === '소신' && 'rgba(255, 131, 62, 0.2);'};
  background-color: ${props => props.type === '지원불가' && 'rgba(254, 117, 117, 0.2);'};
`;

const ContributionText = styled.span<{ type: string }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.type === '최하' || ('하' && '#45BFD9')};
  color: ${props => props.type === '중' && '#626474'};
  color: ${props => props.type === '상' || ('최상' && '#FF4444')};
`;
