import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';

interface Props {
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

const SignUp3: React.FC<Props> = props => {
  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
        <Text fontSize="24px" lineHeight="32px" fontWeight={700} letterSpacing="-0.02px" marginBottom="16px">
          회원가입
        </Text>
        <Flex gap="8px" marginBottom="66px">
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="3/6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} letterSpacing="-0.02px" marginBottom="24px" color="#353644">
          기존 회원가입 확인을 위해 본인인증을 해주세요
        </Text>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
          이름
        </Text>
        <Box position="relative">
          <Input variant="base" placeholder="이름을 입력해주세요" padding="18px 0 18px 56px" height="56px" fontSize="16px" lineHeight="20px" fontWeight={700} />
          <Image src="/images/icons/person.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Text margin="24px 0 12px" fontSize="16px" lineHeight="20px" fontWeight={700} color="#626474">
          연락처
        </Text>
        <Flex gap="12px" marginBottom="12px" position="relative">
          <Input variant="base" type="tel" placeholder='"-"를 제외하고 작성해주세요' width="306px" height="56px" padding="18px 0 18px 56px" fontSize="16px" lineHeight="20px" fontWeight={700} />
          <Image src="/images/icons/call.svg" alt="call" position="absolute" top="18px" left="24px" />
          <Button colorScheme="darkGray" height="56px" padding="18px 28px" color="#fff" fontSize="16px" lineHeight="20px" fontWeight={700}>
            인증요청
          </Button>
        </Flex>
        <Flex gap="12px">
          <Input variant="base" placeholder="인증번호를 작성해주세요" width="306px" height="56px" padding="18px 0 18lpx 24px" fontSize="16px" lineHeight="20px" fontWeight={700} disabled />
          <Text display="flex" alignItems="center" fontSize="16px" fontWeight={500} lineHeight="20px" color="#6B77F8">
            <Image src="/images/icons/history.svg" alt="time" marginRight="4px" width="20px" height="20px" />
            03:29 남음
          </Text>
        </Flex>
        <Flex gap="12px" marginTop="auto">
          <Button colorScheme="gray" w="100%" h="56px" borderRadius="16px" fontSize="16px" color="#626474" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" onClick={() => props.onPrevButtonClick()}>
            이전
          </Button>
          <Button colorScheme="blue" w="100%" h="56px" fontSize="16px" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" onClick={() => props.onNextButtonClick()}>
            다음
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp3;
