import React, { useState } from 'react';
import styled from '@emotion/styled';
import PaymentTable from './PaymentTable';
import BookmarkColor from '../../../../public/images/icons/bookmarkColor.svg';
import SimpleTicket from '../../../../public/images/icons/simpleTicket.svg';
import MembershipModal from '@/components/Modal/MembershipModal/MembershipModal';

const MembershipSetting = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Container>
        <Title>멤버십 설정</Title>
        <div>
          <SectionTitle>현재 사용중인 멤버십</SectionTitle>
          <MembershipWrapper>
            <Wrapper>
              <IconWrapper>
                <BookmarkColor />
              </IconWrapper>
              <div>
                <Membership>Basic</Membership>
                <MembershipText>Z-ONE을 시작하는 모든 분들께 제공되는 플랜입니다.</MembershipText>
              </div>
            </Wrapper>
            <MembershipButton onClick={() => setOpenModal(true)}>멤버십 안내</MembershipButton>
          </MembershipWrapper>
        </div>

        <SecondSection>
          <BoxWrapper>
            <SectionTitle>합격 분석 열람권</SectionTitle>
            <SecondContainer color="blue">
              <TicketWrapper color="blue">
                <SimpleTicket />
                5개
              </TicketWrapper>
              보유중
            </SecondContainer>
          </BoxWrapper>
          <BoxWrapper>
            <SectionTitle>실기 기록 변경권</SectionTitle>
            <SecondContainer color="green">
              <TicketWrapper color="green">
                <SimpleTicket />
                0개
              </TicketWrapper>
              보유중
            </SecondContainer>
          </BoxWrapper>
        </SecondSection>

        <PaymentSection>
          <SectionTitle>결제 내역</SectionTitle>
          <PaymentTable />
        </PaymentSection>
      </Container>
      {openModal && <MembershipModal onClose={setOpenModal} />}
    </>
  );
};

export default MembershipSetting;

const Container = styled.div`
  color: ${props => props.theme.colors.grayBlack};
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 0 8px;
`;

const SectionTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const MembershipWrapper = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 24px;
  padding: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

const Membership = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

const MembershipText = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
`;

const MembershipButton = styled.div`
  width: 128px;
  height: 44px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.blue};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #fff;
  padding: 12px 28px;
  cursor: pointer;
`;

const SecondSection = styled.div`
  margin: 24px 0;
  display: flex;
`;

const BoxWrapper = styled.div`
  flex: 1;
`;

const SecondContainer = styled.div<{ color: string }>`
  display: flex;
  gap: 0 8px;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.04em;
  color: ${props => (props.color === 'blue' ? props.theme.colors.blue : props.theme.colors.green)};
`;

const TicketWrapper = styled.div<{ color: string }>`
  display: flex;
  gap: 0 8px;
  font-size: 20px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: -0.04em;
  background-color: ${props => (props.color === 'blue' ? 'rgba(107, 119, 248, 0.1)' : 'rgba(96, 200, 222, 0.1)')};
  padding: 12px;
  border-radius: 8px;
`;

const PaymentSection = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${props => props.theme.colors.gray4};
`;
