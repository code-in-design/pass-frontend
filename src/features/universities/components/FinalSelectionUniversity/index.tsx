import styled from '@emotion/styled';
import ModalLayout from '@/components/Modal/ModalLayout';
import Select from '@/components/Select';
import { useForm, useWatch } from 'react-hook-form';
import { useState } from 'react';

interface Props {
  onClickClose: () => void;
  first: { value: string; label: string }[];
  second: { value: string; label: string }[];
  third: { value: string; label: string }[];
}

const FinalSelectionUniversity = (props: Props) => {
  const { handleSubmit, register, control } = useForm();
  const universities = ['first'];
  // const [universities, setUniversities] = useState<string[]>();

  const selectUniversities = useWatch({
    control,
    name: universities,
  });

  const onSubmit = data => {
    // console.log(data);
    console.log(selectUniversities);
  };

  return (
    <ModalLayout onCloseClick={props.onClickClose}>
      <Container onClick={handleSubmit(onSubmit)}>
        <Title>최종 지원 대학 선정</Title>

        <SubTitle>최종적으로 지원한 대학을 선택하고 실기 기록에 따른 합격 확률을 계속 살펴볼 수 있어요!</SubTitle>
        <Info>
          <InfoImg src="/images/icons/infoBlue.svg" alt="info" />
          <InfoText>실기 기록 변경 횟수는 제한되어 있습니다.</InfoText>
        </Info>
        <SelectSection>
          <SelectWrapper>
            <SelectText>가군 지원대학</SelectText>
            {/* <Select size="md" options={props.first} placeholder="대학·학과 선택" {...register('first')} /> */}
          </SelectWrapper>
          <Select2 {...register('first')}>
            {props.first.map(value => (
              <option key={value.value} value={value.value}>
                {value.label}
              </option>
            ))}
          </Select2>
          <SelectWrapper>
            <SelectText>나군 지원대학</SelectText>
            <Select size="md" options={props.first} placeholder="대학·학과 선택" {...register('second')} />
          </SelectWrapper>
          <SelectWrapper>
            <SelectText>다군 지원대학</SelectText>
            {/* <Select size="md" options={props.first} placeholder="대학·학과 선택" {...register('third')} /> */}
          </SelectWrapper>
        </SelectSection>
        <Button>선택 완료</Button>
      </Container>
    </ModalLayout>
  );
};

export default FinalSelectionUniversity;

FinalSelectionUniversity.defaultProps = {
  first: [
    {
      value: '한양대학교 스포츠 사이언스 전공',
      label: '한양대학교 스포츠 사이언스 전공',
    },
    {
      value: '서울대학교 스포츠 사이언스 전공',
      label: '서울대학교 스포츠 사이언스 전공',
    },
  ],
  second: [
    {
      value: '한양대학교 스포츠 사이언스 전공',
      label: '한양대학교 스포츠 사이언스 전공',
    },
    {
      value: '서울대학교 스포츠 사이언스 전공',
      label: '서울대학교 스포츠 사이언스 전공',
    },
  ],
  third: [
    {
      value: '한양대학교 스포츠 사이언스 전공',
      label: '한양대학교 스포츠 사이언스 전공',
    },
    {
      value: '서울대학교 스포츠 사이언스 전공',
      label: '서울대학교 스포츠 사이언스 전공',
    },
  ],
};

const Container = styled.form`
  width: 432px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
  color: #191e25;
`;

const SubTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #626474;
  margin-bottom: 8px;
`;

const Info = styled.div`
  height: 44px;
  border-radius: 16px;
  padding: 12px 16px;
  background-color: rgba(107, 119, 248, 0.1);
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

const InfoImg = styled.img`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 10px;
`;
const InfoText = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: #6b77f8;
`;

const SelectSection = styled.div`
  margin-bottom: 24px;
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const SelectText = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  color: #626474;
  letter-spacing: -0.02em;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  padding: 16px 10px;
  color: #fff;
  background-color: #6b77f8;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const Select2 = styled.select``;
