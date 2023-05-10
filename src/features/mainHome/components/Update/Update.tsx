import styled from '@emotion/styled';
import UpdateItem from './UpdateItem';

const defaultProps = [{ content: '체육 대학 합격은 패스입니다.' }, { content: '체육 대학 합격은 패스입니다.' }];

const Update = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>업데이트 일시 & Comment</Title>
        <SelectUpdate name="update"></SelectUpdate>
      </TitleWrapper>
      <ContentWrapper>
        <Avatar src="/images/icons/avatar.svg" alt="avatar" />
        <Content>
          {defaultProps.map((item, index) => (
            <UpdateItem key={`updateComment-${index}`} content={item.content} />
          ))}
        </Content>
      </ContentWrapper>
    </Container>
  );
};

export default Update;

const Container = styled.div`
  width: 492px;
  margin-top: 32px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #353644;
`;

const SelectUpdate = styled.select`
  width: 148px;
  height: 28px;
  border-radius: 8px;
  padding: 4px 12px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #626474;
`;

const ContentWrapper = styled.div`
  height: 256px;
  border-radius: 16px;
  background-color: #fff;
  padding: 16px;
  display: flex;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background-color: #353644;
`;

const Content = styled.ul`
  width: 100%;
  height: 224px;
  border-radius: 16px;
  padding: 16px;
  border: 1px solid #e4e6f0;
`;
