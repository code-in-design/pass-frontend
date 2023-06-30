import React, { useState } from 'react';
import Notification from '../components/Notification';

const NotificationContainer = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = checked => {
    setChecked(checked);
  };

  return <Notification onChange={handleChange} checked={checked} />;
};

export default NotificationContainer;
