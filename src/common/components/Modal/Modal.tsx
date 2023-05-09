import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ props }) => {
  const [isCSR, setIsCSR] = useState<boolean>(false);

  useEffect(() => {
    setIsCSR(true);
  }, []);

  if (typeof window === 'undefined') return <></>;
  if (!isCSR) return <></>;

  const portal = ReactDOM.createPortal(props, document.querySelector('#portal') as HTMLElement);

  return portal;
};
