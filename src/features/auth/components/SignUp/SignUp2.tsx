import { Box, Button, Flex, Text, Image, Tooltip, FormControl } from '@chakra-ui/react';
import { useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister, UseFormReturn } from 'react-hook-form';
import Info from '../../../../../public/images/icons/info.svg';

interface Props {
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormReturn['setValue'];
  errors: FieldErrors<FieldValues>;
}

const SignUp2 = (props: Props) => {
  const [active, setActive] = useState([false, false, false]);

  return (
    <Box backgroundColor="#f3f4fa" padding="132px 0">
      <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
        <Text fontSize="24px" lineHeight="32px" fontWeight={700} marginBottom="16px">
          회원가입
        </Text>
        <Flex gap="8px" marginBottom="66px">
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="2 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} marginBottom="24px" color="#353644">
          귀하의 신분을 선택해주세요
        </Text>
        <FormControl width="100%" h="100%" display="flex" flexDirection="column">
          <Button
            border="1px solid #e4e6f0"
            borderRadius="16px"
            padding="12px 16px"
            width="100%"
            height="72px"
            marginBottom="12px"
            fontSize="20px"
            fontWeight={600}
            lineHeight="20px"
            color="#626474"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="#fff"
            _hover={{ bgColor: '#F8F8FC' }}
            _active={{ bgColor: 'rgba(107, 119, 248, 0.1)', border: '1px solid #6b77f8' }}
            isActive={active[0]}
            {...props.register('type', { required: '신분을 선택해주세요' })}
            onClick={() => {
              setActive([true, false, false]);
              props.setValue('type', 'student');
            }}
          >
            <Image src="/images/icons/student.svg" alt="student" marginRight="12px" />
            학생입니다
          </Button>
          <Button
            border="1px solid #e4e6f0"
            borderRadius="16px"
            width="100%"
            height="72px"
            padding="12px 16px"
            marginBottom="12px"
            fontSize="20px"
            fontWeight={600}
            lineHeight="20px"
            color="#626474"
            bgColor="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ bgColor: '#F8F8FC' }}
            _active={{ bgColor: 'rgba(107, 119, 248, 0.1)', border: '1px solid #6b77f8' }}
            isActive={active[1]}
            {...props.register('type', { required: '신분을 선택해주세요' })}
            onClick={() => {
              setActive([false, true, false]);
              props.setValue('type', 'parents');
            }}
          >
            <Image src="/images/icons/parent.svg" alt="Parent" marginRight="12px" />
            학부모입니다
          </Button>
          <Button
            border="1px solid #e4e6f0"
            borderRadius="16px"
            padding="12px 16px"
            width="100%"
            height="72px"
            marginBottom="12px"
            fontSize="20px"
            fontWeight={600}
            lineHeight="20px"
            color="#626474"
            bgColor="#fff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            _hover={{ bgColor: '#F8F8FC' }}
            _active={{ bgColor: 'rgba(107, 119, 248, 0.1)', border: '1px solid #6b77f8' }}
            isActive={active[2]}
            {...props.register('type', { required: '신분을 선택해주세요' })}
            onClick={() => {
              setActive([false, false, true]);
              props.setValue('type', 'teacher');
            }}
          >
            <Image src="/images/icons/teacher.svg" alt="Teacher" marginRight="12px" />
            <Box textAlign="left">
              <Text fontSize="12px" fontWeight={600} color="#9395A6">
                학생을 관리하는
              </Text>
              교육자입니다
            </Box>
          </Button>
          <Flex borderRadius="16px" padding="12px 0 12px 16px" backgroundColor="rgba(96, 200, 222, 0.1)" alignItems="center" w="100%" fontSize="14px">
            <Box marginRight="10px" w="20px" h="20px" color="#60C8DE">
              <Info />
            </Box>
            <Text fontSize="14px" fontWeight={700} lineHeight="20px" color="#60C8DE">
              현재 교육자 기능은 학생 기능과 동일하며 추후 업데이트 예정입니다.
            </Text>
          </Flex>
          <Flex gap="12px" marginTop="auto">
            <Button type="button" colorScheme="gray" w="100%" h="56px" borderRadius="16px" fontSize="16px" bgColor="#F3F4FA" color="#9395A6" fontWeight={700} lineHeight="20px" onClick={props.onPrevButtonClick}>
              이전
            </Button>
            <Button id="identitySelectionComplete" type="button" colorScheme="blue" w="100%" h="56px" borderRadius="16px" fontSize="16px" fontWeight={700} lineHeight="20px" onClick={props.onNextButtonClick}>
              다음
            </Button>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SignUp2;
