import React from 'react';
import SettingsLayout from '@/features/settings/components/SettingsLayout';
import MyAccountContainer from '@/features/settings/containers/MyAccountContainer';
import NotificationContainer from '@/features/settings/containers/NotificationContainer';
import MembershipSettingContainer from '@/features/settings/containers/MembershipSettingContainer';
import WithdrawalContainer from '@/features/settings/containers/WithdrawalContainer';
import { useRouter } from 'next/router';
import { SERVICE_PATH } from '../../constants/path';

const SettingsPage = () => {
  const router = useRouter();
  const path = router.asPath;

  return (
    <SettingsLayout>
      {path === SERVICE_PATH.SETTINGS_MYACCOUNT && <MyAccountContainer />}
      {path === SERVICE_PATH.SETTINGS_ALARM && <NotificationContainer />}
      {path === SERVICE_PATH.SETTINGS_MEMBERSHIP && <MembershipSettingContainer />}
      {path === SERVICE_PATH.SETTINGS_WITHDRAWL && <WithdrawalContainer />}
    </SettingsLayout>
  );
};

export default SettingsPage;
