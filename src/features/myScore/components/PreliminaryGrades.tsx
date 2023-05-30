import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Select from '@/components/Select';
import { useForm } from 'react-hook-form';
import Help from '../../../../public/images/icons/helpOutline.svg';
import GradeInputFormItem from './GradeInputForm/GradeInputFormItem';
import GradeScoreInput from './GradeInputForm/GradeScoreInput';
import InfoIcon from '../../../../public/images/icons/info.svg';
import MyTooltip from '@/components/Tooltip';

interface Props {
  inquiry1?: { value: string; label: string }[];
  inquiry2?: { value: string; label: string }[];
}

const Korean = ['언어와 매체', '화법과 작문'];
const Math = ['확률과 통계', '미적분', '기하'];

const PreliminaryGrades = (props: Props) => {
  const { register, setValue, handleSubmit } = useForm();

  const onsubmit = data => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(onsubmit)}>
      <Wrapper>
        <Left>
          <GradeInputFormItem title="국어" isRequire={true} isChoice={Korean}>
            <GradeScoreInput register={register} setValue={setValue} name="koreanScore" title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점" />
          </GradeInputFormItem>

          <GradeInputFormItem title="수학" isRequire={true} isChoice={Math}>
            <FlexWrapper alignItems="flex-end">
              <GradeScoreInput register={register} setValue={setValue} name="mathScore" title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점">
                <CheckboxWrapper>
                  <Checkbox type="checkbox" id="mathDropout" {...register('mathDropout')} />
                  <Label htmlFor="mathDropout">수포자</Label>
                  <HelpIcon data-tooltip-id="tooltip-mathDropout">
                    <Help />
                  </HelpIcon>
                  <MyTooltip id="tooltip-mathDropout">
                    <TooltipContainer>
                      <TooltipText>수포자 체크시, 수학 영역은 모두 0점 처리되어 진행됩니다.</TooltipText>
                    </TooltipContainer>
                  </MyTooltip>
                </CheckboxWrapper>
              </GradeScoreInput>
            </FlexWrapper>
          </GradeInputFormItem>

          <GradeInputFormItem title="탐구" isRequire={true}>
            <SelectWrapper>
              <SubjectTitle>선택 1</SubjectTitle>
              <Select size="md" width="247px" options={props.inquiry1} placeholder="과목 선택" name="inquiry1Type" setValue={setValue} register={register} required={'과목을 선택해주세요'} />
              <GradeScoreInput register={register} setValue={setValue} name="inquiry1Score" width="243px" title="점수" margintTop="12px" wapperWidth="auto" inputText="점" />
            </SelectWrapper>
            <SelectWrapper>
              <SubjectTitle>선택 2</SubjectTitle>
              <Select size="md" width="247px" options={props.inquiry2} placeholder="과목 선택" name="inquiry2Type" setValue={setValue} register={register} required={'과목을 선택해주세요'} />
              <GradeScoreInput register={register} setValue={setValue} name="inquiry2Score" width="243px" margintTop="8px" wapperWidth="auto" inputText="점" />
            </SelectWrapper>
          </GradeInputFormItem>
        </Left>

        <Right>
          <GradeInputFormItem title="영어" isRequire={true} marginTop="4px">
            <GradeScoreInput register={register} setValue={setValue} name="englishGrade" width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem title="한국사" isRequire={true} marginTop="4px">
            <GradeScoreInput register={register} setValue={setValue} name="historyGrade" width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem title="내신" marginTop="4px">
            <FlexWrapper alignItems="flex-end">
              <SubTitle>전 과목 평균 등급</SubTitle>
              <GradeScoreInput register={register} setValue={setValue} name="naesinGrade" width="224px" margintTop="44px" wapperWidth="auto" inputText="등급" />
            </FlexWrapper>
            <Description>
              <Circle /> 내신 등급 입력은 선택입니다
            </Description>
            <Description>
              <Circle /> 평균 내신은 소수점 둘째 자리까지 입력해주세요
            </Description>
          </GradeInputFormItem>
        </Right>
      </Wrapper>
      <Bottom>
        <Informations>
          <Information>
            <InfoIconWrapper>
              <InfoIcon />
            </InfoIconWrapper>
            <InfoText>국어·수학·탐구 과목은 선택과목을 설정해야 입력할 수 있습니다.</InfoText>
          </Information>
          <Information>
            <InfoIconWrapper>
              <InfoIcon />
            </InfoIconWrapper>
            <InfoText>수능 성적은 저장 후 수정이 불가합니다.</InfoText>
          </Information>
        </Informations>
        <Buttons>
          <Button type="button">이전</Button>
          <Button type="submit">다음</Button>
        </Buttons>
      </Bottom>
    </Container>
  );
};

