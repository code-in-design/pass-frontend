import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
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

interface Props {
  data: {
    군: string;
    대학명: string;
    학과명: string;
    실기종목: string[];
    기여도: string;
    수능: string;
    실기: string;
    수능환산점수: number;
    'Z-지수': number;
    지원가능성: string;
    합격가능성보기: ReactNode;
  }[];
}

const UniversityTable = (props: Props) => {
  const [rowData] = useState(props.data);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const ImageRenderer = props => {
    const { value } = props;
    return (
      <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
        {value.map((img, index) => {
          return <Image key={index} src={`/images/icons/exerciseIcon/${img}.png`} alt={img} width={16} height={16} />;
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

  const SupportabilityRenderer = props => {
    const { value } = props;
    return (
      <SupportabilityWrapper>
        <Supportability type={value}>{value}</Supportability>
      </SupportabilityWrapper>
    );
  };

  const onRowClick = props => {
    setToggleModal(true);
    setSelectedData(props.data.대학명);
  };
  const onCellClicked = props => {
    if (props.colDef.field === '합격가능성보기') {
      console.log(props);
    }
  };

  const getRowStyle = params => {
    return { padding: '12px 16px' };
  };

  const [columnDefs] = useState([
    { field: '군', sortable: true, minWidth: 48, flex: 1, justifyContent: 'center' },
    { field: '대학명', minWidth: 122, flex: 2.5 },
    { field: '학과명', minWidth: 122, flex: 2.5 },
    { field: '실기종목', cellRendererFramework: ImageRenderer, minWidth: 122, flex: 2.5 },
    {
      headerName: '기여도',
      children: [
        { field: '수능', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2 },
        { field: '실기', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2 },
      ],
    },
    { field: '수능환산점수', minWidth: 120, flex: 2.5 },
    { field: 'Z-지수', sortable: true, minWidth: 104, flex: 2.1 },
    { field: '지원가능성', sortable: true, cellRendererFramework: SupportabilityRenderer, minWidth: 104, flex: 2.1 },
    { field: '합격가능성보기', cellRendererFramework: SearchImageRenderer, minWidth: 96, flex: 2 },
  ]);

  return (
    <>
      <div
        className={customThemes.table}
        style={{
          height: 548,
          width: '100%',
        }}
      >
        <AgGridReact rowData={rowData} columnDefs={columnDefs} onRowClicked={onRowClick} onCellClicked={onCellClicked} getRowHeight={() => 48} getRowStyle={getRowStyle} headerHeight={48} groupHeaderHeight={48}></AgGridReact>
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
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: <Search />,
    },
    {
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '최하',
      실기: '하',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '적정',
      합격가능성보기: '검색',
    },
    {
      군: '가',
      대학명: '서울대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '10m달리기', '농구', '10m달리기', '농구', '10m달리기'],
      기여도: '',
      수능: '최상',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
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
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
  ],
};

const SupportabilityWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Supportability = styled.div<{ type: string }>`
  width: 64px;
  height: 24px;
  border-radius: 8px;
  padding: 4px 2px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
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
