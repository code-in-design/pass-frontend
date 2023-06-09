import ModalLayout from '@/components/Modal/ModalLayout';
import ServiceListItem from '@/pages/dashBoard/components/ServiceList/ServiceListItem';
import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import InfoIcon from '../../../../public/images/icons/info.svg';
import ThumbUp from '../../../../public/images/icons/thumbUp.svg';

const RecommendationModal = props => {
  const [myCode, setMyCode] = useState('ABCD10');
  const [isOpen, setIsOpen] = useState(false);
  const share = `Z-ONE을 쓰는 친구가 초대했어요! 친구도 나도 합격분석권 1개 받기 내 초대코드 :${myCode} wwww.z-one.kr`;

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ServiceListItem icon={<ThumbUp />} text="추천하기 / 받기" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Title>내 초대 코드</Title>
          <CodeWrapper>
            <Code>{myCode}</Code>
            <CopyToClipboard text={myCode}>
              <CodeCopy>
                <CodeCopyImg src="/images/icons/fileCopy.svg" alt="fileCopy" />
                <CodeCopyText>코드복사</CodeCopyText>
              </CodeCopy>
            </CopyToClipboard>
          </CodeWrapper>
          <Description>
            추천 코드를 입력할 경우,
            <br />
            친구와 내 계정 모두 합격 분석 1회 열람권이 추가됩니다.
          </Description>
          <Info>
            <IconWrapper>
              <InfoIcon />
            </IconWrapper>
            <InfoText>합격 분석 열람권은 최대 5개까지 추가될 수 있습니다.</InfoText>
          </Info>
          <CopyToClipboard text={share}>
            <ShareButton>공유하기</ShareButton>
          </CopyToClipboard>
          <Divider />
          <SecondTitle>추천 코드 입력하기</SecondTitle>
          <InputCodeWrapper>
            <InputCode type="input" placeholder="추천 코드를 입력해주세요" />
            <InputImg src="/images/icons/recommendation.svg" alt="recommendation" />
            <EnterButton disabled>확인</EnterButton>
            {/* <ButtonElement variant="disabled">확인</ButtonElement> */}
          </InputCodeWrapper>
        </ModalLayout>
      )}
    </>
  );
};

export default RecommendationModal;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
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
  color: ${props => props.theme.colors.black};
`;
const CodeCopy = styled.button`
  margin-left: 12px;
  width: 79px;
  height: 32px;
  background-color: ${props => props.theme.colors.gray5};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  color: ${props => props.theme.colors.gray2};
`;
const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.colors.gray1};
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

const IconWrapper = styled.div`
  color: ${props => props.theme.colors.green};
  margin-right: 10px;
  width: 20px;
  height: 20px;
`;
const InfoText = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.green};
`;

const ShareButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.green};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
const Divider = styled.hr`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.gray5};
  margin: 24px 0;
`;
const SecondTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.black};
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
  padding: 18px 0 18px 56px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  border: 1px solid ${props => props.theme.colors.gray4};
  &::placeholder {
    color: ${props => props.theme.colors.gray2};
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
  color: ${props => props.theme.colors.white};
  margin-left: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  :disabled {
    background-color: rgba(228, 230, 240, 0.4);
    color: ${props => props.theme.colors.gray3};
    cursor: not-allowed;
  }
`;
