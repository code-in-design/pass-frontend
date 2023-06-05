import React from 'react';
import styled from '@emotion/styled';
import Select from '@/components/Select';
import { UseFormRegister, FieldValues, UseFormSetValue, UseFormGetValues, Controller } from 'react-hook-form';
import GradeInputFormItem from './GradeInputForm/GradeInputFormItem';
import GradeScoreInput from './GradeInputForm/GradeScoreInput';
import InfoIcon from '../../../../public/images/icons/info.svg';

interface Props {
  inquiry1?: { value: string; label: string }[];
  inquiry2?: { value: string; label: string }[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  onClickPrevButton: () => void;
  selectValue: [any, any, any];
}

const Korean = ['언어와 매체', '화법과 작문'];
const Math = ['확률과 통계', '미적분', '기하'];

const FinalGrades = (props: Props) => {
  return (
    <>
      <Wrapper>
        <Left>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="국어" isRequire={true} isChoice={Korean}>
            <GradeScoreInputWrapper>
              <GradeScoreInput
                register={props.register}
                setValue={props.setValue}
                getValues={props.getValues}
                name="koreanStandardScore"
                min={0}
                max={200}
                title="표준점수"
                width="179.67px"
                margintTop="12px"
                marginBottom="8px"
                placeholder="표준점수"
                placeholderAlign="left"
              />
              <GradeScoreInput
                register={props.register}
                setValue={props.setValue}
                getValues={props.getValues}
                name="koreanPercentile"
                min={0}
                max={100}
                title="백분위"
                width="179.67px"
                margintTop="12px"
                marginBottom="8px"
                placeholder="백분위"
                placeholderAlign="left"
              />
              <GradeScoreInput
                register={props.register}
                setValue={props.setValue}
                getValues={props.getValues}
                name="koreanGrade"
                min={1}
                max={9}
                title="등급"
                width="179.67px"
                margintTop="12px"
                marginBottom="8px"
                placeholder="등급"
                placeholderAlign="left"
              />
            </GradeScoreInputWrapper>
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="수학" isRequire={true} isChoice={Math}>
            <FlexWrapper alignItems="flex-end">
              <GradeScoreInputWrapper>
                <GradeScoreInput
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="mathStandardScore"
                  min={0}
                  max={200}
                  title="표준점수"
                  width="179.67px"
                  margintTop="12px"
                  marginBottom="8px"
                  placeholder="표준점수"
                  placeholderAlign="left"
                />
                <GradeScoreInput
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="mathPercentile"
                  min={0}
                  max={100}
                  title="백분위"
                  width="179.67px"
                  margintTop="12px"
                  marginBottom="8px"
                  placeholder="백분위"
                  placeholderAlign="left"
                />
                <GradeScoreInput
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="mathGrade"
                  min={1}
                  max={9}
                  title="등급"
                  width="179.67px"
                  margintTop="12px"
                  marginBottom="8px"
                  placeholder="등급"
                  placeholderAlign="left"
                />
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
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="inquiry1StandardScore"
                  min={0}
                  max={200}
                  title="표준점수"
                  width="88px"
                  margintTop="12px"
                  placeholder="표준점수"
                  placeholderAlign="center"
                  titleAlign="center"
                />
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="inquiry1Percentile"
                  min={0}
                  max={100}
                  title="백분위"
                  width="88px"
                  margintTop="12px"
                  placeholder="백분위"
                  placeholderAlign="center"
                  titleAlign="center"
                />
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="inquiry1Grade"
                  min={1}
                  max={9}
                  title="등급"
                  width="88px"
                  margintTop="12px"
                  placeholder="등급"
                  placeholderAlign="center"
                  titleAlign="center"
                />
              </GradeScoreInputWrapper>
            </SelectWrapper>
            <SelectWrapper>
              <SubjectTitle>선택 2</SubjectTitle>
              <SelectMargin>
                <Select size="md" width="211px" options={props.inquiry2} placeholder="과목 선택" name="inquiry2OptionalSubject" setValue={props.setValue} register={props.register} required={'과목을 선택해주세요'} />
              </SelectMargin>
              <GradeScoreInputWrapper>
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  getValues={props.getValues}
                  setValue={props.setValue}
                  name="inquiry2StandardScore"
                  min={0}
                  max={200}
                  width="88px"
                  margintTop="12px"
                  placeholder="표준점수"
                  placeholderAlign="center"
                />
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="inquiry2Percentile"
                  min={0}
                  max={100}
                  width="88px"
                  margintTop="12px"
                  placeholder="백분위"
                  placeholderAlign="center"
                />
                <GradeScoreInput
                  selectValue={props.selectValue}
                  register={props.register}
                  setValue={props.setValue}
                  getValues={props.getValues}
                  name="inquiry2Grade"
                  min={1}
                  max={9}
                  width="88px"
                  margintTop="12px"
                  placeholder="등급"
                  placeholderAlign="center"
                />
              </GradeScoreInputWrapper>
            </SelectWrapper>
          </GradeInputFormItem>
        </Left>

        <Right>
          <GradeInputFormItem register={props.register} setValue={props.setValue} title="영어" isRequire={true} marginTop="4px">
            <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="englishGrade" min={1} max={9} width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="한국사" isRequire={true} marginTop="4px">
            <GradeScoreInput register={props.register} setValue={props.setValue} getValues={props.getValues} name="historyGrade" min={1} max={9} width="224px" margintTop="44px" marginBottom="12px" alignItems="flex-end" inputText="등급" />
          </GradeInputFormItem>

          <GradeInputFormItem register={props.register} setValue={props.setValue} title="내신" marginTop="4px">
            <FlexWrapper alignItems="flex-end">
              <SubTitle>전 과목 평균 등급</SubTitle>
              <GradeScoreInput
                register={props.register}
                setValue={props.setValue}
                getValues={props.getValues}
                name="naesinGrade"
                pattern={/^[1-9](\.\d{1,2})?$/}
                min={1.0}
                max={9.0}
                width="224px"
                margintTop="44px"
                wapperWidth="auto"
                inputText="등급"
              />
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
    </>
  );
};

export default FinalGrades;

FinalGrades.defaultProps = {
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

const GradeScoreInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0 12px;
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
  margin-right: 14px;
  min-width: 41px;
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

const SelectMargin = styled.div`
  margin-right: 12px;
`;
