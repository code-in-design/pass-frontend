import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';

interface Props {
  onPrevButtonClick: () => void;
}

const SignUp6 = (props: Props) => {
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
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="6 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} marginBottom="24px" color="#353644">
          추천해준 친구가 있나요?
        </Text>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
          추천코드 입력
        </Text>
        <Box position="relative">
          <Input variant="base" placeholder="추천코드를 입력해주세요" padding="18px 0 18px 56px" height="56px" fontSize="16px" lineHeight="20px" fontWeight={700} color="#353644" />
          <Image src="/images/icons/enterArrow.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Box display="flex" alignItems="flex-end" marginTop="16px">
          <Image src="/images/icons/tips.svg" alt="tip" marginRight="4px" />
          <Text fontSize="16px" lineHeight="16px" fontWeight={600} color="#60cbde">
            추천코드는 회원가입 이후에도 입력할 수 있어요!
          </Text>
        </Box>
        <Flex gap="12px" marginTop="auto">
          <Button colorScheme="gray" w="100%" h="56px" fontSize="16px" bgColor="#F3F4FA" color="#9395A6" fontWeight={700} lineHeight="20px" onClick={props.onPrevButtonClick}>
            이전
          </Button>
          <Button colorScheme="blue" w="100%" h="56px" fontSize="16px" fontWeight={700} lineHeight="20px">
            완료
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignUp6;
