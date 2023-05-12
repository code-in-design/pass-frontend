import ModalLayout from '@/common/components/Modal/ModalLayout';
import styled from '@emotion/styled';

interface CardProps {
  name: string;
  price: number;
  colorText: string;
  text: string;
  button: string;
  descriptions: Array<string>;
  img: string;
}

interface Props {
  onClickClose: () => void;
  data?: Array<CardProps>;
}

const Card = (props: CardProps) => {
  return (
    <CardWrapper color={props.name}>
      <CardIcon src={`/images/icons/${props.img}.svg`} alt={props.img} />
      <MembershipName>{props.name}</MembershipName>
      <MembershipPrice>
        <PriceIcon>&#x20a9;</PriceIcon>
        {props.price}
      </MembershipPrice>
      <MembershipText>
        <ColorText color={props.name}>{props.colorText}</ColorText>
        {props.text}
      </MembershipText>
      <MembershipButton color={props.name}>{props.button}</MembershipButton>
      <CardDescription>
        <DescriptionTitle>{props.name}의 기본 기능 +</DescriptionTitle>
        {props.descriptions.map(item => (
          <DescriptionItem>
            <DescriptionItemIcon color={props.name}>&#x2713;</DescriptionItemIcon>
            <DescriptionText>{item}</DescriptionText>
          </DescriptionItem>
        ))}
      </CardDescription>
    </CardWrapper>
  );
};

const MembershipModal = (props: Props) => {
  return (
    <ModalLayout onCloseClick={props.onClickClose}>
      <Title>합격할 준비 되었나요?</Title>
      <SubTitle>여러분에게 딱 맞는 플랜을 선택하세요!</SubTitle>
      <Container>
        {props.data?.map(item => (
          <Card key={`membership-${item.name}`} name={item.name} price={item.price} text={item.text} button={item.button} descriptions={item.descriptions} img={item.img} colorText={item.colorText} />
        ))}
      </Container>
      <Table>
        <THead>
          <THeadTr>
            <THedaTd></THedaTd>
            <THedaTd color="Basic">Basic</THedaTd>
            <THedaTd color="Light">Light</THedaTd>
            <THedaTd color="Premium">Premium</THedaTd>
          </THeadTr>
        </THead>
        <TBody>
          <TBodyTr>
            <TBodyTd>실시간 인기 대학 확인</TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
          </TBodyTr>
          <TBodyTr>
            <TBodyTd>모의고사·수능 성적 입력</TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/X.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
          </TBodyTr>
          <TBodyTr>
            <TBodyTd>대학별 환산 점수 계산</TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/X.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/X.svg" />
            </TBodyTd>
            <TBodyTd>
              <TableIcon src="/images/icons/circle.svg" />
            </TBodyTd>
          </TBodyTr>
        </TBody>
      </Table>
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
      img: 'basicIcon',
    },
    {
      name: 'Light',
      price: 39000,
      colorText: '1개 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 '],
      img: 'lightIcon',
    },
    {
      name: 'Premium',
      price: 89000,
      colorText: '전체 체육 대학·학과',
      text: '를 무제한 합격 예측 할 수 있습니다.',
      button: '지금 시작하기',
      descriptions: ['대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 ', '대학 찾기 · 세부 필터링 '],
      img: 'premiumIcon',
    },
  ],
};

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  color: #191e25;
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  color: #626474;
  margin-bottom: 32px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

//Card styles
const CardWrapper = styled.div`
  width: calc(100% / 3);
  min-width: 269.33px;
  height: 488px;
  padding: 24px;
  border: 1px solid;
  border-color: ${props => (props.color === 'Basic' ? '#e4e6f0' : props.color === 'Light' ? '#60C8DE' : '#6B77F8')};
  border-radius: 24px;
  margin-right: 16px;
  &:last-of-type {
    margin-right: 0;
  }
`;

const CardIcon = styled.img`
  width: 40px;
  height: 40px;
  display: block;
  margin-bottom: 16px;
`;

const MembershipName = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: #353644;
  margin-bottom: 4px;
`;
const MembershipPrice = styled.div`
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: #191e25;
`;

const PriceIcon = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #b7b9c9;
  margin-right: 6px;
`;
const MembershipText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #626474;
  margin-bottom: 24px;
`;
const ColorText = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => (props.color === 'Basic' ? '#9395A6' : props.color === 'Light' ? '#60C8DE' : '#6B77F8')};
`;
const MembershipButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 16px 10px;
  border-radius: 16px;
  background-color: ${props => (props.color === 'Basic' ? '#e4e6f0' : props.color === 'Light' ? '#60C8DE' : '#6B77F8')};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => (props.color === 'Basic' ? '#9395A6' : '#fff')};
  margin-bottom: 24px;
`;

const CardDescription = styled.div`
  height: 172px;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: #f8f8fc;
`;
const DescriptionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #353644;
  margin-bottom: 14px;
`;
const DescriptionItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const DescriptionItemIcon = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => (props.color === 'Basic' ? '#9395A6' : props.color === 'Light' ? '#60C8DE' : '#6B77F8')};
  margin-right: 9.36px;
`;
const DescriptionText = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #626474;
`;

//table
const Table = styled.table`
  width: 100%;
  margin-top: 32px;
`;

const THead = styled.thead``;

const THeadTr = styled.tr`
  border-bottom: 1px solid #626474;
`;

const THedaTd = styled.td`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => (props.color === 'Basic' ? '#9395A6' : props.color === 'Light' ? '#60C8DE' : '#6B77F8')};
  padding-bottom: 16px;
  width: 182px;
  text-align: center;
  &:first-of-type {
    text-align: left;
    width: 326.5px;
  }
  &:last-of-type {
    padding-right: 53.5px;
  }
`;
const TBody = styled.tbody``;

const TBodyTr = styled.tr`
  border-bottom: 1px solid #f3f4fa;
`;

const TBodyTd = styled.td`
  padding: 4px 0;
  font-size: 14px;
  line-height: 32px;
  font-weight: 600;
  color: #6f6f6f;
  text-align: center;
  &:first-of-type {
    padding-left: 16px;
    text-align: left;
  }
  &:last-of-type {
    padding-right: 53.5px;
  }
`;

const TableIcon = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
`;
