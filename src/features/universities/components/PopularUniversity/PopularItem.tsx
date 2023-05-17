import styled from '@emotion/styled';
import PopularImg from '../../../../../public/images/icons/popularIcon.svg';

interface Props {
  img: string;
  name: string;
  major: string;
  number: number;
  index: number;
}

const PopularItem = (props: Props) => {
  return (
    <Container>
      <ImageWrapper>
        <PopularImgWrapper color={String(props.index)}>
          <PopularImg />
        </PopularImgWrapper>
        <PupularIdx color={String(props.index)}>{props.index}</PupularIdx>
      </ImageWrapper>
      <Content>
        <PopularLogo src={props.img} alt={props.img} />
        <PopularName>{props.name}</PopularName>
        <PopularMajor>{props.major}</PopularMajor>
      </Content>
    </Container>
  );
};

export default PopularItem;

const Container = styled.div`
  width: 97.6px;
  height: 123px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 7.75px;
  top: 0px;
`;

const PopularImgWrapper = styled.div`
  width: 23.24px;
  height: 25.34px;
  color: ${props => (props.color === '1' ? '#6B77F8' : '#D9DBED')};
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
  color: ${props => (props.color === '1' ? '#fff' : '#626474')};
`;

const Content = styled.div`
  height: 120px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: #f3f4fa;
  padding: 17px 0 16px;
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
