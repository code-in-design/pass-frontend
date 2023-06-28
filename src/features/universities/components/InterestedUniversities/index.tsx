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
        <UniversityItem key={`univ-${props.universityName}`} logo={props.logo} name={props.universityName} />
      ))}
    </Container>
  );
};

export default InterestedUniversities;

InterestedUniversities.defaultProps = {
  data: [
    {
      logo: '한양대학교',
      universityName: '한양대학교',
      departmentName: '스포츠사이언스 전공',
      conversionScore: 246.34,
      possibilityOfSupport: '소신',
    },
    {
      logo: '한양대학교',
      universityName: '대구가톨릭대',
      departmentName: '스포츠매니지먼트 전공',
      conversionScore: 246.34,
      possibilityOfSupport: '안정',
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
  color: ${props => props.theme.colors.grayBlack};
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
  color: ${props => props.theme.colors.blue};
`;
