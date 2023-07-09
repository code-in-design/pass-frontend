import { ColDef, GridOptions } from 'ag-grid-community';
import { Table } from '../../AdminDashboard/components/Table';
import MembershipBadge from '@/components/MembershipBadge';
import TranscriptIcon from '../../../../../public/images/icons/description.svg';
import theme from '@/theme/theme';
import styled from '@emotion/styled';

interface Props<RowType> {
  columns: ColDef[];
  rows: RowType[];
  options: GridOptions;
}

export const UserTable = <RowType,>(props: Props<RowType>) => {
  return (
    <TableContainer>
      <Table<RowType> columns={props.columns} rows={props.rows} options={props.options} />
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
  preferredUniversity1: '한양대학교 스포츠사이언스',
  preferredUniversity2: '한양대학교 스포츠사이언스',
  preferredUniversity3: '한양대학교 스포츠사이언스',
};

const defaultRows: any = [];
for (let i = 0; i < 50; i++) {
  defaultRows.push(rowData);
}

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
      cellRendererFramework: () => <TranscriptIcon width="16px" height="16px" color={theme.colors.blue} />,
    },
    {
      headerName: '관심대학1',
      field: 'preferredUniversity1',
      flex: 1,
      minWidth: 106,
    },
    {
      headerName: '관심대학2',
      field: 'preferredUniversity2',
      flex: 1,
      minWidth: 106,
    },
    {
      headerName: '관심대학3',
      field: 'preferredUniversity3',
      flex: 1,
      minWidth: 106,
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
`;
