import { Box, Flex, Text, Tooltip, Portal } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldErrors, FieldValues, UseFormGetValues, UseFormRegister, UseFormReturn, UseFormSetError } from 'react-hook-form';
import { Form, Header, HeaderCheckbox, HeaderLabel, HeaderOption, Body, BodyCheckbox, BodyLabel, BodyOption, BodyArrowRight, NextButton, Divider } from './index.styles';
import { terms, privercy, marketing } from './terms';
import TermsModal from './TermsModal';

interface Props {
  onNextButtonClick: () => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormReturn['setValue'];
  getValues: UseFormGetValues<FieldValues>;
  checkbox: any;
}

const SignUp1 = (props: Props) => {
  const checkboxItems = ['agree_flag_14_age', 'agree_flag_terms', 'agree_flag_privacy', 'agree_flag_marketing', 'agree_flag_event'];
  const [openTerm, setOpenTerm] = useState([false, false, false]);
  // 전체 체크박스를 선택하면 나머지 항목이 같이 toggle된다.
  const toggleAllCheckbox = (e: any) => {
    if (e.target.checked) {
      checkboxItems.map(item => props.setValue(item, true));
    } else {
      checkboxItems.map(item => props.setValue(item, false));
    }
  };

  // 전체 체크박스가 모두 active상태이면 전체체크를 active한다.
  const selectCheckbox = useCallback(() => {
    const length = props.checkbox.filter(x => x).length;
    props.setValue('selectAll', length === 5);
  }, [props.checkbox]);

  //modal
  const openModal = useCallback(
    (index: number) => {
      const newArr = [false, false, false];
      newArr[index] = true;
      setOpenTerm(newArr);
    },
    [openTerm],
  );

  const closeModal = useCallback(
    (index: number) => {
      const newArr = [...openTerm];
      newArr[index] = false;
      setOpenTerm(newArr);
    },
    [openTerm],
  );

  useEffect(() => {
    selectCheckbox();
  }, [props.checkbox]);

  return (
    <>
      <Box backgroundColor="#f3f4fa" padding="132px 0">
        <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
          <Text fontSize="24px" lineHeight="32px" fontWeight={700} marginBottom="16px">
            회원가입
          </Text>
          <Flex gap="8px" marginBottom="66px">
            <Tooltip label="1 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none">
              <Box width="100%" height="8px" borderRadius="4px" bgColor="#60c8de" />
            </Tooltip>
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
            <Box width="100%" height="8px" borderRadius="4px" bgColor="#F3F4FA" />
          </Flex>
          <Text fontSize="20px" lineHeight="24px" fontWeight={600} marginBottom="24px" color="#353644">
            약관동의
          </Text>
          <Form>
            <Header>
              <HeaderCheckbox type="checkbox" id="selectAll" {...props.register('selectAll', { onChange: e => toggleAllCheckbox(e) })} />
              <HeaderLabel htmlFor="selectAll">전체 동의</HeaderLabel>
              <HeaderOption>선택 항목에 대한 동의 포함</HeaderOption>
            </Header>
            <Divider />
            <Body>
              <BodyCheckbox type="checkbox" id="agree_flag_14_age" {...props.register('agree_flag_14_age', { required: '필수항목을 선택해주세요.' })} />
              <BodyLabel htmlFor="agree_flag_14_age">만 14세 이상입니다.</BodyLabel>
              <BodyOption color="#6B77F8">(필수)</BodyOption>
            </Body>
            <Body>
              <BodyCheckbox type="checkbox" {...props.register('agree_flag_terms', { required: '필수항목을 선택해주세요.' })} id="agree_flag_terms" />
              <BodyLabel htmlFor="agree_flag_terms">이용약관 동의</BodyLabel>
              <BodyOption color="#6B77F8">(필수)</BodyOption>
              <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(0)} />
            </Body>
            <Body>
              <BodyCheckbox type="checkbox" {...props.register('agree_flag_privacy', { required: '필수항목을 선택해주세요.' })} id="agree_flag_privacy" />
              <BodyLabel htmlFor="agree_flag_privacy">개인정보 수집 및 이용 동의</BodyLabel>
              <BodyOption color="#6B77F8">(필수)</BodyOption>
              <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(1)} />
            </Body>
            <Body>
              <BodyCheckbox type="checkbox" {...props.register('agree_flag_marketing')} id="agree_flag_marketing" />
              <BodyLabel htmlFor="agree_flag_marketing">개인정보 마케팅 활용 동의</BodyLabel>
              <BodyOption>(선택)</BodyOption>
              <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(2)} />
            </Body>
            <Body>
              <BodyCheckbox type="checkbox" {...props.register('agree_flag_event')} id="agree_flag_event" />
              <BodyLabel htmlFor="agree_flag_event">이벤트 알림 메일 및 SMS등 수신 동의</BodyLabel>
              <BodyOption>(선택)</BodyOption>
            </Body>
          </Form>
          <NextButton type="button" onClick={props.onNextButtonClick}>
            다음단계로
          </NextButton>
        </Box>
      </Box>
      {openTerm[0] && (
        <Portal>
          <TermsModal onCloseClick={closeModal} index={0} markdown={terms} title={'이용약관 동의'} />
        </Portal>
      )}
      {openTerm[1] && (
        <Portal>
          <TermsModal onCloseClick={closeModal} index={1} markdown={privercy} title={'개인정보 수집 및 이용 동의'} />
        </Portal>
      )}
      {openTerm[2] && (
        <Portal>
          <TermsModal onCloseClick={closeModal} index={2} markdown={marketing} title={'개인정보 마케팅 활용 동의'} />
        </Portal>
      )}
    </>
  );
};

export default SignUp1;
