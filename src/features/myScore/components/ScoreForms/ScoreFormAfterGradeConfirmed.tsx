import React from 'react';
import styled from '@emotion/styled';
import { UseFormRegister, FieldValues, UseFormSetValue, UseFormGetValues } from 'react-hook-form';
import Select from '@/components/Select';
import GradeInputFormItem from '../GradeInputForm/GradeInputFormItem';
import GradeScoreInput from '../GradeInputForm/GradeScoreInput';
import InfoIcon from '../../../../../public/images/icons/info.svg';
import { Bottom, Button, Buttons, Circle, Description, FlexWrapper, InfoIconWrapper, InfoText, Information, Informations, Left, Right, ScoreInput, SelectWrapper, SubTitle, SubjectTitle, Wrapper } from './index.styles';

export interface ScoreFormAfterGradeConfirmedProps {
  inquiry1?: { value: string; label: string }[];
  inquiry2?: { value: string; label: string }[];
  korean?: Array<string>;
  math?: Array<string>;
  unRequiredFields: [any, any, any];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onClickPrevButton: () => void;
  handleSubmit?: any;
}

const ScoreFormAfterGradeConfirmed = (props: ScoreFormAfterGradeConfirmedProps) => {
  return (
    <form onSubmit={props?.handleSubmit}>
      <Wrapper>
        <Left>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="국어" isRequire={true} isChoice={props.korean}>
            <GradeScoreInputWrapper>
              <GradeScoreInput title="표준점수" width="179.67px" margintTop="12px" marginBottom="8px">
                <ScoreInput
                  {...props.register('koreanStandardScore', {
                    required: '국어과목의 표준점수를 입력해주세요.',
                    onChange: e => {
                      e.target.value = e.target.value.substr(0, 3);
                    },
                  })}
                  placeholder="표준점수"
                  placeholderAlign="left"
                  type="number"
                  min={0}
                  max={200}
                  onInput={e => {
                    if (Number(e.target) > 200) {
                      console.log(e);
                    }
                  }}
                />
              </GradeScoreInput>
              <GradeScoreInput title="백분위" width="179.67px" margintTop="12px" marginBottom="8px">
                <ScoreInput
                  {...props.register('koreanPercentile', { required: '국어과목의 백분위점수를 입력해주세요.' })}
                  placeholder="백분위"
                  placeholderAlign="left"
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
              <GradeScoreInput title="등급" width="179.67px" margintTop="12px" marginBottom="8px">
                <ScoreInput
                  {...props.register('koreanGrade', { required: '국어등급을 입력해주세요.' })}
                  placeholder="등급"
                  placeholderAlign="left"
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
            </GradeScoreInputWrapper>
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="수학" isRequire={true} isChoice={props.math}>
            <FlexWrapper alignItems="flex-end">
              <GradeScoreInputWrapper>
                <GradeScoreInput title="표준점수" width="179.67px" margintTop="12px" marginBottom="8px">
                  <ScoreInput
                    {...props.register('mathStandardScore', { required: '수학과목의 표준점수를 입력해주세요.' })}
                    placeholder="표준점수"
                    placeholderAlign="left"
                    type="number"
                    min={0}
                    max={200}
                    onInput={e => {
                      if (Number(e.target) > 200) {
                        console.log(e);
                      }
                    }}
                  />
                </GradeScoreInput>
                <GradeScoreInput title="백분위" width="179.67px" margintTop="12px" marginBottom="8px">
                  <ScoreInput
                    {...props.register('mathPercentile', { required: '수학과목의 백분위점수를 입력해주세요.' })}
                    placeholder="백분위"
                    placeholderAlign="left"
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
                <GradeScoreInput title="등급" width="179.67px" margintTop="12px" marginBottom="8px">
                  <ScoreInput
                    {...props.register('mathGrade', { required: '수학등급을 입력해주세요.' })}
                    placeholder="등급"
                    placeholderAlign="left"
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
              </GradeScoreInputWrapper>
            </FlexWrapper>
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="탐구" isRequire={true}>
            <SelectWrapper>
              <SubjectTitle>선택 1</SubjectTitle>
              <SelectMargin>
                <Select size="md" width="211px" options={props.inquiry1} placeholder="과목 선택" name="inquiry1OptionalSubject" setValue={props.setValue} register={props.register} required="과목을 선택해주세요" />
              </SelectMargin>
              <GradeScoreInputWrapper>
                <GradeScoreInput title="표준점수" width="88px" margintTop="12px" titleAlign="center">
                  <ScoreInput
                    {...props.register('inquiry1StandardScore', { required: !(props.unRequiredFields?.[0] === '미응시') ? '탐구 선택1의 표준점수를 입력해주세요.' : false, disabled: props.unRequiredFields?.[0] === '미응시' ? true : false })}
                    placeholder="표준점수"
                    placeholderAlign="center"
                    type="number"
                    min={0}
                    max={200}
                    onInput={e => {
                      if (Number(e.target) > 200) {
                        console.log(e);
                      }
                    }}
                  />
                </GradeScoreInput>
                <GradeScoreInput title="백분위" width="88px" margintTop="12px" titleAlign="center">
                  <ScoreInput
                    {...props.register('inquiry1Percentile', { required: !(props.unRequiredFields?.[0] === '미응시') ? '탐구 선택1의 백분위를 입력해주세요.' : false, disabled: props.unRequiredFields?.[0] === '미응시' ? true : false })}
                    placeholder="백분위"
                    placeholderAlign="center"
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
                <GradeScoreInput title="등급" width="88px" margintTop="12px" titleAlign="center">
                  <ScoreInput
                    {...props.register('inquiry1Grade', { required: !(props.unRequiredFields?.[0] === '미응시') ? '탐구 선택1의 등급을 입력해주세요.' : false, disabled: props.unRequiredFields?.[0] === '미응시' ? true : false })}
                    placeholder="등급"
                    placeholderAlign="center"
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
              </GradeScoreInputWrapper>
            </SelectWrapper>
            <SelectWrapper>
              <SubjectTitle>선택 2</SubjectTitle>
              <SelectMargin>
                <Select size="md" width="211px" options={props.inquiry2} placeholder="과목 선택" name="inquiry2OptionalSubject" setValue={props.setValue} register={props.register} required={'과목을 선택해주세요'} />
              </SelectMargin>
              <GradeScoreInputWrapper>
                <GradeScoreInput width="88px" margintTop="12px">
                  <ScoreInput
                    {...props.register('inquiry2StandardScore', { required: !(props.unRequiredFields?.[1] === '미응시') ? '탐구 선택2의 표준점수를 입력해주세요.' : false, disabled: props.unRequiredFields?.[1] === '미응시' ? true : false })}
                    placeholder="표준점수"
                    placeholderAlign="center"
                    type="number"
                    min={0}
                    max={200}
                    onInput={e => {
                      if (Number(e.target) > 200) {
                        console.log(e);
                      }
                    }}
                  />
                </GradeScoreInput>
                <GradeScoreInput width="88px" margintTop="12px">
                  <ScoreInput
                    {...props.register('inquiry2Percentile', { required: !(props.unRequiredFields?.[1] === '미응시') ? '탐구 선택2의 백분위를 입력해주세요.' : false, disabled: props.unRequiredFields?.[1] === '미응시' ? true : false })}
                    placeholder="백분위"
                    placeholderAlign="center"
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
                <GradeScoreInput width="88px" margintTop="12px">
                  <ScoreInput
                    {...props.register('inquiry2Grade', { required: !(props.unRequiredFields?.[1] === '미응시') ? '탐구 선택2의 등급을 입력해주세요.' : false, disabled: props.unRequiredFields?.[1] === '미응시' ? true : false })}
                    placeholder="등급"
                    placeholderAlign="center"
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
              </GradeScoreInputWrapper>
            </SelectWrapper>
          </GradeInputFormItem>
        </Left>

        <Right>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="영어" isRequire={true} marginTop="4px">
            <GradeScoreInput width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급">
              <ScoreInput
                {...props.register('englishGrade', { required: '영어 등급을 입력해주세요.' })}
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

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="한국사" isRequire={true} marginTop="4px">
            <GradeScoreInput width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급">
              <ScoreInput
                {...props.register('historyGrade', { required: '한국사 등급을 입력해주세요.' })}
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

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="내신" marginTop="4px">
            <FlexWrapper alignItems="flex-end">
              <SubTitle>전 과목 평균 등급</SubTitle>
              <GradeScoreInput width="224px" margintTop="44px" wapperWidth="auto" inputText="등급">
                <ScoreInput
                  {...props.register('naesinGrade', {
                    onChange: e => {
                      e.target.value = e.target.value.substr(0, 4);
                    },
                  })}
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

export default ScoreFormAfterGradeConfirmed;

ScoreFormAfterGradeConfirmed.defaultProps = {
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

const GradeScoreInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 12px;
  width: 100%;
`;

const SelectMargin = styled.div`
  margin-right: 12px;
`;
