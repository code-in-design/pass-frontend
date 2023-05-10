import { DefaultButton } from '@/common/components/Button';
import styled from '@emotion/styled';

interface Props {
  onCloseClick: (index: number) => void;
}

const MarketingDetail: React.FC<Props> = props => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => props.onCloseClick(2)} />
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onCloseClick(2)} />
        <Title>이용약관 동의</Title>
        <Context>
          ### 수집 및 이용 목적 Z-ONE이 제공하는 다양한 프로모션 및 이벤트 등 다양한 정보를 문자, 이메일로 받아보실 수 있습니다. 일부 서비스의 경우, 개별 서비스에 대해 별도 수신 동의를 받을 수 있으며, 이때에도 수신 동의에 대해 별도로 안내하고 동의를
          받습니다. ### 수집방법/수집항목/보유 및 이용기간 | 수집 방법 | 수집 항목 | 보유 및 이용기간 | | --- | --- | --- | | 회원 가입 시 | 이름, 회원 구분, 휴대폰번호, 이메일 주소, 마케팅 수신 여부 | 회원 탈퇴 또는 동의 철회시까지 | | 서비스 이용
          및 계약 이행 | 이름, 이메일, 핸드폰번호, 합격 예측 서비스 이용기록(구매내역, 결제내역, 결제수단 등) | 회원 탈퇴 또는 동의 철회시까지 | | 서비스 이용 과정 | 서비스 이용 기록, 저속 로그, IP, 쿠키, 온라인식별자(광고ID 및 이용자 고유식별자),
          단말기 정보 | 회원 탈퇴 또는 동의 철회시까지 | 개인정보의 수집 이용에 동의를 거부할 수 있으며, 동의 거부시에도 서비스 이용에 제한은 없으나 일부 서비스 이용 및 각종 광고, 이벤트 등의 혜택정보 제공이 제한될 수 있습니다.
        </Context>
        <DefaultButton color="#fff" onClick={() => props.onCloseClick(2)}>
          확인
        </DefaultButton>
      </Container>
    </ModalWrapper>
  );
};

export default MarketingDetail;

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
  margin-bottom: 24px;
`;

const ContextTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: #353644;
`;