export default PreliminaryGrades;

PreliminaryGrades.defaultProps = {
  inquiry1: [
    { value: '미응시', label: '미응시' },
    { value: '생활과 윤리', label: '생활과 윤리' },
    { value: '윤리와 사상', label: '윤리와 사상' },
    { value: '한국지리', label: '한국지리' },
    { value: '세계지리', label: '세계지리' },
    { value: '동아시아사', label: '동아시아사' },
    { value: '세계사', label: '세계사' },
    { value: '경제', label: '경제' },
    { value: '정치와 법', label: '정치와 법' },
    { value: '사회문화', label: '사회문화' },
    { value: '물리학Ⅰ', label: '물리학Ⅰ' },
    { value: '화학Ⅰ', label: '화학Ⅰ' },
    { value: '생명과학Ⅰ', label: '생명과학Ⅰ' },
    { value: '지구과학Ⅰ', label: '지구과학Ⅰ' },
    { value: '물리학ⅠⅠ', label: '물리학ⅠⅠ' },
    { value: '화학ⅠⅠ', label: '화학ⅠⅠ' },
    { value: '생명과학ⅠⅠ', label: '생명과학ⅠⅠ' },
    { value: '지구과학ⅠⅠ', label: '지구과학ⅠⅠ' },
  ],
  inquiry2: [
    { value: '미응시', label: '미응시' },
    { value: '생활과 윤리', label: '생활과 윤리' },
    { value: '윤리와 사상', label: '윤리와 사상' },
    { value: '한국지리', label: '한국지리' },
    { value: '세계지리', label: '세계지리' },
    { value: '동아시아사', label: '동아시아사' },
    { value: '세계사', label: '세계사' },
    { value: '경제', label: '경제' },
    { value: '정치와 법', label: '정치와 법' },
    { value: '사회문화', label: '사회문화' },
    { value: '물리학Ⅰ', label: '물리학Ⅰ' },
    { value: '화학Ⅰ', label: '화학Ⅰ' },
    { value: '생명과학Ⅰ', label: '생명과학Ⅰ' },
    { value: '지구과학Ⅰ', label: '지구과학Ⅰ' },
    { value: '물리학ⅠⅠ', label: '물리학ⅠⅠ' },
    { value: '화학ⅠⅠ', label: '화학ⅠⅠ' },
    { value: '생명과학ⅠⅠ', label: '생명과학ⅠⅠ' },
    { value: '지구과학ⅠⅠ', label: '지구과학ⅠⅠ' },
  ],
};

const Container = styled.form``;

const Wrapper = styled.div`
  width: 100%;
  /* height: 592px; */
  display: flex;
  justify-content: space-between;
  gap: 0 24px;
`;

const Left = styled.div`
  min-width: 619px;
  width: 100%;
`;

const Right = styled.div`
  min-width: 397px;
  width: 100%;
`;

const FlexWrapper = styled.div<{ alignItems: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #636474;
  margin-bottom: 12px;
  min-width: 105px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #626474;
  margin-bottom: 4px;
  margin-top: 12px;
  :last-of-type {
    margin-top: 4px;
    margin-bottom: 0;
  }
`;

const Circle = styled.div`
  width: 4px;
  height: 4px;
  background-color: #60c8de;
  border-radius: 50%;
  margin-right: 4px;
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  :last-of-type {
    margin-top: 8px;
  }
`;

const SubjectTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #626474;
  margin-bottom: 12px;
  min-width: 41px;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  padding: 2.5px;
  margin-right: 7px;
`;
const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #353644;
  margin-right: 4px;
`;

const HelpIcon = styled.div`
  width: 16px;
  height: 16px;
`;

const Bottom = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Informations = styled.div``;

const Information = styled.div`
  display: flex;
  align-items: center;
  width: 445px;
  height: 40px;
  border-radius: 16px;
  padding: 8px 16px;
  background-color: rgba(107, 119, 248, 0.1);
  :first-of-type {
    margin-bottom: 8px;
  }
`;

const InfoIconWrapper = styled.div`
  color: #6b77f8;
  margin-right: 4px;
`;

const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: #6b77f8;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: #fff;
  background-color: #6b77f8;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  :first-of-type {
    color: #9395a6;
    background-color: #e4e6f0;
    margin-right: 12px;
  }
`;

// Tooltip
const TooltipText = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #353644;
  margin-left: 12px;
  text-align: left;
`;

const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
`;
