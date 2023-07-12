import AdminLayout from '@/components/Layout/AdminLayout';
import RadioButtonGroupContainer from '@/features/admin/adminScoreSheet/containers/RadioButtonGroupContainer';
import ScoreSheetContainer from '@/features/admin/adminScoreSheet/containers/ScoreSheetContainer';
import VersionDropDownContainer from '@/features/admin/adminScoreSheet/containers/VersionDropDownContainer';
import ScoreSheetUploaderContainer from '@/features/admin/adminScoreSheet/containers/ScoreSheetUploaderContainer';
import DataUnifierOptionContainer from '@/features/admin/adminScoreSheet/components/DataUnifierOptionContainer';
import { Flex } from '@chakra-ui/react';
import UploadErrorMessage from '@/features/admin/adminScoreSheet/components/UploadErrorMessage';
import FormButtonGroupContainer from '@/features/admin/adminScoreSheet/containers/FormButtonGroupContainer';

const AdminScoreSheetPage = () => {
  return (
    <AdminLayout>
      <ScoreSheetContainer>
        <VersionDropDownContainer />
        <RadioButtonGroupContainer />
        <Flex flex="1" gap="24px">
          <ScoreSheetUploaderContainer />
          <DataUnifierOptionContainer />
        </Flex>
        <UploadErrorMessage />
        <FormButtonGroupContainer />
      </ScoreSheetContainer>
    </AdminLayout>
  );
};

export default AdminScoreSheetPage;
