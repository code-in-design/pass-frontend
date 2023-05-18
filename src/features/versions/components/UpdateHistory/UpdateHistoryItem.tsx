import styled from '@emotion/styled';

interface Props {
  content: string;
}

const UpdateItem = (props: Props) => {
  return (
    <UpdateItemWrapper>
      <Dot />
      <Text>{props.content}</Text>
    </UpdateItemWrapper>
  );
};

export default UpdateItem;

const UpdateItemWrapper = styled.li`
  padding: 16px 0;
  border-bottom: 1px solid #f3f4fa;
  display: flex;
  align-items: center;
  &:first-child {
    padding: 0 0 16px 0;
  }
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #60cbde;
  margin-right: 12px;
`;
const Text = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #262d37;
`;
