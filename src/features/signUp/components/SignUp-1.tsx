import { Box, Button, Checkbox, Divider, Flex, Text, Image, UnorderedList, ListItem, HStack, Tooltip, FormControl } from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Props {
  onNextButtonClick: () => void;
}

const SignUp: React.FC<Props> = props => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [next, setNext] = useState<boolean>(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (checkList.includes('age') && checkList.includes('terms') && checkList.includes('privacy')) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [checkList]);

  const onSubmit = (data: any, e: any) => console.log(data, e);
  const onError = (errors: any, e: any) => console.log(errors, e);

  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
        <Text fontSize="24px" lineHeight="32px" fontWeight={700} letterSpacing="-0.02px" marginBottom="16px">
          회원가입
        </Text>
        <Flex gap="8px" marginBottom="66px">
          <Tooltip label="1/6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} letterSpacing="-0.02px" marginBottom="24px" color="#353644">
          약관동의
        </Text>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <input {...(register('checkbox'), { required: true })} type="checkbox" value="all" />
          <input {...(register('checkbox'), { required: true })} type="checkbox" value="age" />
          <input {...(register('checkbox'), { required: true })} type="checkbox" value="terms" />
          <input {...register('checkbox')} type="checkbox" value="privacy" />
          <input type="submit" />
        </form>
        <Button
          colorScheme="blue"
          w="100%"
          h="56px"
          borderRadius="16px"
          fontSize="16px"
          bgColor="#6B77F8"
          color="#fff"
          fontWeight={700}
          lineHeight="20px"
          letterSpacing="-0.02px"
          marginTop="auto"
          isActive={next}
          onClick={() => props.onNextButtonClick()}
        >
          다음단계로
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
