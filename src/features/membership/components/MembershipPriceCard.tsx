import styled from '@emotion/styled';
import { CardProps } from './MembershipModal';

const MembershipPriceCard = (props: CardProps) => {
  return (
    <CardWrapper color={props.name}>
      <CardIcon src={props.img} alt={props.img} />
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
          <DescriptionItem key={`membership-price-card-${props.name}`}>
            <DescriptionItemIcon color={props.name}>&#x2713;</DescriptionItemIcon>
            <DescriptionText>{item}</DescriptionText>
          </DescriptionItem>
        ))}
      </CardDescription>
    </CardWrapper>
  );
};

export default MembershipPriceCard;

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
