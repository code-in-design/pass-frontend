import styled from '@emotion/styled';

interface Props {
  onClickClose: () => void;
}

const ThumbUpModal: React.FC<Props> = props => {
  return (
    <ModalWrapper>
      <ModalOutside onClick={() => console.log('click')}></ModalOutside>
      <Container>
        <Close src="/images/icons/close.svg" alt="close" onClick={() => props.onClickClose()} />
        <Title>내 초대 코드</Title>
        <CodeWrapper>
          <Code>ABCD10</Code>
          <CodeCopy>
            <CodeCopyImg src="/images/icons/fileCopy.svg" alt="fileCopy" />
            <CodeCopyText>코드복사</CodeCopyText>
          </CodeCopy>
        </CodeWrapper>
        <Description>
          추천 코드를 입력할 경우,
          <br />
          친구와 내 계정 모두 합격 분석 1회 열람권이 추가됩니다.
        </Description>
        <Info>
          <InfoImg src="/images/icons/info.svg" alt="info" />
          <InfoText>합격 분석 열람권은 최대 5개까지 추가될 수 있습니다.</InfoText>
        </Info>
        <ShareButton>공유하기</ShareButton>
        <Divider />
        <SecondTitle>추천 코드 입력하기</SecondTitle>
        <InputCodeWrapper>
          <InputCode />
          <EnterButton>확인</EnterButton>
        </InputCodeWrapper>
      </Container>
    </ModalWrapper>
  );
};

export default ThumbUpModal;

const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
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
  width: 496px;
  padding: 32px;
  height: 464px;
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

const CodeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0;
`;
const Code = styled.span`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: #191e25;
`;
const CodeCopy = styled.button`
  margin-left: 12px;
  width: 79px;
  height: 32px;
  background-color: #f3f4fa;
  border-radius: 8px;
  display: flex;
`;

const CodeCopyImg = styled.img`
  display: block;
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

const CodeCopyText = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #9395a6;
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #626474;
  margin-bottom: 8px;
`;

const Info = styled.div`
  height: 44px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: rgba(96, 200, 222, 0.1);
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
  color: #60c8de;
`;

const ShareButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  color: #fff;
  background-color: #60c8de;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
const Divider = styled.hr`
  width: 100%;
  border-bottom: 1px solid #f3f4fa;
  margin: 24px 0;
`;
const SecondTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #191e25;
  margin-bottom: 12px;
`;

const InputCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const InputCode = styled.input`
  width: 306px;
  height: 56px;
  border-radius: 16px;
  padding: 56px 18px 0 18px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  &::placeholder {
    color: #9395a6;
  }
`;
const InputImg = styled.img`
  position: absolute;
  top: 18px;
  left: 24px;
  display: block;
  width: 20px;
  height: 20px;
`;

const EnterButton = styled.button`
  width: 114px;
  height: 56px;
  border-radius: 16px;
  padding: 16px 24px;
  background-color: #636474;
  color: #fff;
  margin-left: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
