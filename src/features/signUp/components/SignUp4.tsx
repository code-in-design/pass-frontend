import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';
type Props = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};
const SignUp4: React.FC<Props> = props => {
  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
        <Text fontSize="24px" lineHeight="32px" fontWeight={700} letterSpacing="-0.02px" marginBottom="16px">
          회원가입
        </Text>
        <Flex gap="8px" marginBottom="66px">
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="4/6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} letterSpacing="-0.02px" marginBottom="24px" color="#353644">
          기본 정보를 입력해주세요
        </Text>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
          이메일 주소
        </Text>
        <Box position="relative">
          <Input variant="base" placeholder="example@naver.com" padding="18px 0 18px 56px" height="56px" color="#9395A6" fontSize="16px" lineHeight="20px" fontWeight={700} />
          <Image src="/images/icons/email.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Text margin="24px 0 12px" fontSize="16px" lineHeight="20px" fontWeight={700} color="#626474">
          거주 지역
        </Text>
        <Flex gap="12px" marginBottom="12px" position="relative">
          <Input variant="base" disabled placeholder="지역을 선택해주세요" borderRadius="16px" width="306px" height="56px" padding="18px 0 18px 56px" color="#9395A6" fontSize="16px" lineHeight="20px" fontWeight={700} />
          <Image src="/images/icons/cottage.svg" alt="call" position="absolute" top="18px" left="24px" />
          <Button colorScheme="darkGray" height="56px" padding="18px 28px" fontSize="16px" lineHeight="20px" fontWeight={700}>
            지역 선택
          </Button>
        </Flex>
        <Flex gap="12px" marginTop="auto">
          <Button colorScheme="gray" w="100%" h="56px" fontSize="16px" color="#626474" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" onClick={() => props.setStep(3)}>
            이전
          </Button>
          <Button colorScheme="blue" w="100%" h="56px" fontSize="16px" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" onClick={() => props.setStep(5)}>
            다음
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp4;
