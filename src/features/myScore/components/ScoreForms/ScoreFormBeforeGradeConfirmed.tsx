import React from 'react';
import styled from '@emotion/styled';
import { Control, FieldValues, UseFormRegister, UseFormSetValue, UseFormWatch, useWatch } from 'react-hook-form';
import Select from '@/components/Select';
import MyTooltip from '@/components/Tooltip';
import GradeInputFormItem from '../GradeInputForm/GradeInputFormItem';
import GradeScoreInput from '../GradeInputForm/GradeScoreInput';
import InfoIcon from '../../../../../public/images/icons/info.svg';
import Help from '../../../../../public/images/icons/helpOutline.svg';
import { Bottom, Button, Buttons, Circle, Description, FlexWrapper, InfoIconWrapper, InfoText, Information, Informations, Left, Right, ScoreInput, SelectWrapper, SubTitle, SubjectTitle, Wrapper } from './index.styles';

export interface ScoreFormBeforeGradeConfirmedProps {
  inquiry1?: { value: string; label: string }[];
  inquiry2?: { value: string; label: string }[];
  korean?: Array<string>;
  math?: Array<string>;
  unRequiredFields?: [any, any, any];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onClickPrevButton?: () => void;
  onClickNextButton?: () => void;
  control: Control<FieldValues, any>;
  handleSubmit: any;
}

