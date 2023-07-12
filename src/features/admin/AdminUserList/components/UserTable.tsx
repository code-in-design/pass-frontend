import { ColDef, GridOptions } from 'ag-grid-community';
import { Table } from '../../AdminDashboard/components/Table';
import MembershipBadge from '@/components/MembershipBadge';
import TranscriptIcon from '../../../../../public/images/icons/description.svg';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import Link from 'next/link';
import { Flex } from '@chakra-ui/react';

interface Props<RowType> {
  columns: ColDef[];
  rows: RowType[];
  options: GridOptions;
}

export const UserTable = <RowType,>(props: Props<RowType>) => {
  return (
    <TableContainer>
      <Table<RowType> columns={props.columns} rows={props.rows} options={props.options} rowHeight={56} />
    </TableContainer>
  );
};

const rowData = {
  name: '한지훈',
  email: 'gks3628@naver.com',
  contact: '010-0000-0000',
  type: '학생',
  region: '천안시',
  membership: 'Basic',
  signUpDate: '23.11.15',
  transcript: '아이콘',
  preferredUniversity1: '한양대학교<br/> 스포츠사이언스',
  preferredUniversity2: '한양대학교<br/> 스포츠사이언스',
  preferredUniversity3: '한양대학교<br/> 스포츠사이언스',
};

const defaultRows = Array(50).fill(rowData);

UserTable.defaultProps = {
  columns: [
    {
      headerName: '이름',
      field: 'name',
      flex: 1,
      minWidth: 54,
    },
    {
      headerName: '이메일/계정',
      field: 'email',
      flex: 1,
      minWidth: 154,
    },
    {
      headerName: '연락처',
      field: 'contact',
      flex: 1,
      minWidth: 88,
    },
    {
      headerName: '회원유형',
      field: 'type',
      flex: 1,
      minWidth: 66,
    },
    {
      headerName: '지역',
      field: 'region',
      flex: 1,
      minWidth: 76,
    },
    {
      headerName: '멤버십',
      field: 'membership',
      flex: 1,
      minWidth: 72,
      cellRendererFramework: ({ value }) => {
        return <MembershipBadge membership={value} />;
      },
    },
    {
      headerName: '가입일',
      field: 'signUpDate',
      flex: 1,
      minWidth: 76,
    },
    {
      headerName: '성적표',
      field: 'transcript',
      flex: 1,
      minWidth: 60,
      cellRendererFramework: () => (
        <Link href="">
          <TranscriptIcon width="16px" height="16px" color={theme.colors.blue} />
        </Link>
      ),
    },
    {
      headerName: '관심대학1',
      field: 'preferredUniversity1',
      flex: 1,
      minWidth: 106,
      cellRendererFramework: ({ value }) => {
        return <Flex textAlign="center" dangerouslySetInnerHTML={{ __html: value }} />;
      },
    },
    {
      headerName: '관심대학2',
      field: 'preferredUniversity2',
      flex: 1,
      minWidth: 106,
      cellRendererFramework: ({ value }) => {
        return <Flex textAlign="center" dangerouslySetInnerHTML={{ __html: value }} />;
      },
    },
    {
      headerName: '관심대학3',
      field: 'preferredUniversity3',
      flex: 1,
      minWidth: 106,
      cellRendererFramework: ({ value }) => {
        return <Flex textAlign="center" dangerouslySetInnerHTML={{ __html: value }} />;
      },
    },
  ],
  rows: defaultRows,
  options: {
    suppressMovableColumns: true,
  },
};

const TableContainer = styled.div`
  flex: 1;
  height: 100%;
  widht: 100%;

  // 테이블 테두리 제거
  .ag-root-wrapper {
    border: none;
    border-radius: 12px 12px 0 0;
  }

  // 헤더 테두리 변경
  .ag-header {
    border-bottom: 1px solid ${theme.colors.gray4};
  }

  // 헤더 셀 패딩 제거
  .ag-header-cell {
    padding: 0;
  }

  // 헤더 폰트 스타일링
  .ag-header-cell-label {
    justify-content: center;
    font-size: 12px;
    font-family: Pretendard Bold;
    line-height: 16px;
    letter-spacing: -0.24px;
  }

  // 헤더 배경
  .ag-header-viewport {
    background-color: ${theme.colors.white};
  }

  // 바디 고정 높이 제거
  .ag-center-cols-clipper[role='presentation'] {
    min-height: 0;
  }

  // 로우 각 셀 패딩 제거, 가운데 정렬, 폰트 변경
  .ag-row-even .ag-cell,
  .ag-row-odd .ag-cell {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    font-size: 12px;
    font-family: Pretendard Regular;
    color: ${theme.colors.black};
    line-height: 16px;
    letter-spacing: -0.24px;
  }

  // 로우 포커싱 배경 색 스타일링
  .ag-row-hover {
    &::before {
      background-color: #f8f8fc;
    }
  }

  // 로우 테두리 제거
  .ag-row-even,
  .ag-row-odd {
    border: none;
    background-color: ${theme.colors.white};
  }

  // 바디 로우 첫 번째 컬럼 폰트 변경
  .ag-center-cols-container .ag-cell:first-child {
    font-family: Pretendard SemiBold;
    line-height: 16px;
    letter-spacing: -0.24px;
  }
`;
