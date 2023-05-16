import styled from '@emotion/styled';
import UpdateItem from './UpdateHistoryItem';
import Select from '@/components/Select';
import { VersionsModel } from '@/models/VersionsModel';

const Update = (props: VersionsModel) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>업데이트 일시 & Comment</Title>
        <Select size="sm" options={props.options} defaultValue={props.options?.[0]} />
      </TitleWrapper>
      <ContentWrapper>
        <Avatar src="/images/icons/avatar.svg" alt="avatar" />
        <FakeContent>
          <Content>
            {props.data.map((item, index) => (
              <UpdateItem key={index} content={item.content} />
            ))}
          </Content>
        </FakeContent>
      </ContentWrapper>
    </Container>
  );
};

Update.defaultProps = {
  data: [{ content: '체육 대학 합격은 패스입니다.' }, { content: '체육 대학 합격은 패스입니다.' }, { content: '체육 대학 합격은 패스입니다.' }, { content: '체육 대학 합격은 패스입니다.' }, { content: '체육 대학 합격은 패스입니다.' }],
  options: [
    { value: 'v1', label: '2023/05/10-13:32' },
    { value: 'v2', label: '2023/06/20-13:32' },
  ],
};
export default Update;

const Container = styled.div`
  min-width: 492px;
  width: 100%;
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
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
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

const FakeContent = styled.div`
  width: 100%;
  height: 224px;
  border-radius: 16px;
  border: 1px solid #e4e6f0;
  overflow-y: hidden;
  padding: 16px 4px 16px 16px;
`;

const Content = styled.ul`
  width: 100%;
  height: 192px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #fff;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    border-radius: 36px;
    background-color: #626474;
  }
`;
