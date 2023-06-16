import React, { ReactNode, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { Portal, Tooltip } from '@chakra-ui/react';
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
import HelpOutline from '../../../../../../public/images/icons/helpOutline.svg';
import MyTooltip from '@/components/Tooltip';

interface Props {
  data: {
    id: number;
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

const TooltipRenderer = props => {
  const { displayName } = props;
  let label;
  const contribution = (
    <div>
      수능기여도 : 반영 비율과 상관없이 합격을 위한 수능이 차지하는 실질변별력이에요 <br />
      실기 기여도 : 반영 비율과 상관없이 합격을 위한 실기가 차지하는 실질변별력이에요
    </div>
  );
  const conversionScore = '실기 만점을 기준으로 환산된 총 환산 점수에요!';
  const zValue = (
    <div>
      대학별 반영 과목과 반영 비율을 기준으로 등급 을 환산한 수치로, 숫자가 낮을 수록 더 유리하다고 생각하면 돼요. <br />
      예를들어, 국어2등급, 영어 3등급, 탐구 1과목 3등급인 학생의 국어 40% 영어 20% 탐구 상위 1과목 40%를 반영하는 학과에서의 Z-지수는 2x0.4 + 3x0.2 + 3x0.4 = 2.6이에요
    </div>
  );
  if (displayName === '기여도') label = contribution;
  if (displayName === '수능환산점수') label = conversionScore;
  if (displayName === 'Z-지수') label = zValue;

  return (
    // <>
    //   <div data-tooltip-id={displayName} style={{ display: 'flex', alignItems: 'center', gap: '0 2px' }}>
    //     {displayName}
    //     <HelpOutline />
    //   </div>
    //   <MyTooltip id={displayName} width="371px">
    //     {displayName === '기여도' && contribution}
    //     {displayName === '수능환산점수' && conversionScore}
    //     {displayName === 'Z-지수' && zValue}
    //   </MyTooltip>
    // </>
    <>
      {displayName}
      <Tooltip hasArrow label={label} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
        <div>
          <HelpOutline />
        </div>
      </Tooltip>
    </>
  );
};

const UniversityTable = (props: Props) => {
  const [rowData] = useState(props.data);
  const [toggleModal, setToggleModal] = useState(false);
  const [selectedData, setSelectedData] = useState('');

  const ImageRenderer = props => {
    const { value } = props;
    const id = props.data.id;
    return (
      <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
        {value.map((icon, index) => {
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
    { field: '군', sortable: true, minWidth: 48, flex: 1, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: '대학명', minWidth: 122, flex: 2.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: '학과명', minWidth: 122, flex: 2.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: '실기종목', cellRendererFramework: ImageRenderer, minWidth: 122, flex: 2.5, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    {
      field: '기여도',
      children: [
        { field: '수능', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
        { field: '실기', cellRendererFramework: ContributionRenderer, minWidth: 61, flex: 1.2, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
      ],
      headerGroupComponent: TooltipRenderer,
    },
    { field: '수능환산점수', minWidth: 120, flex: 2.5, headerComponent: TooltipRenderer, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
    { field: 'Z-지수', sortable: true, minWidth: 104, flex: 2.1, headerComponent: TooltipRenderer, cellStyle: { justifyContent: 'center', display: 'flex', alignItems: 'center', height: '24px' } },
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
      id: 1,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '달리기10m', '셔틀런', '싯업', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: <Search />,
    },
    {
      id: 2,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '달리기10m', '셔틀런', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '최하',
      실기: '하',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '적정',
      합격가능성보기: '검색',
    },
    {
      id: 3,
      군: '가',
      대학명: '서울대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '최상',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '소신',
      합격가능성보기: '검색',
    },
    {
      id: 4,
      군: '가',
      대학명: '고려대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '지원불가',
      합격가능성보기: '검색',
    },
    {
      id: 5,
      군: '가',
      대학명: '연세대학교',
      학과명: '스포츠사이언스전공',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 1,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 6,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 7,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 8,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 9,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
      기여도: '',
      수능: '중',
      실기: '상',
      수능환산점수: 145.87,
      'Z-지수': 2.12,
      지원가능성: '안정',
      합격가능성보기: '검색',
    },
    {
      id: 10,
      군: '가',
      대학명: '한양대학교',
      학과명: '스포츠응용산업학과',
      실기종목: ['농구', '달리기10m', '농구', '달리기10m', '농구', '달리기10m'],
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

const ImageWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
