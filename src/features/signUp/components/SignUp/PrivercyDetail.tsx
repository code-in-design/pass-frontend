import { DefaultButton } from '@/common/components/Button';
import styled from '@emotion/styled';

interface Props {
  onCloseClick: (index: number) => void;
}

const PrivercyDetail: React.FC<Props> = props => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => props.onCloseClick(1)} />
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onCloseClick(1)} />
        <Title>이용약관 동의</Title>
        <Context>
          ### 수집하는 개인정보 항목 / 수집 및 이용 목적 / 보유 및 이용기간 | 수집 방법 | 수집항목 | 수집 및 이용목적 | 보유 및 이용기간 | | --- | --- | --- | --- | | 회원가입 | (필수항목) 이름, 회원 구분, 휴대폰번호, 이메일 주소, 비밀번호, 기본 주소
          | 회원 관리 | 회원 탈퇴시 | | 회원가입 | 성명, 이메일, 성별 : 회원가입시 수집 SNS 서비스사로부터 제공받은 정보는 회원가입 단계에서만 이용하며, 회원가입이 진행되지 않는 경우 즉시 파기합니다. 또한, 당사의 회원가입 절차를 통해 고객이 직접
          동의를 수행한 경우에 한하여 개인정보를 보관하며, 아이디와 비밀번호는 수집하지 않습니다. | SNS 이용자 식별 (네이버, 카카오) | 회원 탈퇴시 | | 합격예측 서비스 이용 | (필수항목) 수험생 이름, 회원 구분, 학년, 성별,
          성적(모의평가성적/내신성적/수능성적) | 합격 예측 | 회원 탈퇴시 | | 서비스 이용과정에서 생성 | 서비스 이용기록, 접속 로그, IP, 쿠키, 온라인식별자(광고ID, UUID 등), 단말기 정보(제조사, OS종류, 버전) | 이상행위 탐지 및 서비스 개선을 위한 분석,
          이용자의 관심, 기호, 성향 추청을 통한 맞춤형 콘텐츠 및 서비스 제공 | 회원 탈퇴시 | 단, 전자상거래 등에서의 소비자보호에 관한 법률 등 관련 법령의 규정에 따라 거래 관계 확인을 위해 개인정보를 일정기간 보유할 수 있습니다. | 법령 | 항목 | 기간
          | | --- | --- | --- | | 전자상거래 등에서의 소비자보호에 관한 법률 | 계약 또는 청약철회 등에 관한 기록 | 5년 | | | 대금 결제 및 재화 등의 공급에 관한 기록 | 5년 | | | 소비자의 불만 또는 분쟁 처리에 관한 기록 | 3년 | | 전자금융거래법 |
          전자금융 거래에 관한 기록 | 5년 | | 통신비밀보호법 | 서비스 이용 관련 개인정보(로그기록) | 3개월 | **동의를 거부할 권리 및 거부 경우의 불이익** 귀하께서는 Z-ONE이 위와 같이 수집하는 개인정보에 대해 동의하지 않거나 개인정보를 기재하지
          않음으로써 거부할 수 있습니다. 단, 이때 회원에게 제공되는 서비스가 제한될 수 있습니다.
        </Context>
        <DefaultButton color="#fff" onClick={() => props.onCloseClick(1)}>
          확인
        </DefaultButton>
      </Container>
    </ModalWrapper>
  );
};

export default PrivercyDetail;

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
