import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDaumPostcodePopup } from 'react-daum-postcode';

interface Props {
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

const SignUp4: React.FC<Props> = props => {
  const [address, setAddress] = useState('');
  const { register, setValue, watch } = useForm();
  const watchFields = watch(['email', 'address', 'zonecode']);
  const getValue = (name: string, value: ChangeEvent) => {
    setValue(name, value);
  };
  console.log(watchFields);
  const open = useDaumPostcodePopup();

  const handleComplete = data => {
    console.log(data);
    let fullAddress = data.address;
    let zoneCode = data.zonecode;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(zoneCode, fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setValue('address', fullAddress);
    setValue('zonecode', zoneCode);
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({
      onComplete: handleComplete,
      top: '300',
      left: '500',
    });
  };

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
          <Tooltip label="4 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} marginBottom="24px" color="#353644">
          기본 정보를 입력해주세요
        </Text>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
          이메일 주소
        </Text>
        <Box position="relative">
          <Input
            {...register('email', { required: true, onChange: e => getValue('email', e.target.value) })}
            variant="base"
            placeholder="example@naver.com"
            padding="18px 0 18px 56px"
            height="56px"
            color="#353644"
            fontSize="16px"
            lineHeight="20px"
            fontWeight={700}
            _placeholder={{ color: '#9395A6' }}
          />
          <Image src="/images/icons/email.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Text margin="24px 0 12px" fontSize="16px" lineHeight="20px" fontWeight={700} color="#626474">
          거주 지역
        </Text>
        <Flex gap="12px" marginBottom="12px" position="relative">
          <Input
            value={address}
            variant="base"
            disabled
            placeholder="지역을 선택해주세요"
            borderRadius="16px"
            width="306px"
            height="56px"
            padding="18px 0 18px 56px"
            color="#353644"
            _placeholder={{ color: '#9395A6' }}
            fontSize="16px"
            lineHeight="20px"
            fontWeight={700}
          />
          <Image src="/images/icons/cottage.svg" alt="call" position="absolute" top="18px" left="24px" />
          <Button onClick={handleClick} colorScheme="darkGray" height="56px" padding="18px 28px" fontSize="16px" lineHeight="20px" fontWeight={700}>
            지역 선택
          </Button>
        </Flex>
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

export default SignUp4;
