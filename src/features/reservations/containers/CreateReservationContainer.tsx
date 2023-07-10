import { ApplyForm4 } from 'code-in-design-system';
import React from 'react';
import { useSetReservationsMutation } from '../apis/reservationApi';

const CreateReservationContainer = ({ isMobile }) => {
  const [setReservation] = useSetReservationsMutation();

  const onClickReservation = (phone: string) => {
    setReservation(phone);
  };

  return (
    <ApplyForm4
      backgroundColor="rgb(235, 236, 255)"
      buttonProps={{
        buttonType: 'solid',
        size: 'md',
        content: '사전 예약하기',
        backgroundColor: 'var(--PASS_Primary_Color, #6b77f8)',
        color: 'rgb(255, 255, 255)',
        isLoading: false,
        isDisabled: false,
        isFullWidth: false,
        onClick: phone => onClickReservation(phone),
      }}
      descriptionProps={{
        content: '📌 연락처는 문자 메시지 발송에만 사용되며, 문자 발송 후 파기하여 저장하지 않아요.',
        size: 'sm',
        color: 'var(--Cool_Gray_500, #697077)',
        fontWeight: 'normal',
        isMobile: isMobile,
        isVisible: true,
        isFullWidth: false,
        textAlign: 'left',
      }}
      inputProps={{
        isActiveDeleteIcon: false,
        isFullWidth: true,
        placeholder: {
          color: '#A2A9B0',
          text: '연락처를 작성해주세요.',
        },
        onChange: phone => phone,
      }}
      subTitleProps={{
        size: 'sm',
        content: '연락처를 남겨주시면, 정식 오픈 시에 제일 먼저 출시 완료 문자를 보내드릴게요.',
        color: 'var(--Cool_Gray_500, #697077)',
        fontWeight: 'normal',
        isMobile: isMobile,
        isVisible: true,
        isFullWidth: false,
        textAlign: 'center',
      }}
      titleProps={{
        size: 'lg',
        content: '제일 먼저 서비스를 이용하세요!',
        highlight: {
          color: '#9EA6FF',
          height: isMobile ? 18 : 28,
          isVisible: true,
        },
        color: 'var(--Cool_Gray_800, #21272A)',
        fontWeight: 'bold',
        isMobile: isMobile,
        isVisible: true,
        isFullWidth: false,
        textAlign: 'center',
      }}
      isMobile={isMobile}
    />
  );
};

export default CreateReservationContainer;
