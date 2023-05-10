import styled from '@emotion/styled';

const PopularUniversity = () => {
  return (
    <Container>
      <Title>실시간 인기 대학 · 학과</Title>
      <ContentWrapper></ContentWrapper>
    </Container>
  );
};

export default PopularUniversity;

const Container = styled.div`
  width: 492px;
  margin-top: 32px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #353644;
  margin-bottom: 12px;
`;

const ContentWrapper = styled.div`
  height: 152px;
  padding: 13px 16px 16px;
  background-color: #fff;
  border-radius: 16px;
`;
