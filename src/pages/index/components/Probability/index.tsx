import styled from '@emotion/styled';
import ProbabilityItem from './ProbabilityItem';
import SupportabilityModal from './SupportabilityModal';
import PassingProbabilityModal from './PassingProbabilityModal';
import ProfileModal from './ProfileModal';

const Probability = props => {
  return (
    <Container>
      <Title>지원가능성 & 합격 확률</Title>
      <Contents>
        <ContentsLeft>
          <ContentsLeftTitle>
            지원 가능성 & <br />
            합격 확률 안내
          </ContentsLeftTitle>
          <ContentsLeftName>김민중 선생님</ContentsLeftName>
          <ContentsLeftImg src="/images/icons/probabilityTeacher.svg" alt="teacherImg" />
        </ContentsLeft>
        <ContentsRight>
          <SupportabilityModal />
          <PassingProbabilityModal />
          <ProfileModal />
        </ContentsRight>
      </Contents>
    </Container>
  );
};

export default Probability;

const Container = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  letter-spacing: -0.04em;
  margin-bottom: 12px;
`;

const Contents = styled.div`
  display: flex;
  gap: 0 13px;
  min-width: 492px;
  width: 100%;
  height: 256px;
`;

const ContentsLeft = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 16px;
  background-color: #dadcff;
  box-shadow: 4px 8px 32px -8px rgba(233, 235, 255, 0.12);
  padding: 20px;
  position: relative;
`;
const ContentsLeftTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 8px;
`;

const ContentsLeftName = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;

const ContentsLeftImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ContentsRight = styled.div`
  width: 50%;
  height: 100%;
`;
