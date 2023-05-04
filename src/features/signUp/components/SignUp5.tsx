import { Box, Button, Flex, Text, Image, Tooltip, Input } from '@chakra-ui/react';
import Select from 'react-select';
import styled from '@emotion/styled';

const gender = [
  { value: 'male', label: '남성' },
  { value: 'female', label: '여성' },
];

const grade = [
  { value: '1', label: '고1' },
  { value: '2', label: '고2' },
  { value: '3', label: '고3' },
  { value: '4', label: '재수 이상' },
];

interface Props {
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

const StyledSelect = styled(Select)`
  &.react-select {
    &-container {
      font-size: 16px;
      font-weight: 600;
      color: #626474;
      .react-select__control {
        height: 56px;
        border-radius: 16px;
        color: #e4e6f0;
        border: 1px solid #e4e6f0;
        box-shadow: 0 0 0 1px #e4e6f0;
        .react-select__value-container {
          padding: 0;
          margin: 0;
          padding-left: 24px;
        }
      }
      .react-select__control--menu-is-open {
        border-radius: 16px 16px 0 0;
      }

      .react-select__indicators {
        padding-right: 16px;
        .react-select__indicator-separator {
          display: none;
        }
      }
      .react-select__menu {
        border-radius: 0 0 16px 16px;
        margin: 0;
        &-list {
          padding: 0;
          .react-select__option {
            padding: 18px 24px;
            height: 56px;
            &--is-selected {
              background-color: #f8f8fc;
              color: #353644;
              font-weight: 700;
            }
            &--is-focused {
              /* background-color: #f8f8fc; */
              /* color: #353644; */
              /* font-weight: 700; */
            }
            &:last-child {
              border-radius: 0 0 16px 16px;
            }
          }
        }
      }
    }

    &__value-container {
      color: #353644;
      font-weight: 700;
    }
  }
`;

const SignUp5: React.FC<Props> = props => {
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
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#6B77F8" />
          <Tooltip label="5/6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px">
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
          </Tooltip>
          <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
        </Flex>
        <Text fontSize="20px" lineHeight="24px" fontWeight={600} letterSpacing="-0.02px" marginBottom="24px" color="#353644">
          추가 정보를 입력해주세요
        </Text>
        <Flex gap="16px">
          <Box width="100%">
            <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
              성별
            </Text>
            <StyledSelect className="react-select-container" classNamePrefix="react-select" options={gender} placeholder="성별 선택" />
          </Box>
          <Box width="100%">
            <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474">
              학년
            </Text>
            <StyledSelect className="react-select-container" classNamePrefix="react-select" options={grade} placeholder="학년 선택" />
          </Box>
        </Flex>
        <Text fontSize="16px" lineHeight="20px" fontWeight={700} marginBottom="12px" color="#626474" marginTop="24px">
          비밀번호 입력
        </Text>
        <Box position="relative">
          <Input variant="base" type="password" placeholder="8자 이상으로 입력해주세요" padding="18px 0 18px 56px" height="56px" fontSize="16px" lineHeight="20px" fontWeight={700} />
          <Image src="/images/icons/lock.svg" alt="person" position="absolute" top="18px" left="24px" />
        </Box>
        <Flex gap="12px" marginTop="auto">
          <Button colorScheme="gray" w="100%" h="56px" fontSize="16px" color="#626474" fontWeight={700} lineHeight="20px" letterSpacing="-0.02px" onClick={() => props.onPrevButtonClick()}>
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

export default SignUp5;
