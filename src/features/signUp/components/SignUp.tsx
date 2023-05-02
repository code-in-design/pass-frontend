import { Box, Button, Checkbox, Divider, Flex, Text, Image, UnorderedList, ListItem, HStack, Tooltip } from '@chakra-ui/react';
import React, { ChangeEvent, useEffect, useState } from 'react';

const SignUp = () => {
  const [checkList, setCheckList] = useState<string[]>([]);
  const [next, setNext] = useState<boolean>(false);
  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCheckList(['terms', 'age', 'privacy', 'marketing', 'event']) : setCheckList([]);
  };
  const check = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? setCheckList([...checkList, e.target.name]) : setCheckList(checkList.filter(el => el !== e.target.name));
  };

  useEffect(() => {
    if (checkList.includes('age') && checkList.includes('terms') && checkList.includes('privacy')) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [checkList]);
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
        <Box border="1px solid #e4e6f0" borderRadius="16px" padding="32px 24px">
          <Flex marginBottom="24px" alignItems="center">
            <Checkbox fontWeight={700} spacing="4px" size="lg" lineHeight="20px" name="all" onChange={checkAll} isChecked={checkList.length === 5 ? true : false}>
              전체 동의
            </Checkbox>
            <Text fontSize="12px" fontWeight="500" lineHeight="16px" letterSpacing="=0.02px" color="#626474" marginLeft="8px">
              선택 항목 포함
            </Text>
          </Flex>
          <Divider color="#e4e6f0" opacity="1" />
          <UnorderedList listStyleType="none" marginLeft="0" marginTop="24px" spacing="16px">
            <ListItem>
              <Flex alignItems="flex-end">
                <Checkbox fontWeight={500} spacing="4px" size="md" onChange={check} name="age" isChecked={checkList.includes('age') ? true : false}>
                  만 14세 이상입니다.
                </Checkbox>
                <Text fontSize="12px" fontWeight={500} lineHeight="16px" color="#6b77f8" marginLeft="8px">
                  (필수)
                </Text>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="flex-end">
                <Checkbox fontWeight={500} spacing="4px" size="md" onChange={check} name="terms" isChecked={checkList.includes('terms') ? true : false}>
                  이용약관 동의
                </Checkbox>
                <Text fontSize="12px" fontWeight={500} lineHeight="16px" color="#6b77f8" marginLeft="8px">
                  (필수)
                </Text>
                <Image src="/images/icons/arrowRight.svg" alt="more" padding="5.35px 7.52px" marginLeft="auto" />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="flex-end">
                <Checkbox fontWeight={500} spacing="4px" size="md" fontSize="14px" onChange={check} name="privacy" isChecked={checkList.includes('privacy') ? true : false}>
                  개인정보 수집 및 이용 동의
                </Checkbox>
                <Text fontSize="12px" fontWeight={500} lineHeight="16px" color="#6b77f8" marginLeft="8px">
                  (필수)
                </Text>
                <Image src="/images/icons/arrowRight.svg" alt="more" padding="5.35px 7.52px" marginLeft="auto" />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="flex-end">
                <Checkbox fontWeight={500} spacing="4px" size="md" onChange={check} name="marketing" isChecked={checkList.includes('marketing') ? true : false}>
                  개인정보 마케팅 활용 동의
                </Checkbox>
                <Text fontSize="12px" fontWeight={500} lineHeight="16px" color="#9395A6" marginLeft="8px">
                  (선택)
                </Text>
                <Image src="/images/icons/arrowRight.svg" alt="more" padding="5.35px 7.52px" marginLeft="auto" />
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="flex-end">
                <Checkbox fontWeight={500} spacing="4px" size="md" onChange={check} name="event" isChecked={checkList.includes('event') ? true : false}>
                  이벤트 알림 메일 및 SMS등 수신 동의
                </Checkbox>
                <Text fontSize="12px" fontWeight={500} lineHeight="16px" color="#9395A6" marginLeft="8px">
                  (선택)
                </Text>
              </Flex>
            </ListItem>
          </UnorderedList>
        </Box>
        <Button colorScheme="blue" w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#6B77F8" color="#fff" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" marginTop="auto" isActive={next}>
          다음단계로
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
