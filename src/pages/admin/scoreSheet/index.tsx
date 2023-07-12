import AdminLayout from '@/components/Layout/AdminLayout';
import RadioButtonGroup from '@/features/admin/adminScoreSheet/components/RadionButtonGroup';
import VersionDropDown, { OptionType } from '@/features/admin/adminScoreSheet/components/VersionDropDown';
import RadioButtonGroupContainer from '@/features/admin/adminScoreSheet/containers/RadiobuttonGroupContainer';
import ScoreSheetContainer from '@/features/admin/adminScoreSheet/containers/ScoreSheetContainer';
import VersionDropDownContainer from '@/features/admin/adminScoreSheet/containers/VersionDropDownContainer';
import useScoreSheetForm from '@/features/admin/adminScoreSheet/hooks/useScoreSheetForm';
import { find } from 'lodash';
import { useForm } from 'react-hook-form';

const AdminScoreSheetPage = () => {
  const { register, setValue, watch } = useScoreSheetForm();

  return (
    <AdminLayout>
      <ScoreSheetContainer>
        <VersionDropDownContainer />
        <RadioButtonGroupContainer />
      </ScoreSheetContainer>
    </AdminLayout>
  );
};

export default AdminScoreSheetPage;
