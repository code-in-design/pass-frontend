import styled from '@emotion/styled';

interface Props {
  img: string;
  name: string;
  major: string;
  number: number;
}

const PopularItem = (props: Props) => {
  return (
    <Container>
      <ImageWrapper>
        {props.number === 1 ? <PopularImg src="/images/icons/popularMain.svg" alt="popularIcon" /> : <PopularImg src="/images/icons/popular.svg" alt="popularIcon" />}
        {props.number === 1 ? <PupularIdx color="#fff">{props.number}</PupularIdx> : <PupularIdx>{props.number}</PupularIdx>}
      </ImageWrapper>
      <PopularLogo src={props.img} alt={props.img} />
      <PopularName>{props.name}</PopularName>
      <PopularMajor>{props.major}</PopularMajor>
    </Container>
  );
};

export default PopularItem;

const Container = styled.div`
  width: 97.6px;
  height: 120px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: #f3f4fa;
  position: relative;
  padding: 17px 0 16px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 7.75px;
  top: 0px;
`;

const PopularImg = styled.img`
  width: 23.24px;
  height: 25.34px;
`;

const PupularIdx = styled.div`
  position: absolute;
  width: 8px;
  top: 3px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  /* color: #626474; */
  color: ${props => props.color};
`;

const PopularLogo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fff;
  margin: 0 auto;
`;

const PopularName = styled.div`
  margin-top: 6px;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #353644;
  text-align: center;
`;

const PopularMajor = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin: 0 auto;
  color: #626474;
  text-align: center;
  max-width: 72px;
  white-space: normal;
  overflow: hidden;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;
