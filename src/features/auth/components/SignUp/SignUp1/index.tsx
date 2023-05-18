import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { Portal } from '@/components/Modal/Portal';
import { FormWrapper, Form, Header, HeaderCheckbox, HeaderLabel, HeaderOption, Body, BodyCheckbox, BodyLabel, BodyOption, BodyArrowRight, NextButton, Divider } from './index.styles';
import { terms, privercy, marketing } from './terms';
import TermsModal from './TermsModal';

interface Props {
  onNextButtonClick: () => void;
}

const SignUp1 = (props: Props) => {
  const { register, handleSubmit, control, setValue } = useForm();
  const checkboxItems = ['age', 'terms', 'privacy', 'marketing', 'event'];
  const [openTerm, setOpenTerm] = useState([false, false, false]);

  const checkbox = useWatch({
    control,
    name: checkboxItems,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const toggleAllCheckbox = (e: any) => {
    if (e.target.checked) {
      checkboxItems.map(item => setValue(item, true));
    } else {
      checkboxItems.map(item => setValue(item, false));
    }
  };

  // 전체 체크박스가 모두 active상태이면 전체체크를 active한다.
  const selectCheckbox = useCallback(() => {
    const length = checkbox.filter(x => x).length;
    setValue('selectAll', length === 5);
  }, [checkbox]);

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
  }, [checkbox]);

  return (
    <>
      {openTerm[0] && <Portal props={<TermsModal onCloseClick={closeModal} index={0} markdown={terms} title={'이용약관 동의'} />}></Portal>}
      {openTerm[1] && <Portal props={<TermsModal onCloseClick={closeModal} index={1} markdown={privercy} title={'개인정보 수집 및 이용 동의'} />}></Portal>}
      {openTerm[2] && <Portal props={<TermsModal onCloseClick={closeModal} index={2} markdown={marketing} title={'개인정보 마케팅 활용 동의'} />}></Portal>}
      <Box backgroundColor="#f3f4fa" padding="132px 0">
        <Box w="560px" h="760px" borderRadius="24px" backgroundColor="#fff" margin="0 auto" padding="64px" display="flex" flexDirection="column">
          <Text fontSize="24px" lineHeight="32px" fontWeight={700} marginBottom="16px">
            회원가입
          </Text>
          <Flex gap="8px" marginBottom="66px">
            <Tooltip label="1 / 6" isOpen hasArrow placement="bottom" bg="#60C8DE" fontSize="14px" fontWeight={700} borderRadius="8px" marginTop="6px" padding="4px 12px" shadow="none" zIndex={1}>
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
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <Form>
              <Header>
                <HeaderCheckbox type="checkbox" id="selectAll" {...register('selectAll', { onChange: toggleAllCheckbox })} />
                <HeaderLabel htmlFor="selectAll">전체 동의</HeaderLabel>
                <HeaderOption>선택 항목에 대한 동의 포함</HeaderOption>
              </Header>
              <Divider />
              <Body>
                <BodyCheckbox type="checkbox" id="age" {...register('age', { required: true })} />
                <BodyLabel htmlFor="age">만 14세 이상입니다.</BodyLabel>
                <BodyOption color="#6B77F8">(필수)</BodyOption>
              </Body>
              <Body>
                <BodyCheckbox type="checkbox" {...register('terms', { required: true })} id="terms" />
                <BodyLabel htmlFor="terms">이용약관 동의</BodyLabel>
                <BodyOption color="#6B77F8">(필수)</BodyOption>
                <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(0)} />
              </Body>
              <Body>
                <BodyCheckbox type="checkbox" {...register('privacy', { required: true })} id="privacy" />
                <BodyLabel htmlFor="privacy">개인정보 수집 및 이용 동의</BodyLabel>
                <BodyOption color="#6B77F8">(필수)</BodyOption>
                <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(1)} />
              </Body>
              <Body>
                <BodyCheckbox type="checkbox" {...register('marketing')} id="marketing" />
                <BodyLabel htmlFor="marketing">개인정보 마케팅 활용 동의</BodyLabel>
                <BodyOption>(선택)</BodyOption>
                <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" onClick={() => openModal(2)} />
              </Body>
              <Body>
                <BodyCheckbox type="checkbox" {...register('event')} id="event" />
                <BodyLabel htmlFor="event">이벤트 알림 메일 및 SMS등 수신 동의</BodyLabel>
                <BodyOption>(선택)</BodyOption>
              </Body>
            </Form>
            <NextButton type="submit" onClick={props.onNextButtonClick}>
              다음단계로
            </NextButton>
          </FormWrapper>
        </Box>
      </Box>
    </>
  );
};

export default SignUp1;