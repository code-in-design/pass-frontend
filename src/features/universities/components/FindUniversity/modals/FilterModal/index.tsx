import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Filter from '../../../../../../../public/images/icons/filter.svg';
import ModalLayout from '@/components/Modal/ModalLayout';
import FindUniversityFilterModalItem from './UniversityFilterModalItem';
import { UseFormRegister, FieldValues, UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form';
import TwoThumbsRange from '@/components/Range/TwoThumbsRange';
import { Checkbox } from '@chakra-ui/react';

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  size: 'sm' | 'md';
}

const UniversitySettingFilterModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <FileterButton size={props.size} onClick={openModal}>
        <Filter />
        필터 열기
      </FileterButton>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Title>필터</Title>
          <form onSubmit={props.handleSubmit(onSubmit)}>
            <Container>
              <Left>
                <FindUniversityFilterModalItem title="모집시기" subtitle="* 중복 선택 가능합니다">
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('ga')}>
                      가군
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('na')}>
                      나군
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('da')}>
                      다군
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="과목 반영" subtitle="* 중복 선택 가능합니다">
                  <FlexContainerSmall>
                    <SubTitle>국어</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('koreanRequired')}>
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('koreanChoice')}>
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('koreanUnreflected')}>
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>수학</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('mathRequired')}>
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('mathChoice')}>
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('mathUnreflected')}>
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>영어</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('englishRequired')}>
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('englishChoice')}>
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('englishUnreflected')}>
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>탐구</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('inquiryRequired')}>
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('inquiryChoice')}>
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('inquiryUnreflected')}>
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <CheckBoxWrapper>
                    <Checkbox size="greenCheckboxSmall" {...props.register('oneSubject')}>
                      1과목 반영 대학만 보기
                    </Checkbox>
                  </CheckBoxWrapper>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="지역 선택" subtitle="* 중복 선택 가능합니다">
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('entire')}>
                      전체
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('seoul')}>
                      서울권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('gyeonggi')}>
                      경기권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('incheon')}>
                      인천권
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('gyeongNam')}>
                      경남권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('gyeongBuk')}>
                      경북권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('gangwonJeju')}>
                      강원제주권
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('gwangju')}>
                      광주권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('jeolla')}>
                      전라권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('chungcheong')}>
                      충청권
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="경쟁률 범위 설정" subtitle="* 2023학년도 기준입니다">
                  <TwoThumbsRange STEP={0.01} MAX={100} MIN={0} register={props.register} setValue={props.setValue} />
                </FindUniversityFilterModalItem>
              </Left>

              <Right>
                <FindUniversityFilterModalItem title="학과 계열" subtitle="* 학과명에 따른 분류입니다">
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('entire')}>
                      전체
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('physicalEducation')}>
                      체육교육 지도
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('sportsMedicine')}>
                      스포츠의학
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('sportsScience')}>
                      스포츠과학
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('sportsIndustry')}>
                      스포츠산업
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('securityGuard')}>
                      경호 무도
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="기여도" subtitle="* 중복 선택 가능합니다" tooltip>
                  <FlexContainerSmall>
                    <SubTitle>수능 기여도</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('examinationTop')}>
                      최상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('examinationHigh')}>
                      상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('examinationMiddle')}>
                      중
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('examinationLow')}>
                      하
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('examinationBottom')}>
                      최하
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>실기 기여도</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('practiceTop')}>
                      최상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practiceHigh')}>
                      상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practiceMiddle')}>
                      중
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practiceLow')}>
                      하
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practiceBottom')}>
                      최하
                    </Checkbox>
                  </FlexContainerSmall>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="실기 반영" subtitle="* 실기 선택을 해제할 경우, 해당 실기를 반영하지 않는 대학만 검색됩니다.">
                  <ExerciseTitle>점프</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('standingLongJump')} defaultChecked>
                      제자리멀리뛰기
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('surgentJump')} defaultChecked>
                      서전트 점프
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('highJump')} defaultChecked>
                      높이뛰기
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>유연성</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('sittingFlexion')} defaultChecked>
                      좌전굴
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('standingFlexion')} defaultChecked>
                      체전굴
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>던지기</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('throwingMedicineBall')} defaultChecked>
                      메디신볼던지기
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('throwingHandball')} defaultChecked>
                      핸드볼공던지기
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>기타종목</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('sitUp')} defaultChecked>
                      싯업
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('backMuscleStrength')} defaultChecked>
                      배근력
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('pullUp')} defaultChecked>
                      턱걸이 매달리기
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
              </Right>
            </Container>
            <Bottom>
              <Checkbox size="greenCheckbox" {...props.register('completionTeaching')}>
                교직 이수 가능한 대학만 보기
              </Checkbox>
              <ResultButton type="submit">검색결과 000개 보기</ResultButton>
            </Bottom>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default UniversitySettingFilterModal;

const FileterButton = styled.div<{ size: string }>`
  max-width: ${props => (props.size === 'sm' ? '80px' : '112px')};
  height: ${props => (props.size === 'sm' ? '24px' : '32px')};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 4px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding: ${props => (props.size === 'sm' ? '4px 8px' : '8px 14px')};
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
  white-space: normal;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: -0.04em;
  margin-bottom: 12px;
`;

const Container = styled.div`
  min-width: 920px;
  display: flex;
  gap: 0 24px;
  padding-bottom: 33px;
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 100%;
`;

const ExerciseTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 8px;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 0 8px;
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const FlexContainerSmall = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  margin-bottom: 12px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SubTitle = styled.div`
  height: 16px;
  padding-right: 8px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: ${props => props.theme.colors.grayBlack};
  border-right: 1px solid ${props => props.theme.colors.gray4};
`;

const Bottom = styled.div`
  padding-top: 24px;
  border-top: 1px solid ${props => props.theme.colors.gray4};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ResultButton = styled.button`
  width: 184px;
  height: 56px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray1};
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
  margin-left: 16px;
`;

const CheckBoxWrapper = styled.div`
  margin-top: 8px;
  margin-left: 40px;
  display: flex;
`;
