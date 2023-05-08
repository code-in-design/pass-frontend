import React, { useEffect } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';
import styled from '@emotion/styled';

const TermsOfService: React.FC = props => {
  const { register, handleSubmit, control, setValue } = useForm();

  // useEffect(() => {
  //   const subscription = watch(value => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe();
  // }, [watch]);
  const checkbox = useWatch({
    control,
    name: ['age', 'terms', 'privacy', 'marketing', 'event'],
  });

  const selectAll = useWatch({
    control,
    name: 'selectAll',
  });

  useEffect(() => {
    const length = checkbox.filter(x => x).length;
    setValue('selectAll', length === 5);
  }, [checkbox]);

  useEffect(() => {
    // selectAll가 true이면
    if (selectAll) {
      // TODO: 전체를 체크 하면 됨 (setValue활용)
      setValue('age', true);
      setValue('terms', true);
      setValue('privacy', true);
      setValue('marketing', true);
      setValue('event', true);
    } else {
      // selectAll가 false이면
      // TODO: 전체를 체크해제 하면 됨 (setValue활용)
      setValue('age', false);
      setValue('terms', false);
      setValue('privacy', false);
      setValue('marketing', false);
      setValue('event', false);
    }
  }, [selectAll]);

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Form>
        <Header>
          <HeaderCheckbox type="checkbox" id="selectAll" {...register('selectAll')} />
          <HeaderLabel htmlFor="selectAll">전체 동의</HeaderLabel>
          <HeaderOption>선택 항목 포함</HeaderOption>
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
          <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" />
        </Body>
        <Body>
          <BodyCheckbox type="checkbox" {...register('privacy', { required: true })} id="privacy" />
          <BodyLabel htmlFor="privacy">개인정보 수집 및 이용 동의</BodyLabel>
          <BodyOption color="#6B77F8">(필수)</BodyOption>
          <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" />
        </Body>
        <Body>
          <BodyCheckbox type="checkbox" {...register('marketing')} id="marketing" />
          <BodyLabel htmlFor="marketing">개인정보 마케팅 활용 동의</BodyLabel>
          <BodyOption>(선택)</BodyOption>
          <BodyArrowRight src="/images/icons/arrowRight.svg" alt="more" />
        </Body>
        <Body>
          <BodyCheckbox type="checkbox" {...register('event')} id="event" />
          <BodyLabel htmlFor="event">이벤트 알림 메일 및 SMS등 수신 동의</BodyLabel>
          <BodyOption>(선택)</BodyOption>
        </Body>
      </Form>
      <NextButton type="submit">다음단계로</NextButton>
    </FormWrapper>
  );
};

export default TermsOfService;

const FormWrapper = styled.form`
  width: 432px;
`;
const Form = styled.div`
  height: 296px;
  border-radius: 16px;
  padding: 32px 24px;
  border: 1px solid #e4e6f0;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
`;
const HeaderCheckbox = styled.input`
  width: 15px;
  height: 15px;
  color: #353644;
  border: 1px solid #353644;
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
const HeaderLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #353644;
  margin-right: 8px;
`;
const HeaderOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #626474;
`;
const Divider = styled.hr`
  color: #e4e6f0;
  margin: 24px 0;
`;
const Body = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const BodyCheckbox = styled.input`
  width: 14.17px;
  height: 14.17px;
  color: #626474;
  border: 1px solid #626474;
  padding: 2.5px;
  margin-right: 4px;
  margin-bottom: 2.5px;
`;
const BodyLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #626474;
  margin-right: 8px;
`;
const BodyOption = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.color || '#9395A6'};
`;
const BodyArrowRight = styled.img`
  padding: 5.35px 7.02px;
  margin-left: auto;
`;
const NextButton = styled.button`
  margin-top: 110px;
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  background-color: #6b77f8;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
