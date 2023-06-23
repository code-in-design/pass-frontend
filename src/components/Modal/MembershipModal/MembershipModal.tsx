import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';
import { useState, useCallback, Dispatch, SetStateAction } from 'react';
import MembershipPriceCard from './MembershipPriceCard';
import MembershipPriceTable from './MembershipPriceTable';

export interface CardProps {
  name: string;
  price: number;
  colorText: string;
  text: string;
  button: string;
  descriptions: Array<string>;
  img: string;
}

interface Props {
  data?: Array<CardProps>;
  onClose: Dispatch<SetStateAction<boolean>>;
}

const MembershipModal = (props: Props) => {
  const closeModal = useCallback(() => {
    props.onClose(false);
  }, []);

  return (
    <ModalLayout onClose={closeModal}>
      <Title>합격할 준비 되었나요?</Title>
      <SubTitle>여러분에게 딱 맞는 플랜을 선택하세요!</SubTitle>
      <Container>
        {props.data?.map((item, index) => (
          <MembershipPriceCard key={index} name={item.name} price={item.price} text={item.text} button={item.button} descriptions={item.descriptions} img={item.img} colorText={item.colorText} />
        ))}
      </Container>
      <MembershipPriceTable />
    </ModalLayout>
  );
};

export default MembershipModal;

MembershipModal.defaultProps = {
  data: [
    {
      name: 'Basic',
      price: 0,
      colorText: '전체 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '평생 무료',
      descriptions: ['대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 '],
      img: '/images/icons/basicIcon.svg',
    },
    {
      name: 'Light',
      price: 39000,
      colorText: '1개 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 '],
      img: '/images/icons/lightIcon.svg',
    },
    {
      name: 'Premium',
      price: 89000,
      colorText: '전체 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 '],
      img: '/images/icons/premiumIcon.svg',
    },
  ],
};

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;