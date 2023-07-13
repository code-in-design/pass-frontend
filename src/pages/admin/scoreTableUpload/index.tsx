import AdminLayout from '@/components/Layout/AdminLayout';
import ScoreTableUploadContainer from '@/features/admin/adminScoreTableUpload/containers/ScoreTableUploadContainer';

const AdminScoreTableUploadPage = () => {
  return (
    <AdminLayout>
      <ScoreTableUploadContainer />
    </AdminLayout>
  );
};

export default AdminScoreTableUploadPage;
