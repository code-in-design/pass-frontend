import styled from '@emotion/styled';
import { css } from '@emotion/react';

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
      <UnivWrapper>
        <UnivLogo src={`/images/icons/univ/${props.logo}.svg`} alt={props.logo} />
        <UnivNameWrapper>
          <UnivName>{props.name}</UnivName>
          <UnivMajorName>{props.majorName}</UnivMajorName>
        </UnivNameWrapper>
      </UnivWrapper>
      <ScoreWrapper>
        <ScoreName>수능 환산 점수</ScoreName>
        <Score>{props.score}</Score>
      </ScoreWrapper>
      <Wrapper>
        {props.result === '적정' ? <Result color="primary">{props.result}</Result> : props.result === '소신' ? <Result color="danger">{props.result}</Result> : <Result>{props.result}</Result>}
        <MoreWrpper>
          <More src="/images/icons/more.svg" alt="more" />
        </MoreWrpper>
      </Wrapper>
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

const UnivWrapper = styled.div`
  display: flex;
  align-items: center;
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
  /* width: 79px; */
  width: 67px;
  margin: 0 auto;
`;

const ScoreName = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -1.7px;
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const defaultResult = css`
  color: #00a070;
  background-color: rgba(30, 203, 151, 0.2);
`;
const dangerResult = css`
  color: #f66513;
  background-color: rgba(255, 131, 62, 0.2);
`;
const stableResult = css`
  color: #4f8afc;
  background-color: rgba(79, 138, 252, 0.2);
`;

const Result = styled.div`
  width: 68px;
  height: 32px;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.02em;
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
