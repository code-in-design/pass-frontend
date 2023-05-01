import { Box, Button, Checkbox, Divider, Flex, Input, Text, VStack, createMultiStyleConfigHelpers, ChakraProvider, Image, Spacer, defineStyle, extendTheme } from '@chakra-ui/react';
import { checkboxAnatomy } from '@chakra-ui/anatomy';

const SignIn = () => {
  const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);

  const sizes = {
    md: definePartsStyle({
      control: defineStyle({
        boxSize: '15px',
        borderColor: '#9395a6',
        margin: '2.5px',
      }),
      label: defineStyle({
        fontSize: '14px',
        fontcolor: '#9395a6',
      }),
    }),
  };
  const checkboxTheme = defineMultiStyleConfig({ sizes });
  const theme = extendTheme({
    components: { Checkbox: checkboxTheme },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box backgroundColor="#f3f4fa" padding="132px 0">
        <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px">
          <Text>LOGO</Text>
          <VStack margin="80px 0 24px">
            <Button w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#ffe812" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px">
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
            <Checkbox fontWeight={500} spacing="4px" size="md">
              <Text fontSize="14px" lineHeight="16px" letterSpacing="-0.02px" color="#9395a6">
                자동 로그인
              </Text>
            </Checkbox>
            <Spacer />
            <Text fontSize="12px" lineHeight="16px" letterSpacing="-0.02px" color="#FE7575">
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
    </ChakraProvider>
  );
};

export default SignIn;
