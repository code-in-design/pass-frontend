import Select from '@/components/Select';
import theme from '@/theme/theme';
import { Flex, Stack } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { FieldValues, FormState, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type OptionType = {
  label: string;
  value: string;
};

interface Props {
  date: string;
  options: OptionType[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: () => void;
  formState?: FormState<FieldValues>;
}

const UpdateForm = (props: Props) => {
  const [isCommentEmpty, setIsCommentEmpty] = useState(true);

  const handleCommentChange = event => {
    const commentValue = event.target.value;
    setIsCommentEmpty(commentValue === '');
  };

  return (
    <Container onSubmit={props.handleSubmit}>
      <Stack width="100%" direction="column" justifyContent="space-between">
        <Flex flexDirection="column" gap="24px">
          <Title>Update 관리</Title>
          <Flex width="100%" gap="24px">
            <Flex maxWidth="145px" direction="column" gap="12px">
              <Text>UPDATE COMMENT</Text>
              <Select height={40} border="10px" options={props.options} name="version" setValue={props.setValue} register={props.register} required="버전을 입력하세요" />
            </Flex>
            <Flex maxWidth="145px" direction="column" gap="12px">
              <Text>업데이트 예정일</Text>
              <Date type="text" value={props?.date} disabled={true} />
            </Flex>
          </Flex>
          <Flex maxWidth="145px" direction="column" gap="12px">
            <Text>COMMENT 내용</Text>
            <TextInput placeholder="COMMENT 내용을 적어주세요" {...props.register('comment')} onChange={handleCommentChange} />
          </Flex>
        </Flex>
        <Flex width="100%" justifyContent="right">
          <StyledButton type="submit" disabled={isCommentEmpty}>
            저장
          </StyledButton>
        </Flex>
      </Stack>
    </Container>
  );
};

export default UpdateForm;

UpdateForm.defaultProps = {
  options: [
    {
      label: 'ver 2.3.5',
      value: '2.3.5',
      updateDate: '2023.01.02 11:00',
    },
    {
      label: 'ver 2.3.6',
      value: '2.3.6',
      updateDate: '2023.01.03 11:00',
    },
  ],
};

const Container = styled.form`
  display: flex;
  height: 100%;
  padding: 24px;
  border-radius: 24px;
  background: ${theme.colors.white};
`;

const Title = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
`;

const Text = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Date = styled.input`
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  border-radius: 10px;
  border: 1px solid ${theme.colors.gray4};
  background: ${theme.colors.white};

  color: ${theme.colors.grayBlack};
  font-family: Pretendard Semibold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.28px;
  height: 40px;
`;

const TextInput = styled.textarea`
  display: flex;
  width: 480px;
  height: 320px;
  padding: 16px 24px;
  align-items: flex-start;
  &::placeholder {
    color: ${theme.colors.gray2};
    font-family: Pretendard Bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.32px;
  }
  gap: 10px;

  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
  background: ${theme.colors.white};
`;

const StyledButton = styled.button`
  display: flex;
  width: 312px;
  height: 56px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 16px;
  background: ${theme.colors.blue};

  color: ${theme.colors.white};
  font-family: Pretendard Bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;
