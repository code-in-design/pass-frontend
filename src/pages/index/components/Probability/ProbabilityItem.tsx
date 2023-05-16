import styled from '@emotion/styled';
import Image from 'next/image';

interface Props {
  img: string;
  name: string;
  title: string;
}

const ProbabilityItem = (props: Props) => {
  return (
    <ProbabilityItemContainer>
      <ProbabilityItemImg>
        <Image src={props.img} alt={props.title} fill />
      </ProbabilityItemImg>
      <ProbabilityItemTexts>
        <ProbabilityItemName>{props.name}</ProbabilityItemName>
        <ProbabilityItemTitle>{props.title}</ProbabilityItemTitle>
      </ProbabilityItemTexts>
      <ProbabilityItemArrowWrapper>
        <ProbabilityItemArrow src="/images/icons/arrowDown.svg" alt="arrow" />
      </ProbabilityItemArrowWrapper>
    </ProbabilityItemContainer>
  );
};

export default ProbabilityItem;

const ProbabilityItemContainer = styled.div`
  height: 81.33px;
  padding: 16px;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;

const ProbabilityItemImg = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

const ProbabilityItemTexts = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #191e25;
`;

const ProbabilityItemName = styled.div`
  font-weight: 500;
`;

const ProbabilityItemTitle = styled.div`
  font-weight: 700;
`;

const ProbabilityItemArrowWrapper = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  position: relative;
  cursor: pointer;
`;

const ProbabilityItemArrow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
`;
