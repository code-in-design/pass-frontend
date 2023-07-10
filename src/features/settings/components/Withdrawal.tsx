import React, { useState } from 'react';
import styled from '@emotion/styled';
import Warning from '../../../../public/images/icons/warning.svg';
import { Checkbox } from '@chakra-ui/react';

const Withdrawal = () => {
  const [withdrawalButtonDisabled, setWithdrawalButtonDisabled] = useState(false);

  return (
    <Container>
      <Title>회원 탈퇴</Title>
      <SecondTitle>정말 탈퇴하시겠어요?</SecondTitle>
      <WarningBox>
        <WarningTitle>
          <Warning />
          지금 탈퇴하시면,
        </WarningTitle>
        <WarningText>① 구매한 멤버십이 모두 사라져요.</WarningText>
        <WarningText>② 작성한 수능 점수, 실기 점수가 모두 사라져 추후에 동일 계정으로 가입하더라도 다시 점수를 입력해야 해요.</WarningText>
      </WarningBox>

      <Checkbox
        onChange={e => {
          setWithdrawalButtonDisabled(e.target.checked);
        }}
      >
        <AgreeText>회원 탈퇴 유의사항을 확인하였으며 이에 동의합니다.</AgreeText>
      </Checkbox>

      <ReasonBox>
        <ReasonTitle>떠나시려는 이유를 알려주세요</ReasonTitle>
        <Reason placeholder="탈퇴 사유를 적어주세요" />
      </ReasonBox>

      <WithdrawlButton id="withdrawalComplete" type="button" disabled={withdrawalButtonDisabled}>
        회원 탈퇴
      </WithdrawlButton>
    </Container>
  );
};

export default Withdrawal;

const Container = styled.div`
  color: ${props => props.theme.colors.grayBlack};
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 60px;
`;

const SecondTitle = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const WarningBox = styled.div`
  width: 100%;
  height: 116px;
  border-radius: 16px;
  padding: 16px;
  background-color: rgba(255, 68, 68, 0.1);
  margin-bottom: 32px;
`;

const WarningTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0 4px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.red};
  margin-bottom: 16px;
`;

const WarningText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
  :last-of-type {
    margin-bottom: 0;
  }
`;

const AgreeText = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray2};
`;

const ReasonBox = styled.div`
  padding-top: 32px;
  border-top: 1px solid ${props => props.theme.colors.gray4};
`;

const ReasonTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Reason = styled.textarea`
  width: 100%;
  height: 160px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  resize: none;
  outline: none;
  padding: 16px 24px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray2};
`;

const WithdrawlButton = styled.button`
  width: 312px;
  height: 56px;
  border-radius: 16px;
  padding: 18px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray1};
  align-self: end;
  background-color: ${props => props.theme.colors.gray4};
  cursor: default;
  :disabled {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.blue};
    cursor: pointer;
  }
`;
