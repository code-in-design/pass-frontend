import { Flex } from '@chakra-ui/react';
import { TotalUser } from '../components/TotalUser';
import { UserListWrapper } from '../components/UserListContainer';
import ExportIcon from '../../../../../public/images/icons/extract.svg';
import SearchIcon from '../../../../../public/images/icons/searchUser.svg';
import { ExportButton } from '../components/ExportButton';
import { UserSearch } from '../components/UserSearch';
import { UserTable } from '../components/UserTable';

export const UserListContainer = () => {
  const totalUserCount = 0;

  return (
    <UserListWrapper>
      <Flex justifyContent="space-between">
        <TotalUser count={totalUserCount} />
        <Flex alignItems="center" gap="16px">
          <ExportButton icon={<ExportIcon width="16px" height="16px" />} text="내보내기" />
          <UserSearch icon={<SearchIcon width="16px" height="16px" />} placeholder="사용자 검색" />
        </Flex>
      </Flex>
      <UserTable />
    </UserListWrapper>
  );
};
