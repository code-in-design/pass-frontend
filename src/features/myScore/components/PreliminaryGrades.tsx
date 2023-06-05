import React from 'react';
import styled from '@emotion/styled';
import Select from '@/components/Select';
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import Help from '../../../../public/images/icons/helpOutline.svg';
import GradeInputFormItem from './GradeInputForm/GradeInputFormItem';
import GradeScoreInput from './GradeInputForm/GradeScoreInput';
import InfoIcon from '../../../../public/images/icons/info.svg';
import MyTooltip from '@/components/Tooltip';

interface Props {
  inquiry1?: { value: string; label: string }[];
  inquiry2?: { value: string; label: string }[];
  selectValue: [any, any, any];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  onClickPrevButton: () => void;
  onClickNextButton: () => void;
}

const Korean = ['언어와 매체', '화법과 작문'];
const Math = ['확률과 통계', '미적분', '기하'];

const PreliminaryGrades = (props: Props) => {
  return (
    <>
      <Wrapper>
        <Left>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="국어" isRequire={true} isChoice={Korean}>
            <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="koreanScore" min={0} max={100} title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점" />
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="수학" isRequire={true} isChoice={Math}>
            <FlexWrapper alignItems="flex-end">
              <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="mathScore" min={0} max={100} title="원점수" width="296px" margintTop="12px" marginBottom="8px" inputText="점">
                <CheckboxWrapper>
                  <Checkbox type="checkbox" id="mathDropout" {...props.register('mathDropout')} />
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

          <GradeInputFormItem title="탐구" isRequire={true} register={props.register} setValue={props.setValue}>
            <SelectWrapper>
              <SubjectTitle>선택 1</SubjectTitle>
              <Select size="md" width="247px" options={props.inquiry1} placeholder="과목 선택" name="inquiry1Type" setValue={props.setValue} register={props.register} required={'과목을 선택해주세요'} />
              <GradeScoreInput
                selectValue={props.selectValue}
                register={props.register}
                setValue={props.setValue}
                getValues={props.getValues}
                name="inquiry1Score"
                min={0}
                max={50}
                width="243px"
                title="점수"
                margintTop="12px"
                wapperWidth="auto"
                inputText="점"
              />
            </SelectWrapper>
            <SelectWrapper>
              <SubjectTitle>선택 2</SubjectTitle>
              <Select size="md" width="247px" options={props.inquiry2} placeholder="과목 선택" name="inquiry2Type" setValue={props.setValue} register={props.register} required={'과목을 선택해주세요'} />
              <GradeScoreInput selectValue={props.selectValue} register={props.register} setValue={props.setValue} getValues={props.getValues} name="inquiry2Score" min={0} max={50} width="243px" margintTop="8px" wapperWidth="auto" inputText="점" />
            </SelectWrapper>
          </GradeInputFormItem>
        </Left>

        <Right>
          <GradeInputFormItem title="영어" isRequire={true} marginTop="4px" register={props.register} setValue={props.setValue}>
            <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="englishGrade" min={1} max={9} width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem title="한국사" isRequire={true} marginTop="4px" register={props.register} setValue={props.setValue}>
            <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="historyGrade" min={1} max={9} width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem title="내신" marginTop="4px" register={props.register} setValue={props.setValue}>
            <FlexWrapper alignItems="flex-end">
              <SubTitle>전 과목 평균 등급</SubTitle>
              <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} min={1.0} max={9.0} name="naesinGrade" width="224px" margintTop="44px" wapperWidth="auto" inputText="등급" />
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
    </>
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

const Form = styled.form``;

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
  color: ${props => props.theme.colors.gray1};
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
  background-color: ${props => props.theme.colors.green};
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
  color: ${props => props.theme.colors.gray1};
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
  color: ${props => props.theme.colors.grayBlack};
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
  color: ${props => props.theme.colors.blue};
  margin-right: 4px;
`;

const InfoText = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.blue};
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 210px;
  height: 56px;
  border-radius: 16px;
  padding: 18px 10px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  cursor: pointer;
  :first-of-type {
    color: ${props => props.theme.colors.gray2};
    background-color: ${props => props.theme.colors.gray4};
    margin-right: 12px;
  }
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
