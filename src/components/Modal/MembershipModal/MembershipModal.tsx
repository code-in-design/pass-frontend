import ModalLayout from '@/components/Modal/ModalLayout';
import styled from '@emotion/styled';
import { useCallback, Dispatch, SetStateAction } from 'react';
import MembershipPriceCard from './MembershipPriceCard';
import MembershipPriceTable from './MembershipPriceTable';

export interface CardProps {
  name: string;
  price: number;
  colorText?: string;
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
    <ModalLayout onClose={closeModal} padding="32px 16px">
      <Title>합격할 준비 되었나요?</Title>
      <SubTitle>여러분에게 딱 맞는 플랜을 선택하세요!</SubTitle>
      <ScrollWrapper>
        <ContentWrapper>
          <Container>
            {props.data?.map((item, index) => (
              <MembershipPriceCard key={index} name={item.name} price={item.price} text={item.text} button={item.button} descriptions={item.descriptions} img={item.img} colorText={item.colorText} />
            ))}
          </Container>
          <MembershipPriceTable />
        </ContentWrapper>
      </ScrollWrapper>
    </ModalLayout>
  );
};

export default MembershipModal;

MembershipModal.defaultProps = {
  data: [
    {
      name: 'Basic',
      price: '0',
      text: 'Z-ONE을 시작하는 모든 분들께 제공되는 플랜입니다.',
      button: '평생 무료',
      descriptions: ['실시간 인기 대학 확인', '모의고사 및  수능 점수 입력', '대학별 환산 점수 계산 (실기 만점 기준)', '대학·학과 입시 정보 확인 및 세부 필터링', 'Z-지수 자동 계산', '지원 가능성 분석 (전체 대학·학과)'],
      img: '/images/icons/basicIcon.svg',
    },
    {
      name: 'Light',
      price: 39000,
      colorText: '1개 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['Basic의 모든 기능 +', '실기 기록 입력 및 수정 (3회)', '1개 대학 환산 총점 계산 (본인의 수능 + 실기 기록 + 내신)', '합격 확률 분석 (1개 대학)', '예상 지원자 수능 점수 및 실기 기록 분포 열람 (1개 대학)'],
      img: '/images/icons/lightIcon.svg',
    },
    {
      name: 'Premium',
      price: 89000,
      colorText: '전체 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['Light의 모든 기능 +', '전체 대학·학과 무제한 합격 분석', '전체 대학·학과 무제한 예상 지원자 분포 열람'],
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

const ScrollWrapper = styled.div`
  min-width: 936px;
  width: auto;
  height: 660px;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 840px;
  margin: 0 auto;
`;
