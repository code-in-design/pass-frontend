import React from 'react';
import LandingPage from '../src/pages/index/landing';

interface Props {
  isMobile?: boolean;
}

const landing = (props: Props) => {
  return <LandingPage {...props} />;
};

export default landing;
