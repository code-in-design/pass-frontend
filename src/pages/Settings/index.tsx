import React from 'react';
import SettingsLayout from '@/features/settings/components/SettingsLayout';
import MyAccountContainer from '@/features/settings/containers/MyAccountContainer';
import NotificationContainer from '@/features/settings/containers/NotificationContainer';
import MembershipSettingContainer from '@/features/settings/containers/MembershipSettingContainer';
import WithdrawalContainer from '@/features/settings/containers/WithdrawalContainer';
import { useRouter } from 'next/router';

const SettingsPage = () => {
  const router = useRouter();
  const { settingMenu } = router.query;

  return (
    <SettingsLayout>
      {settingMenu === '0' && <MyAccountContainer />}
      {settingMenu === '1' && <NotificationContainer />}
      {settingMenu === '2' && <MembershipSettingContainer />}
      {settingMenu === '3' && <WithdrawalContainer />}
    </SettingsLayout>
  );
};

export default SettingsPage;
