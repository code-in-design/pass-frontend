import React from 'react';
import styled from '@emotion/styled';

interface Props {
  name: string;
  email: string;
  gender: string;
  grade: string;
}

const MyAccount = (props: Props) => {
  return (
    <Container>
      <Title>나의 계정</Title>
      <InputWrapper>
        <InputTitle>이름</InputTitle>
        <Input>{props.name}</Input>
      </InputWrapper>
      <InputWrapper>
        <InputTitle>이메일</InputTitle>
        <Input>{props.email}</Input>
      </InputWrapper>
      <Wrapper>
        <InputWrapper>
          <InputTitle>학년</InputTitle>
          <Input>{props.grade}</Input>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>성별</InputTitle>
          <Input>{props.gender}</Input>
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

MyAccount.defaultProps = {
  name: '홍길동',
  email: 'z-one@naver.com',
  gender: '남성',
  grade: '고3',
};

export default MyAccount;

const Container = styled.div``;

const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  min-width: 380px;
  max-width: 50%;
  display: flex;
  gap: 0 16px;
`;

const InputWrapper = styled.div`
  min-width: 182px;
  max-width: 50%;
  margin-bottom: 16px;
`;

const InputTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
`;

const Input = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  padding: 18px 24px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray2};
  background-color: ${props => props.theme.colors.gray6};
`;
