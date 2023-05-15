import { Box, Button, Checkbox, Divider, Flex, Input, Text, VStack, Image, Spacer } from '@chakra-ui/react';

const SignIn = () => {
  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px">
        <Image src="/images/logos/logo.svg" alt="Z-ONE" w="150px" h="60px" margin="0 auto" />
        <VStack margin="80px 0 24px">
          <Button w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#ffe812" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" color="#000000">
            <Image src="/images/icons/kakaoIcon.svg" alt="kakaoIcon" marginRight="10px" />
            카카오로 시작하기
          </Button>
          <Button w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#03C75A" color="#fff" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" marginTop="12px">
            <Image src="/images/icons/naverIcon.svg" alt="naverIcon" marginRight="10.83px" />
            네이버로 시작하기
          </Button>
        </VStack>
        <Flex align="center" marginBottom="24px">
          <Divider color="#B7B9C9" />
          <Text fontSize="12px" lineHeight="16px" fontWeight={700} letterSpacing="-0.02px" color="#b8b9c9" width="100%" textAlign="center">
            또는 이메일로 로그인
          </Text>
          <Divider color="#B7B9C9" />
        </Flex>
        <Input placeholder="이메일" h="56px" borderRadius="16px" padding="16px 24px" _placeholder={{ color: '#9395a6' }} fontSize="16px" border="1px solid #e4e6f0" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" />
        <Input
          placeholder="비밀번호"
          type="password"
          marginTop="12px"
          h="56px"
          borderRadius="16px"
          padding="16px 24px"
          _placeholder={{ color: '#9395a6' }}
          fontSize="16px"
          border="1px solid #e4e6f0"
          fontWeight={700}
          lineHeight="20px"
          letterSpacing="-0.02px"
        />
        <Flex marginTop="32px">
          <Checkbox fontWeight={500} spacing="6.5px" size="mdGray" borderColor="#9395a6">
            <Text fontSize="14px" lineHeight="16px" letterSpacing="-0.02px" color="#9395a6">
              자동 로그인
            </Text>
          </Checkbox>
          <Spacer />
          <Text fontSize="12px" lineHeight="16px" letterSpacing="-0.02px" color="#FE7575" fontWeight={600}>
            비밀번호가 올바르지 않습니다
          </Text>
        </Flex>
        <VStack marginTop="16px">
          <Button w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#6B77F8" color="#fff" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px">
            로그인
          </Button>
          <Button w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#fff" border="1px solid #6b77f8" color="#6b77f8" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" marginTop="12px">
            일반 회원가입하기
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignIn;
