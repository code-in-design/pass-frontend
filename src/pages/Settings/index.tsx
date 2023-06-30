import React from 'react';
import SettingsLayout from '@/features/settings/components/SettingsLayout';
import MyAccountContainer from '@/features/settings/containers/MyAccountContainer';
import NotificationContainer from '@/features/settings/containers/NotificationContainer';
import MembershipSettingContainer from '@/features/settings/containers/MembershipSettingContainer';
import WithdrawalContainer from '@/features/settings/containers/WithdrawalContainer';
import { useRouter } from 'next/router';

const SettingsPage = () => {
  const router = useRouter();
  const { menu } = router.query;

  return (
    <SettingsLayout>
      {menu === '0' && <MyAccountContainer />}
      {menu === '1' && <NotificationContainer />}
      {menu === '2' && <MembershipSettingContainer />}
      {menu === '3' && <WithdrawalContainer />}
    </SettingsLayout>
  );
};

export default SettingsPage;
