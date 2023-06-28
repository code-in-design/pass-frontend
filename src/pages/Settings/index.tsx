import React from 'react';
import SettingsLayout from '@/features/settings/components/SettingsLayout';
import SettingsContainer from '@/features/settings/containers/SettingsContainer';

const SettingsPage = () => {
  return (
    <SettingsLayout>
      <SettingsContainer />
    </SettingsLayout>
  );
};

export default SettingsPage;
