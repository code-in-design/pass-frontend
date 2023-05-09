import styled from '@emotion/styled';

interface Props {
  img: string;
  name: string;
  title: string;
}

const ProbabilityRightItem: React.FC<Props> = props => {
  return (
    <RightItem>
      <RightItemImg src={`/images/icons/${props.img}.svg`} alt={props.img} />
      <RightItemTexts>
        <RightItemName>{props.name}</RightItemName>
        <RightItemTitle>{props.title}</RightItemTitle>
      </RightItemTexts>
      <RightItemArrowWrapper>
        <RightItemArrow src="/images/icons/arrowDown.svg" alt="arrow" />
      </RightItemArrowWrapper>
    </RightItem>
  );
};

export default ProbabilityRightItem;

const RightItem = styled.div`
  height: 81.33px;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const RightItemImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  display: block;
`;

const RightItemTexts = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #191e25;
`;

const RightItemName = styled.div`
  font-weight: 500;
`;

const RightItemTitle = styled.div`
  font-weight: 700;
`;

const RightItemArrowWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  position: relative;
  cursor: pointer;
`;

const RightItemArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;
