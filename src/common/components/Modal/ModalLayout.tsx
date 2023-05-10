import { DefaultButton } from '@/common/components/Button';
import styled from '@emotion/styled';

interface Props {
  onCloseClick: (index?: number) => void;
  title: string;
  content: string;
}

const ModalLayout: React.FC<Props> = props => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => props.onCloseClick()} />
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onCloseClick()} />
        <Title>{props.title}</Title>
        <Context>{props.content}</Context>
        <ButtonWrapper>
          <CheckWrapper>
            <Check type="checkbox" name="agree" id="agree" />
            <CheckText htmlFor="agree">이용약관을 모두 확인하였으며, 이에 동의함</CheckText>
          </CheckWrapper>
          <DefaultButton color="#fff">확인</DefaultButton>
        </ButtonWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default ModalLayout;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  animation: fadeIn 0.4s;
`;

const ModalOutside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  width: 611px;
  padding: 32px;
  height: 480px;
  background-color: #fff;
  border-radius: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Close = styled.img`
  padding: 5.43px;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 32px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #191e25;
  margin-bottom: 24px;
`;

const Context = styled.div`
  width: 534px;
  height: 252px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #626474;
  overflow-y: auto;
`;

const ContextTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #353644;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

const Check = styled.input`
  margin-right: 6.5px;
  width: 15px;
  height: 15px;
  position: relative;
  &:checked {
    accent-color: #60c8de;
  }
`;

const CheckText = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #353644;
`;