const ScoreFormBeforeGradeConfirmed = (props: ScoreFormBeforeGradeConfirmedProps) => {
  const isMathRawDropout = useWatch({
    control: props.control,
    name: 'mathDropout',
  });
  const isOptionalSubject1 = useWatch({
    control: props.control,
    name: 'inquiry1OptionalSubject',
  });
  const isOptionalSubject2 = useWatch({
    control: props.control,
    name: 'inquiry2OptionalSubject',
  });

  return (
    <form onSubmit={props?.handleSubmit}>
      <Wrapper>
        <Left>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="국어" isRequire={true} isChoice={props.korean}>
            <GradeScoreInput title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점">
              <ScoreInput
                {...props?.register?.('koreanRawScore', {
                  required: '국어점수를 입력해주세요.',
                  onChange: e => {
                    e.target.value = e.target.value.substr(0, 3);
                  },
                })}
                type="number"
                min={0}
                max={100}
                onInput={e => {
                  if (Number(e.target) > 100) {
                    console.log(e);
                  }
                }}
              />
            </GradeScoreInput>
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} unRequiredFields={props.unRequiredFields} setValue={props.setValue} title="수학" isRequire={true} isChoice={props.math} isMathRawDropout={isMathRawDropout}>
            <FlexWrapper alignItems="flex-end">
              <GradeScoreInput title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점">
                <ScoreInput
                  {...props?.register?.('mathRawScore', {
                    required: isMathRawDropout ? false : '수학점수를 입력해주세요.',
                    disabled: isMathRawDropout ? true : false,
                  })}
                  type="number"
                  min={0}
                  max={100}
                  onInput={e => {
                    if (Number(e.target) > 100) {
                      console.log(e);
                    }
                  }}
                />
              </GradeScoreInput>
              <CheckboxWrapper>
                <Checkbox type="checkbox" id="mathDropout" {...props?.register?.('mathDropout')} />
                <Label htmlFor="mathDropout">수포자</Label>
                <HelpIcon data-tooltip-id="tooltip-mathDropout">
                  <Help />
                </HelpIcon>
                <MyTooltip id="tooltip-mathDropout" width="371px">
                  <TooltipContainer>
                    <TooltipText>수포자 체크시, 수학 영역은 모두 0점 처리되어 진행됩니다.</TooltipText>
                  </TooltipContainer>
                </MyTooltip>
              </CheckboxWrapper>
            </FlexWrapper>
          </GradeInputFormItem>

          <GradeInputFormItem title="탐구" isRequire={true} register={props.register} setValue={props.setValue}>
            <SelectWrapper>
              <SubjectTitle>선택 1</SubjectTitle>
              <SelectContainer>
                <Select height={44} border="16px" options={props.inquiry1} placeholder="과목 선택" name="inquiry1OptionalSubject" setValue={props.setValue} register={props.register} required={'과목을 선택해주세요'} />
              </SelectContainer>
              <GradeScoreInput width="243px" title="점수" margintTop="12px" wapperWidth="auto" inputText="점">
                <ScoreInput
                  {...props?.register?.('inquiry1RawScore', {
                    required: !isOptionalSubject1 ? '탐구 선택1의 점수를 입력해주세요.' : false,
                    disabled: isOptionalSubject1 === '미응시' ? true : false,
                  })}
                  type="number"
                  min={0}
                  max={50}
                  onInput={e => {
                    if (Number(e.target) > 50) {
                      console.log(e);
                    }
                  }}
                />
              </GradeScoreInput>
            </SelectWrapper>
            <SelectWrapper>
              <SubjectTitle>선택 2</SubjectTitle>
              <SelectContainer>
                <Select height={44} border="16px" options={props.inquiry2} placeholder="과목 선택" name="inquiry2OptionalSubject" setValue={props.setValue!} register={props.register!} required={'과목을 선택해주세요'} />
              </SelectContainer>
              <GradeScoreInput width="243px" margintTop="8px" wapperWidth="auto" inputText="점">
                <ScoreInput
                  {...props?.register?.('inquiry2RawScore', {
                    required: !isOptionalSubject2 ? '탐구 선택2의 점수를 입력해주세요.' : false,
                    disabled: isOptionalSubject2 === '미응시' ? true : false,
                  })}
                  type="number"
                  min={0}
                  max={50}
                  onInput={e => {
                    if (Number(e.target) > 50) {
                      console.log(e);
                    }
                  }}
                />
              </GradeScoreInput>
            </SelectWrapper>
          </GradeInputFormItem>
        </Left>

        <Right>
          <GradeInputFormItem title="영어" isRequire={true} marginTop="4px" register={props.register} setValue={props.setValue}>
            <GradeScoreInput width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급">
              <ScoreInput
                {...props?.register?.('englishGrade', { required: '영어 등급을 입력해주세요.' })}
                type="number"
                min={1}
                max={9}
                onInput={e => {
                  if (Number(e.target) > 0 && Number(e.target) < 9) {
                    console.log(e);
                  }
                }}
              />
            </GradeScoreInput>
          </GradeInputFormItem>

          <GradeInputFormItem title="한국사" isRequire={true} marginTop="4px" register={props.register} setValue={props.setValue}>
            <GradeScoreInput width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급">
              <ScoreInput
                {...props?.register?.('historyGrade', { required: '한국사 등급을 입력해주세요.' })}
                type="number"
                min={1}
                max={9}
                onInput={e => {
                  if (Number(e.target) > 0 && Number(e.target) < 9) {
                    console.log(e);
                  }
                }}
              />
            </GradeScoreInput>
          </GradeInputFormItem>

          <GradeInputFormItem title="내신" marginTop="4px" register={props.register} setValue={props.setValue}>
            <FlexWrapper alignItems="flex-end">
              <SubTitle>전 과목 평균 등급</SubTitle>
              <GradeScoreInput width="224px" margintTop="44px" wapperWidth="auto" inputText="등급">
                <ScoreInput
                  {...props?.register?.('naesinGrade', {
                    onChange: e => {
                      e.target.value = e.target.value.substr(0, 4);
                    },
                  })}
                  type="number"
                  min={1.0}
                  max={9.0}
                  step={0.01}
                  // onInput={e => {
                  //   if (Number(e.target) > 0 && Number(e.target) < 9) {
                  //     console.log(e);
                  //   }
                  // }}
                />
              </GradeScoreInput>
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
          <Button type="button" onClick={props.onClickPrevButton}>
            이전
          </Button>
          <Button type="submit">다음</Button>
        </Buttons>
      </Bottom>
    </form>
  );
};

export default ScoreFormBeforeGradeConfirmed;

ScoreFormBeforeGradeConfirmed.defaultProps = {
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
  korean: ['언어와 매체', '화법과 작문'],
  math: ['확률과 통계', '미적분', '기하'],
};
//수포자 checkbox
const CheckboxWrapper = styled.div`
  width: 89px;
  margin-bottom: 18px;
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
  color: ${props => props.theme.colors.grayBlack};
  margin-right: 4px;
  white-space: nowrap;
`;

const HelpIcon = styled.div`
  width: 16px;
  height: 16px;
`;

// Tooltip
const TooltipText = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${props => props.theme.colors.grayBlack};
  margin-left: 12px;
  text-align: left;
`;

const TooltipContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 247px;
`;
