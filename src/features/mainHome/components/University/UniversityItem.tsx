import styled from '@emotion/styled';
interface Props {
  logo: string;
  name: string;
  majorName: string;
  score: number;
  result: string;
}

const UniversityItem: React.FC<Props> = props => {
  return (
    <ItemWrapper>
      <UnivLogo src={`/images/icons/univ/${props.logo}.svg`} alt={props.logo} />
      <UnivNameWrapper>
        <UnivName>{props.name}</UnivName>
        <UnivMajorName>{props.majorName}</UnivMajorName>
      </UnivNameWrapper>
      <ScoreWrapper>
        <ScoreName>수능 환산 점수</ScoreName>
        <Score>{props.score}</Score>
      </ScoreWrapper>
      <Result>{props.result}</Result>
      <MoreWrpper>
        <More src="/images/icons/more.svg" alt="more" />
      </MoreWrpper>
    </ItemWrapper>
  );
};

export default UniversityItem;

const ItemWrapper = styled.div`
  height: 68px;
  border-radius: 16px;
  padding: 10px 16px;
  background-color: #fff;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const UnivLogo = styled.img`
  width: 48px;
  height: 45px;
  border-radius: 50%;
  margin-right: 12px;
  display: block;
`;

const UnivNameWrapper = styled.div``;

const UnivName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.02em;
  color: #262d37;
  margin-bottom: 4px;
`;

const UnivMajorName = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #737c89;
`;

const ScoreWrapper = styled.div`
  width: 79px;
  margin: 0 45px;
`;

const ScoreName = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #9395a6;
  margin-bottom: 4px;
`;

const Score = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #353644;
  text-align: center;
`;

const Result = styled.div`
  width: 68px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  background: rgba(255, 131, 62, 0.2);
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: #f66513;
  text-align: center;
`;

const MoreWrpper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  margin-left: 20.33px;
`;

const More = styled.img`
  width: 3.33px;
  height: 13.33px;
  display: block;
`;
