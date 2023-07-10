import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import ProbabilityItem from './ProbabilityItem';
import ApplyPossibilityItem from './ApplyPossibilityItem';

interface Props {
  data: { tag: string; text: string }[];
}

const ApplyPossibilityModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <ProbabilityItem img="/images/icons/probability1.svg" name="민중쌤의" title="지원 가능성 comment" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal} padding="0px">
          <Wrapper>
            <Container>
              <Title>김민중 선생님이 설명하는</Title>
              <SubTitle>지원 가능성</SubTitle>
              <Description>
                지원 가능성은 수능 점수를 기준으로만 판단되는 내용입니다.
                <br />
                아래 지원 가능성에 대한 설명을 참고로 신중히 지원을 고려하세요!
              </Description>
              <List>
                {props.data.map((item, index) => (
                  <ApplyPossibilityItem key={index} tag={item.tag} text={item.text} />
                ))}
              </List>
            </Container>
            <BackgroundImg src="/images/icons/profilePhoto.png" alt="kimminjung" />
          </Wrapper>
        </ModalLayout>
      )}
    </>
  );
};

ApplyPossibilityModal.defaultProps = {
  data: [
    { tag: '안정 지원', text: '지원하기에 아주 좋은 상황입니다.' },
    { tag: '적정 지원', text: '실기를 잘 준비해 왔다면, 지원 긍정적입니다.' },
    { tag: '소신 지원', text: '실기 올만점 수준이라면, 지원하세요. 정말 신중해야 합니다.' },
    { tag: '우주 상향', text: '실기 올만점이라도 지원을 비추천합니다.' },
    { tag: '지원불가', text: '지원하지 마세요. 단, 대학마다 다를 수 있습니다.' },
  ],
};

export default ApplyPossibilityModal;

const Container = styled.form`
  width: 792px;
  padding: 32px;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
  color: ${props => props.theme.colors.gray1};
`;

const SubTitle = styled.div`
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.04em;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 32px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${props => props.theme.colors.grayBlack};
  width: 500px;
  margin-bottom: 24px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 413px;
`;
