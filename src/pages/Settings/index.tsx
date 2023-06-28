import React from 'react';
import SettingsLayout from '@/features/settings/components/SettingsLayout';
import MyAccountContainer from '@/features/settings/containers/MyAccountContainer';
import NotificationContainer from '@/features/settings/containers/NotificationContainer';

const SettingsPage = () => {
  return (
    <SettingsLayout>
      <MyAccountContainer />
      {/* <NotificationContainer /> */}
    </SettingsLayout>
  );
};

export default SettingsPage;
