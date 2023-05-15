import styled from '@emotion/styled';
import ProbabilityItem from './ProbabilityItem';

interface Props {
  probabilityMenu: { img: string; name: string; title: string }[];
}

const Probability = (props: Props) => {
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
          {props.probabilityMenu.map(item => (
            <ProbabilityItem key={`probability-${item.img}`} img={item.img} name={item.name} title={item.title} />
          ))}
        </ContentsRight>
      </Contents>
    </Container>
  );
};

export default Probability;

Probability.defaultProps = {
  probabilityMenu: [
    {
      img: '/images/icons/probability1.svg',
      name: '민중쌤의',
      title: '지원 가능성 comment',
    },
    {
      img: '/images/icons/probability2.svg',
      name: '민중쌤의',
      title: '합격 가능성 comment',
    },
    {
      img: '/images/icons/probability3.svg',
      name: '김민중 선생님',
      title: '프로필 바로가기',
    },
  ],
};

const Container = styled.div`
  margin-top: 32px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #353644;
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
  letter-spacing: -0.02em;
  color: #353644;
  margin-bottom: 8px;
`;

const ContentsLeftName = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #191e25;
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
