import AdminLayout from '@/components/Layout/AdminLayout';
import RadioButtonGroupContainer from '@/features/admin/adminScoreSheet/containers/RadioButtonGroupContainer';
import ScoreSheetContainer from '@/features/admin/adminScoreSheet/containers/ScoreSheetContainer';
import VersionDropDownContainer from '@/features/admin/adminScoreSheet/containers/VersionSelectionContainer';
import ScoreSheetUploaderContainer from '@/features/admin/adminScoreSheet/containers/ScoreSheetUploaderContainer';
import DataUnifierOptionContainer from '@/features/admin/adminScoreSheet/containers/VersionToApplyTestScoreSheetContainer';
import { Flex } from '@chakra-ui/react';
import FormButtonGroupContainer from '@/features/admin/adminScoreSheet/containers/FormButtonGroupContainer';

const AdminScoreSheetPage = () => {
  return (
    <AdminLayout>
      <ScoreSheetContainer />
    </AdminLayout>
  );
};

export default AdminScoreSheetPage;
