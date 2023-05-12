import styled from '@emotion/styled';
import ModalLayout from '@/common/components/Modal/ModalLayout';
import { StyledSelect } from '@/common/components/Select/Select.styles';

interface Props {
  onClickClose: () => void;
}

const FinalUnivModal = (props: Props) => {
  return (
    <ModalLayout onCloseClick={props.onClickClose}>
      <Container>
        <Title>최종 지원 대학 선정</Title>

        <SubTitle>최종적으로 지원한 대학을 선택하고 실기 기록에 따른 합격 확률을 계속 살펴볼 수 있어요!</SubTitle>
        <Info>
          <InfoImg src="/images/icons/infoBlue.svg" alt="info" />
          <InfoText>실기 기록 변경 횟수는 제한되어 있습니다.</InfoText>
        </Info>
        <SelectSection>
          <Select>
            <SelectText>가군 지원대학</SelectText>
            <StyledSelect className="react-select-container" classNamePrefix="react-select" placeholder="대학·학과 선택" />
          </Select>
          <Select>
            <SelectText>나군 지원대학</SelectText>
            <StyledSelect className="react-select-container" classNamePrefix="react-select" placeholder="대학·학과 선택" />
          </Select>
          <Select>
            <SelectText>다군 지원대학</SelectText>
            <StyledSelect className="react-select-container" classNamePrefix="react-select" placeholder="대학·학과 선택" />
          </Select>
        </SelectSection>
        <Button>선택 완료</Button>
      </Container>
    </ModalLayout>
  );
};

export default FinalUnivModal;

const Container = styled.div`
  width: 432px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  color: #191e25;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #626474;
  margin-bottom: 8px;
`;

const Info = styled.div`
  height: 44px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: rgba(107, 119, 248, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const InfoImg = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 10px;
`;
const InfoText = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #6b77f8;
`;

const SelectSection = styled.div`
  margin-bottom: 24px;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const SelectText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #626474;
  margin-right: 32px;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  color: #fff;
  background-color: #6b77f8;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
