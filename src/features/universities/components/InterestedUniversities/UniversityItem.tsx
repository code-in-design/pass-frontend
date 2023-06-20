import styled from '@emotion/styled';

interface Props {
  logo: string;
  name: string;
  departmentName?: string;
  conversionScore?: number;
  possibilityOfSupport?: string;
}

const UniversityItem = (props: Props) => {
  return (
    <ItemWrapper>
      <UnivWrapper>
        <UnivLogo src={`/images/icons/univ/${props.logo}.svg`} alt={props.logo} />
        <UnivNameWrapper>
          <UnivName>{props.name}</UnivName>
          <UnivMajorName>{props.departmentName}</UnivMajorName>
        </UnivNameWrapper>
      </UnivWrapper>
      <ScoreWrapper>
        <ScoreName>수능 환산 점수</ScoreName>
        <Score>{props.conversionScore}</Score>
      </ScoreWrapper>
      <Wrapper>
        {props.possibilityOfSupport === '적정' && <Result color="primary">{props.possibilityOfSupport}</Result>}
        {props.possibilityOfSupport === '소신' && <Result color="danger">{props.possibilityOfSupport}</Result>}
        {props.possibilityOfSupport === '안정' && <Result>{props.possibilityOfSupport}</Result>}
        <MoreWrpper>
          <More src="/images/icons/more.svg" alt="more" />
        </MoreWrpper>
      </Wrapper>
    </ItemWrapper>
  );
};

export default UniversityItem;

const ItemWrapper = styled.div`
  width: 100%;
  min-width: 492px;
  height: 68px;
  border-radius: 16px;
  padding: 10px 16px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const UnivWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const UnivLogo = styled.img`
  width: 48px;
  height: 45px;
  border-radius: 50%;
  margin-right: 12px;
  display: block;
`;

const UnivNameWrapper = styled.div`
  width: 122px;
`;

const UnivName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #262d37;
  margin-bottom: 4px;
`;

const UnivMajorName = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #737c89;
`;

const ScoreWrapper = styled.div`
  /* width: 79px; */
  width: 67px;
  margin: 0 auto;
  flex-grow: 1;
`;

const ScoreName = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -1.7px;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 4px;
  text-align: center;
`;

const Score = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  flex-grow: 1;
`;

const Result = styled.div`
  width: 68px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  margin-right: 12px;
  color: ${props => (props.color === 'primary' ? '#00a070' : props.color === 'danger' ? '#f66513' : '#4f8afc')};
  background-color: ${props => (props.color === 'primary' ? 'rgba(30, 203, 151, 0.2)' : props.color === 'danger' ? 'rgba(255, 131, 62, 0.2)' : 'rgba(79, 138, 252, 0.2)')};
`;

const MoreWrpper = styled.div`
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
`;

const More = styled.img`
  width: 3.33px;
  height: 13.33px;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`;
