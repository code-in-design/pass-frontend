import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import ProbabilityItem from './ProbabilityItem';
import PassingProbabilityItem from './PassingProbabilityItem';

interface Props {
  data: { percent: number[]; text: string }[];
}

const PassingProbabilityModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <ProbabilityItem img="/images/icons/probability2.svg" name="민중쌤의" title="합격 가능성 comment" onClick={openModal} />
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal} padding="0px">
          <Wrapper>
            <Container>
              <Title>김민중 선생님이 설명하는</Title>
              <SubTitle>합격 확률</SubTitle>
              <Description>
                합격 확률은 총 환산 점수를 기준으로 판단되는 내용입니다.
                <br />
                합격 확률을 참고로 하여 신중히 지원을 고려하세요!
              </Description>
              <List>
                {props.data.map((item, index) => (
                  <PassingProbabilityItem key={index} percent={item.percent} text={item.text} />
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

PassingProbabilityModal.defaultProps = {
  data: [
    { percent: [100], text: '합격을 넘어, 당신을 체대입시의 신으로 임명합니다.' },
    { percent: [95, 99], text: '매우 안정적으로 합격합니다.' },
    { percent: [90, 94], text: '여유있게 합격 가능합니다.' },
    { percent: [85, 89], text: '최초합격은 장담할 수 없지만, 합격은 합니다.' },
    { percent: [80, 84], text: '추가합격을 노리고 지원하세요. 하지만 최초합격도 가능할 수 있습니다.' },
    { percent: [70, 79], text: '1지망 대학이라면, 소신지원하세요. 2, 3지망 대학이라면 지원 비추천.' },
    { percent: [50, 69], text: '이 대학 아니면, 안된다하면 지원하세요.<br/>단, 추가로도 합격할 확률이 낮습니다.' },
    { percent: [30, 49], text: '재수를 생각하고 있다면 지원하세요. 불합격할 확률이 높습니다.' },
    { percent: [10, 29], text: '대학에 원서 접수비를 기부하고 싶다면, 지원하세요. 불합격합니다.' },
    { percent: [0, 10], text: '지원하지 마세요. 무조건 불합격합니다.' },
  ],
};

export default PassingProbabilityModal;

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
  gap: 8px 0;
`;

const BackgroundImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 413px;
`;
