import LandingPage from '@/pages/index/landing';
import React from 'react';
import { useSetReservationsMutation } from '../apis/reservationApi';

const CreateReservationContainer = ({ isMobile }) => {
  const [setReservation] = useSetReservationsMutation();

  const onClickReservation = (phone: string) => {
    setReservation(phone);
  };

  return <LandingPage onClickReservation={onClickReservation} isMobile={isMobile} />;
};

export default CreateReservationContainer;
