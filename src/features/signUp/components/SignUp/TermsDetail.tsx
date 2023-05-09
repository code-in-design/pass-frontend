import { DefaultButton } from '@/common/components/Button/Button';
import styled from '@emotion/styled';

const TermsDetail = () => {
  return (
    <Container>
      <Close src="/images/icons/close.svg" alt="close" />
      <Title>개인정보 처리 방침</Title>
      <Context>내용</Context>
      <ButtonWrapper>
        <CheckWrapper>
          <Check type="checkbox" name="" id="" />
          <CheckText>개인정보 처리방침을 모두 확인하였으며, 이에 동의함</CheckText>
        </CheckWrapper>
        <DefaultButton color="#fff">확인</DefaultButton>
      </ButtonWrapper>
    </Container>
  );
};

export default TermsDetail;

const Container = styled.div`
  width: 611px;
  padding: 32px;
  height: 480px;
  background-color: pink;
  border-radius: 24px;
`;

const Close = styled.img`
  padding: 5.43px;
  cursor: pointer;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #626474;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
`;

const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Check = styled.input``;

const CheckText = styled.label`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #353644;
`;
