import { ADMIN_PATH } from '@/constants/path';
import { GetServerSideProps } from 'next';

const UserManagementPage = () => {};

export default UserManagementPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: false,
      destination: ADMIN_PATH.USERLIST,
    },
  };
};
