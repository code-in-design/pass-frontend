import styled from '@emotion/styled';
import UniversityItem from './UniversityItem';
import { UniversitiesModel } from '@/models/UniversitiesModel';

interface Props {
  data: Array<UniversitiesModel>;
}

const InterestedUniversities = (props: Props) => {
  return (
    <Container>
      <Title>나의 관심 대학</Title>
      {props.data.length < 3 && (
        <DescriptionWrapper>
          <DescriptionImg src="/images/icons/stars.svg" alt="star" />
          <Description>합격 분석 메뉴에서 나의 관심 대학을 설정해주세요!</Description>
        </DescriptionWrapper>
      )}
      {props.data.map(props => (
        <UniversityItem key={`univ-${props.name}`} logo={props.logo} name={props.name} majorName={props.majorName} score={props.score} result={props.result} />
      ))}
    </Container>
  );
};

export default InterestedUniversities;

InterestedUniversities.defaultProps = {
  data: [
    {
      logo: 'hanyang',
      name: '한양대학교',
      majorName: '스포츠사이언스 전공',
      score: 246.34,
      result: '소신',
    },
    {
      logo: 'hanyang',
      name: '대구가톨릭대',
      majorName: '스포츠매니지먼트 전공',
      score: 246.34,
      result: '안정',
    },
  ],
};

const Container = styled.div`
  min-width: 492px;
  width: 100%;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #353644;
  margin-bottom: 12px;
`;

const DescriptionWrapper = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 16px;
  padding: 10px 16px;
  background-color: rgba(107, 119, 248, 0.1);
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionImg = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 8px;
`;

const Description = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #6b77f8;
`;
