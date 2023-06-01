import LandingPage from '@/pages/index/landing';
import React from 'react';
import { useSetReservationsMutation } from '../apis/reservationApi';

const CreateReservationContainer = () => {
  const [setReservation] = useSetReservationsMutation();

  const onClickReservation = (phone: string) => {
    setReservation(phone);
  };
  const goToPhoneInput = () => {
    const element = document.querySelector('#phoneInput');
    if (element) element.scrollIntoView();
  };
  return <LandingPage onClickReservation={onClickReservation} goToPhoneInput={goToPhoneInput} />;
};

export default CreateReservationContainer;
