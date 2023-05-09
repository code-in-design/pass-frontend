import styled from '@emotion/styled';
import ProbabilityRightItem from './ProbabilityRightItem';

const rightMenu = [
  {
    img: 'probability1',
    name: '민중쌤의',
    title: '지원 가능성 comment',
  },
  {
    img: 'probability2',
    name: '민중쌤의',
    title: '합격 가능성 comment',
  },
  {
    img: 'probability3',
    name: '김민중 선생님',
    title: '프로필 바로가기',
  },
];

const Probability: React.FC = () => {
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
          <ContentsLeftImg />
        </ContentsLeft>
        <ContentsRight>
          {rightMenu.map(item => (
            <ProbabilityRightItem img={item.img} name={item.name} title={item.title} />
          ))}
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
  color: #353644;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
`;

const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  width: 492px;
  height: 256px;
`;

const ContentsLeft = styled.div`
  width: calc(479px / 2);
  height: 100%;
  border-radius: 16px;
  background-color: #dadcff;
  box-shadow: 4px 8px 32px -8px rgba(233, 235, 255, 0.12);
  padding: 20px;
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

const ContentsLeftImg = styled.img``;

const ContentsRight = styled.div`
  width: calc(479px / 2);
  height: 100%;
`;
