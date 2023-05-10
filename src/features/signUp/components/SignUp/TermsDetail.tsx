import { DefaultButton } from '@/common/components/Button/Button';
import styled from '@emotion/styled';

interface Props {
  onCloseClick: (index: number) => void;
}

const TermsDetail: React.FC<Props> = props => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => props.onCloseClick(0)} />
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onCloseClick(0)} />
        <Title>이용약관 동의</Title>
        <Context>
          ### **제 1조 (목적)** 본 이용약관은 “Z-ONE”(이하 &quot;사이트&quot;)의 서비스의 이용조건과 운영에 관한 제반 사항 규정을 목적으로 합니다. ### 제 2조 (정의) 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. ① 회원 : 사이트의 약관에 동의하고
          개인정보를 제공하여 회원 등록을 한 자로서, 사이트와의 이용계약을 체결하고 사이트를 이용하는 이용자를 말합니다. ② 이용계약 : 사이트 이용과 관련하여 사이트와 회원간에 체결 하는 계약을 말합니다. ③ 회원 아이디(이하 &quot;ID&quot;) : 회원의
          식별과 회원의 서비스 이용을 위하여 회원별로 부여하는 고유한 문자와 숫자의 조합을 말합니다. ④ 비밀번호 : 회원이 부여받은 ID와 일치된 회원임을 확인하고 회원의 권익 보호를 위하여 회원이 선정한 문자와 숫자의 조합을 말합니다. ⑤ 운영자 : 서비스를
          운영하는 운영자를 말합니다. ⑥ 회원 탈퇴 : 회원이 이용계약을 해약하는 것을 말합니다. ⑦ 콘텐츠 : 회사에서 제공하는 각종 점수 산출 및 기타 정보를 의미합니다. ### 제 3조 (약관의 명시, 효력 및 개정) ① 이 약관의 내용과 주소지, 관리자의 성명,
          개인정보보호 담당자의 성명, 연락처(전화, 전자우편주소 등) 등을 알 수 있도록 사이트의 초기 서비스 화면에 게시합니다. ② 이 약관은 그 내용을 사이트에 게시하거나 이메일 등 기타의 방법으로 회원에게 공지함으로 효력이 발생합니다. ③ 서비스 이용시
          화면에서 제시되는 경고 메시지의 효력은 본 약관의 효력과 동일합니다. ④ 약관의 규제에 관한 법률, 전자거래기본법, 전자서명법, 정보통신망 이용촉진 및 정보 보호 이용에 관한 법률 기타 관련 법령을 위배하지 않는 범위 내에서, 사전 변경의 경우와
          영업상 중요 사유가 있을 때 약관을 변경할 수 있으며, 변경된 약관은 2항과 같은 방법으로 효력을 발생합니다. ⑤ 이 약관에 동의하는 것은 정기적으로 사이트를 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를
          알지 못해 발생하는 회원의 피해는 사이트에서 책임지지 않습니다. ⑥ 회원은 변경된 약관에 동의하지 않을 경우 회원 탈퇴를 요청할 수 있으며, 변경된 약관의 효력 발생일로부터 7일 이내에 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 약관의
          변경사항에 동의한 것으로 간주됩니다. ### 제 4조 (약관 외 준칙) 운영자는 필요한 경우 별도로 운영정책을 공지 안내할 수 있으며, 본 약관과 운영정책이 중첩될 경우 운영정책이 우선 적용됩니다. ### 제 5조 (이용 계약의 성립) ① 이용 계약은 회원으로
          등록하여 사이트를 이용하려는 자의 본 약관 내용에 대한 동의와 가입신청에 대하여 운영자의 이용승낙으로 성립합니다. ② 회원으로 등록하여 서비스를 이용하려는 자는 사이트 가입신청 시 본 약관을 읽고 아래에 있는 &quot;동의합니다&quot;를 선택하는
          것으로 본 약관에 대한 동의 의사 표시를 합니다. ### 제 6조 (회원가입 및 승낙) ① 회원으로 가입하여 사이트의 서비스를 이용하고자 하는 경우, 이용자는 사이트에서 요청하는 개인 신상정보를 제공해야 합니다. ② 사이트의 서비스 이용신청에 대하여
          사이트가 승낙한 경우, 사이트는 회원 ID/Password와 기타 사이트가 필요하다고 인정하는 내용을 이용자에게 통지합니다. ### 제 7조 (서비스 이용) ① 서비스 이용 시간은 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.
          단, 사이트는 시스템 정기점검, 증설 및 교체를 위해 사이트가 정한 날이나 시간에 서비스를 일시중단 할 수 있으며 예정된 작업으로 인한 서비스 일시 중단은 사이트의 홈페이지에 사전에 공지하오니 수시로 참고하시길 바랍니다. ② 단, 사이트는 다음
          경우에 대하여 사전 공지나 예고 없이 서비스를 일시적 혹은 영구적으로 중단할 수 있습니다. - 긴급한 시스템 점검, 증설, 교체, 고장 혹은 오동작을 일으키는 경우 - 국가비상사태, 정전, 천재지변 등의 불가항력적인 사유가 있는 경우 - 전기통신사업법에
          규정된 기간통신사업자가 전기통신 서비스를 중지한 경우 - 서비스 이용의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우 ③ 전항에 의한 서비스 중단의 경우 사이트는 사전에 공지사항, 메일 등을 통하여 회원에게 통지합니다. 단, 사이트가 통제할
          수 없는 사유로 발생한 서비스의 중단에 대하여 사전공지가 불가능한 경우에는 사후공지로 대신합니다. ④ 사이트에서 제공하는 서비스는 기본적으로 무료입니다. 단, 별도로 유료임을 명시한 정보에 대해서는 해당 정보에 명시된 요금을 지불하여야 사용이
          가능합니다. ⑤ 유료 서비스의 이용 요금 및 결제 방식은 해당 서비스에 명시되어 있는 규정에 따릅니다. ⑥ 사이트에서는 서비스 요금이 무료인 서비스와 일부 유료서비스 이용과 관련하여 이용자에게 어떠한 손해에 대해서도 책임을 지지 않습니다. ### 제
          8조 (서비스 내용) 사이트에서 제공하는 서비스의 내용은 다음과 같습니다. ① 입시 관련 정보 제공 ② 성적 산출 프로그램 제공 ③ 지원 가능성/합격 확률 예측 프로그램의 제공 ④ 모바일을 통한 정보의 제공 ⑤ 기타 “회사”가 추가 개발하거나 다른 회사와의
          제휴를 통해 “회원”에게 제공하는 일체의 서비스 제공 ### 제 9조 (정보의 제공 및 광고의 개재) ① 사이트는 회원에게 서비스 이용에 필요하다고 인정되는 각종 정보에 대해서 사이트 및 이메일, SMS, 등 각종 매체에 게재하는 방법 등으로 회원에게 제공할
          수 있습니다. ② 사이트는 서비스 개선 및 소개 등을 목적으로 회원의 동의 하에 추가적인 개인정보를 요청할 수 있습니다. ③ 사이트는 서비스의 운용과 관련하여 사이트, 이메일, SMS, SNS 등에 광고 등을 게재할 수 있습니다. ### 제 10조 (회원 탈퇴 및
          자격상실) ⓛ 회원이 이용계약을 하고자 하는 때에는 본인이 전화, 이메일 등을 이용하여 가입해지를 신청할 수 있으며, 사이트는 즉시 회원 탈퇴 처리를 합니다. ② 회원 탈퇴가 이루어짐과 동시에 탈퇴회원의 서비스 이용 정보는 삭제되며, 이로 인해
          발생하는 불이익에 대한 책임은 회원 본인에게 있습니다. ③ 개인정보보호를 위하여 “회원”이 1년 동안 “사이트”에 로그인하지 않은 경우, “아이디”를 휴면계정”으로 분리하여 해당 계정의 이용을 중지할 수 있습니다. 이 경우 “회사”는 “휴면계정 처리
          예정일”로부터 30일 이전에 해당사실을 전자메일, 서면, SMS 중 하나의 방법으로 사전 통지하며 “회원”이 다시 “사이트”이용 의사표시를 한 경우에는 “사이트” 이용이 가능합니다. 흄면계정 전환 후 3년 이상 로그인을 하지 않았을 경우 개인정보가 즉기
          파기됩니다. ④ 회원이 다음 각 호의 사유에 해당하는 경우, 사이트는 회원의 회원자격을 적절한 방법으로 제한 및 정지, 상실시킬 수 있습니다. (1) 가입 신청 시에 허위 내용을 등록한 경우 (2) 다른 회원의 ‘서비스’이용을 방해하거나 그 정보를 도용하는
          등 전자거래질서를 위협하는 경우 (3) ‘서비스’를 이용하여 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우 (4) 사이트가 회원 자격을 제한·정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 14일 이내에 그 사유가 시정되지 아니하는
          경우 ⑤ 사이트가 회원가격을 상실시키는 경우에는 회원등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원 등록 말소전에 소명할 기회를 부여합니다. ### 제 11조 (회원의 개인정보 보호) ① 사이트는 이용자의 개인식별이 가능한 개인정보를 수집하는
          때에는 반드시 당해 이용자의 동의를 받습니다. ② 회원이 사이트에 본 약관에 따라 이용신청을 하는 것은 해당 사이트가 본 약관에 따라 회원가입신청서에 기재된 회원 정보를 수집, 이용하는 것에 대해 동의하는 것으로 간주됩니다. ③ 수집된 개인정보는
          이용자의 동의가 없는 한 당해 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 사이트가 집니다. 다만, 다음의 경우에는 예외로 합니다. (1) 특정 개인을 식별할 수 없는 형태로 제공되는 분석 데이터의 경우 (2) 재화등의 거래에
          따른 대금 정산을 위하여 필요한 경우 (3) 도용방지를 위하여 본인확인에 필요한 경우 (4) 법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우 (5) 통계 작성, 학술연구 또는 시장조사를 위해 필요한 경우로서 특정 개인을 식별할 수 없는
          형태로 제공하는 경우 ④ 회원은 언제든지 사이트가 가지고 있는 자신의 개인정보에 대해 열람 및 오류정정을 요구할 수 있으며, 사이트는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 회원이 오류의 정정을 요구한 경우에는 사이트는 그 오류를
          정정할 때까지 당해 개인정보를 이용하지 않습니다. ⑤ 사이트는 이용자 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다. ⑥ 사이트는 사이트와의 제휴 혹은 사업 승인을 받지 않은 기업과 기관에서 스크래핑 등의
          기술을 이용하여 사이트 사용자의 데이터를 수집하는 행위를 불허합니다. ⑦ 사이트는 또는 그로부터 개인정보를 제공받은 제3자는 개인정보의 수집목적 또는 제공받은 목적을 달성한 대에는 당해 개인정보를 지체없이 파기합니다. ### 제 12조 (수집하는
          개인정보 항목) ① 사이트는 이용자들의 서비스를 이용하기 위해 회원으로 가입할 때 서비스 제공을 위한 아래와 같은 개인 정보를 수집하고 있습니다. (1) 수집 항목 - 필수 항목 : 이름, 생년월일, 휴대폰번호, 아이디, 비밀번호, 이메일 주소, 거주지역,
          회원 구분, 수능 및 모의고사 등급, 자녀 이름, 자녀 학년, 내신석차등급 - 모든 회원 : IP Adress, 쿠키, 방문 일시, 서비스 이용 기록, 불량 이용 기록 - 선택 항목 : 추천인 코드 (2) 수집 방법 : 홈페이지(회원가입) ② 사이트가 주관하는 설문조사나
          이벤트 행사 시 통계 분석이나 경품 제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있고, 사이트가 발송하는 레터 내의 광고 메일 수신에 동의하면, 메일 수신과 함께 이벤트, 경품 등의 혜택을 받는 광고 메일 수진자가 되는 경우에도 선별적으로
          개인정보 입력을 요청받을 수 있습니다. ③ 사이트는 이용자의 기본적 인권침해의 우려가 있는 민감한 개인정보(인종, 사상 및 신조, 정치적 성향 및 범죄기록 등)는 가급적 수집하지 않습니다. 부득이하게 수집하는 경우 이용자의 사전 동의를 받습니다. ###
          제 13조 (개인정보 수집 및 이용 목적) ① 사이트는 이용자의 사전 동의 없이는 이용자의 개인정보를 함부로 공개하지 않으며, 수집된 정보는 다음의 목적을 위해 활용하고 있습니다. (1) 사이트 회원 가입 및 관리 회원 가입 의사 확인, 회원제 서비스 제공에
          따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부 확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다. (2) 재화
          또는 서비스 제공 서비스 제공, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을 목적으로 개인정보를 처리합니다. (3) 마케팅 및 광고에 활용 신규 서비스(제품) 개발 및 특화, 이벤트 등
          광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계 (4)고충 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를
          처리합니다. ### 제 14조 (개인정보의 보유 및 이용 기간) ① 이용자가 사이트의 회원으로서 사이트가 제공하는 서비스를 이용하는 동안 사이트는 이용자의 개인정보를 계속적으로 보유하며 서비스 제공 등을 ㅜ이해 이용하고 원칙적으로 개인정보 수집 및
          이용 목적이 달성된 후에는 해당 정보를 지체없이 파기합니다. ② 단, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지 1) 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지 2) 홈페이지 이용에 따른 채권 및
          채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지 ③ 개인정보의 수집 및 이용에 대해 거부할 권리가 있으며, 이를 거부할 경우 회원 가입을 할 수 없습니다. 단, 선택 항목을 제공하지 않아도 회원 가입이 가능합니다. ### 제 15조 (회원의 ID 및
          비밀번호에 대한 의무) ① 제11조, 제12조, 제13조, 제14조의 경우를 제외한 ID와 비밀번호에 관한 관리 책임은 회원에게 있습니다. ② 회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안되며, 그로 인한 모든 책임은 회원에게 있습니다. ③ 회원이
          자신의 ID 및 비밀번호를 도난당하거나 제3자가 사용하고 있음을 인지한 경우, 바로 사이트에 통보하고 사이트의 안내가 있는 경우 그에 따라야 합니다. 만약 회원이 위 사실을 인지하고도 사이트에 대한 통보를 지체함으로써 발생한 손해에 대해서는
          사이트는 배상할 의무가 없습니다. ### 제 16조 (구매신청) ① 회원은 사이트의 서비스상에서 다음 또는 이와 유사한 방법에 의하여 재화, 서비스의 구매를 신청하며, 사이트는 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야
          합니다. 1) 재화 서비스 등의 검색 및 선택 2) 성명, 주소, 전화번호, 전자우편주소 등의 입력 3) 약관 내용, 청약 철회권이 제한되는 서비스 등의 비용 부담과 관련한 내용에 대한 확인 4) 이 약관에 동의하고 위 3호의 사항을 확인하거나 거부하는 표시 5)
          재화, 서비스 등의 구매 신청 및 이에 관한 확인 6) 결제 방법의 선택 ### 제 17조 (구매 계약의 성립) ① 사이트는 제 16조와 같은 구매 신청에 대하여 신청 내용에 허위, 기재누락, 오기가 있을 경우 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을
          체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있습니다. ### 제 18조 (대금의 지급) 서비스에서 구매한 재화 혹은 서비스에 대한 대금지급방법은 다음 각호의 방법 중 가용한 방법으로 할 수
          있습니다. 단, 사이트는 이용자의 지급 방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다. 1) 폰뱅킹, 인터넷뱅킹, 메일 뱅킹 등의 각종 계좌이체 2) 선불카드, 직불카드, 신용카드 등의 각종 카드 결제 3) 온라인 무통장
          입금 4) 기타 사이트가 사용하는 전자적 지급 방법에 의한 대금 지급 등 ### 제 19조 (수신확인 통지, 구매신청 변경 및 취소) ① 사이트는 이용자의 구매 신청이 있는 경우 이용자에게 수신확인통지를 합니다. ② 수신확인통지를 받은 이용자는 의사표시의
          불일치등이 있는경우에 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있습니다. ③ 구매 신청 변경 및 취소에 관한 세부 규정은 제21조의 청약철회 등에 관한 규정에 따릅니다. ### 제 20조 (재화, 서비스 등의 제공) ① 사이트는 아래에
          해당하는 경우 유료 서비스 이용 신청에 대한 승인을 제한할 수 있고, 그 사유가 해소될 때까지 승인을 유보할 수 있습니다. 1) 유료 서비스의 이용요금을 납입하지 않은 경우 2) 유료 서비스 신청 금액 총액과 입금 금액 총액이 일치하지 않은 경우 3) 기타
          사이트가 필요하다고 인정되는 경우 ### 제 21조 (청약 철회 등의 효과) ① 사이트는 회원으로부터 재화 등을 반환 받은 경우 10영업일 이내에 이미 지급받은 재화 등의 대금을 환급합니다. ② 사이트는 청약 철회에 따른 대금을 환금함에 있어서 이용자가
          신용카드 또는 전자화폐 등의 결제수단으로 재화, 서비스등의 대금을 지급한 때에는 지체없이 당해 결제수단을 제공한 사업자로 하여금 재화, 서비스 등의 대금의 청구를 정지 또는 취소하도록 요청할 수 있습니다. ③ 청약 철회등의 경우 공급받은 재화등의
          반환에 필요한 비용은 회원이 부담합니다. ④ 사이트는 회원에게 청약 철회등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만, 재화 등의 내용이 표시·광고 내용과 다르거나 계약 내용과 다르게 이행되어 청약철회등을 하는 경우 재화 등의 반환에
          필요한 비용은 사이트가 부담합니다. ### 제 22조 (회사의 의무) ① 사이트는 회원이 희망한 서비스 제공 개시일에 특별한 사정이 없는 한 서비스를 이용할 수 있도록 하여야 합니다. ② 사이트에서는 계속적이고 안정적인 서비스 제공을 위해 설비에 장애가
          생기거나 명실된 때에는 부득이한 사유가 없는 한 지체없이 이를 수리 또는 복구합니다. ③ 사이트는 개인정보 보호를 위해 보안시스템을 구축하며 개인정보 보호정책을 공시하고 준수합니다. ### 제 23조 (회원의 의무) ① 회원은 다음 각 호의 행위를
          하여서는 안됩니다. 1) 회원가입 또는 개인정보 변경 시 허위 내용을 등록하는 행위 2) 사이트에 게시된 정보를 변경하는 행위 3) 사이트나 기타 제3자의 인격권 또는 지적재산권을 침해하거나 업무를 방해하는 행위 4) 다른 회원의 ID를 도용하는 행위 5)
          관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보의 전송 또는 게시하는 행위 6) 사이트나 사이트 관리자를 가장하거나 사칭하여 글을 게시하거나 메일을 발송하는 행위 7) 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해 및
          파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 발송하는 행위 8) 사이트가 제공하는 서비스에 정한 약관 기타 서비스 이용에 관한 규정을 위반하는 행위 9) 외설 또는
          폭력적인 메시지 등 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위 10) 사실관계를 왜곡하는 정보제공 등 기타 사이트가 부적절하다고 판단하는 행위 ② 회원이 개인의 정보를 허위 또는 잘못 기재하여 생기는 불이익에 대한 책임은 회원 본인에게
          있으며, 이에 사이트는 면책합니다. ③ 사이트 운영상 부적절하다고 판단된 정보가 게시된 경우, 사이트는 게시를 행한 자의 승낙없이 게재된 당해 정보를 삭제할 수 있습니다. 단, 사이트는 이러한 정보의 삭제 등을 할 의무를 지지 않습니다. ④ 제1항에
          해당하는 행위를 한 회원이 있을 경우, 사이트는 제10조에서 정한 바에 따라 회원의 회원자격을 적절한 방법으로 제한 및 정지·상실시킬 수 있습니다. ⑤ 회원은 그 귀책사유로 인하여 사이트나 다른 회원이 입은 손해를 배상할 책임이 있습니다. ### 제 24조
          (게시물 또는 내용물의 삭제) 사이트는 이용자가 게시하거나 등록한 내용이 제 23조 규정에 위반되거나 소정의 게시가간을 초과하는 경우, 사전 통지나 동의 없이 이를 삭제할 수 있습니다. ### 제 25조 (저작권의 귀속 및 권리, 의무) ① 사이트가 작성한
          저작물에 대한 저작권 기타 지적재산권은 “사이트”에 귀속합니다. ② 회원은 서비스를 이용함으로써 얻은 정보를 사이트의 사전승낙 없이 복제, 전송, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다. ③
          회원이 작성한 게시물에 대한 모든 권리 및 책임은 이를 게시한 회원에게 있습니다. ④ 사이트는 회원이 게시한 게시물을 사용, 복제, 수정, 출판, 배포할 수 있습니다. ### 제 26조 (양도의 금지) 회원은 서비스 이용권리를 타인에게 대여, 양도 또는 증여
          등을 할 수 없으며, 또한 질권의 목적으로도 사용할 수 없습니다. ### 제 27조 (면책 및 배상) ① 사이트는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. ② 사이트는 회원이 저장,
          게시 또는 전송한 자료와 관련하여 일체의 책임을 지지 않습니다. ③ 사이트는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다. ④ 사이트는 서비스 이용과 관련하여
          가입자에게 발생한 손해 가운데 가입자의 고의, 과실에 의한 손해에 대하여 책임을 지지 않습니다. ### 제 28조 (재판권 및 준거법) ① 사이트와 이용자간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할법원으로 합니다. ② 사이트와 이용자간에 제기된
          소송에는 대한민국법을 적용합니다. 부칙 ① 본 약관은 2023년 05월 10일부터 시행합니다.
        </Context>
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

export default TermsDetail;

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
