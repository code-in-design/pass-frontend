import Select from '@/components/Select';
import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';
import { FieldValues, UseFormRegister, UseFormReturn, useForm } from 'react-hook-form';

interface Props {
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
  gender?: { value: string; label: string }[];
  grade?: { value: string; label: string }[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormReturn['setValue'];
}

const SignUp5 = (props: Props) => {
  const { setValue } = useForm();

  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
        <Text fontSize="24px" lineHeight="32px" fontWeight={700} marginBottom="16px">
          회원가입
        </Text>
        <Flex gap="8px" marginBottom="66px">
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="5 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} marginBottom="24px" color="#353644">
          추가 정보를 입력해주세요
        </Text>
        <Flex gap="16px">
          <Box width="100%">
            <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
              성별
            </Text>
            <Select size="lg" options={props.gender} placeholder="성별 선택" name="gender" setValue={props.setValue} />
          </Box>
          <Box width="100%">
            <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
              학년
            </Text>
            <Select size="lg" options={props.grade} placeholder="학년 선택" name="grade" setValue={props.setValue} />
          </Box>
        </Flex>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474" marginTop="24px">
          비밀번호 입력
        </Text>
        <Box position="relative">
          <Input
            {...props.register('password', { required: true, minLength: 8, onChange: e => setValue('password', e.target.value) })}
            variant="base"
            type="password"
            placeholder="8자 이상으로 입력해주세요"
            padding="18px 0 18px 56px"
            height="56px"
            fontSize="16px"
            lineHeight="20px"
            fontWeight={700}
          />
          <Image src="/images/icons/lock.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Flex gap="12px" marginTop="auto">
          <Button colorScheme="gray" w="100%" h="56px" fontSize="16px" bgColor="#F3F4FA" color="#9395A6" fontWeight={700} lineHeight="20px" onClick={props.onPrevButtonClick}>
            이전
          </Button>
          <Button colorScheme="blue" w="100%" h="56px" fontSize="16px" fontWeight={700} lineHeight="20px" onClick={props.onNextButtonClick}>
            다음
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp5;

SignUp5.defaultProps = {
  gender: [
    { value: 'male', label: '남성' },
    { value: 'female', label: '여성' },
  ],
  grade: [
    { value: 'high1', label: '1학년' },
    { value: 'high2', label: '2학년' },
    { value: 'high3', label: '3학년' },
    { value: 'high4', label: '재수 이상' },
  ],
};
