import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Filter from '../../../../../../../public/images/icons/filter.svg';
import ModalLayout from '@/components/Modal/ModalLayout';
import FindUniversityFilterModalItem from './UniversityFilterModalItem';
import { UseFormRegister, FieldValues, UseFormHandleSubmit } from 'react-hook-form';
import Check from '../../../../../../../public/images/icons/check.svg';
import Add from '../../../../../../../public/images/icons/add.svg';
import TwoThumbsRange from '@/components/Range/TwoThumbsRange';
import { VisuallyHiddenInput } from '@chakra-ui/react';

interface Props {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
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
      <FileterButton onClick={openModal}>
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
                    <CheckButton {...props.register('ga')}>
                      <IconWrapper>
                        <Add />
                      </IconWrapper>
                      가군
                    </CheckButton>
                    <CheckButton>
                      <VisuallyHiddenInput
                        type="checkbox"
                        defaultChecked
                        {...(props.register('na'),
                        (onchange = e => {
                          console.log(e);
                        }))}
                      />
                      나군
                    </CheckButton>
                    <CheckButton {...props.register('da')}>다군</CheckButton>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
                <FindUniversityFilterModalItem title="과목 반영" subtitle="* 중복 선택 가능합니다">
                  <FlexContainerSmall>
                    <SubTitle>국어</SubTitle>
                    <CheckButtonSmall {...props.register('koreanRequired')}>필수반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('koreanChoice')}>선택반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('koreanUnreflected')}>미반영</CheckButtonSmall>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>수학</SubTitle>
                    <CheckButtonSmall {...props.register('mathRequired')}>필수반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('mathChoice')}>선택반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('mathUnreflected')}>미반영</CheckButtonSmall>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>영어</SubTitle>
                    <CheckButtonSmall {...props.register('englishRequired')}>필수반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('englishChoice')}>선택반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('englishUnreflected')}>미반영</CheckButtonSmall>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>탐구</SubTitle>
                    <CheckButtonSmall {...props.register('inquiryRequired')}>필수반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('inquiryRequired')}>선택반영</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('inquiryUnreflected')}>미반영</CheckButtonSmall>
                  </FlexContainerSmall>
                  <CheckBoxWrapper>
                    <CheckBox type="checkbox" id="oneSubject" {...props.register('oneSubject')} />
                    <CheckBoxLabel htmlFor="oneSubject">1과목 반영 대학만 보기</CheckBoxLabel>
                  </CheckBoxWrapper>
                </FindUniversityFilterModalItem>
                <FindUniversityFilterModalItem title="지역 선택" subtitle="* 중복 선택 가능합니다">
                  <FlexContainer>
                    <CheckButton {...props.register('entire')}>전체</CheckButton>
                    <CheckButton {...props.register('seoul')}>서울권</CheckButton>
                    <CheckButton {...props.register('gyeonggi')}>경기권</CheckButton>
                    <CheckButton {...props.register('incheon')}>인천권</CheckButton>
                  </FlexContainer>
                  <FlexContainer>
                    <CheckButton {...props.register('gyeongNam')}>경남권</CheckButton>
                    <CheckButton {...props.register('gyeongBuk')}>경북권</CheckButton>
                    <CheckButton {...props.register('gangwonJeju')}>강원제주권</CheckButton>
                  </FlexContainer>
                  <FlexContainer>
                    <CheckButton {...props.register('gwangju')}>광주권</CheckButton>
                    <CheckButton {...props.register('jeolla')}>전라권</CheckButton>
                    <CheckButton {...props.register('chungcheong')}>충청권</CheckButton>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
                <FindUniversityFilterModalItem title="경쟁률 범위 설정" subtitle="* 2023학년도 기준입니다">
                  <TwoThumbsRange STEP={0.01} MAX={100} MIN={0} />
                </FindUniversityFilterModalItem>
              </Left>
              <Right>
                <FindUniversityFilterModalItem title="학과 계열" subtitle="* 학과명에 따른 분류입니다">
                  <FlexContainer>
                    <CheckButton {...props.register('physicalEducation')}>체육교육 지도</CheckButton>
                    <CheckButton {...props.register('sportsMedicine')}>스포츠의학</CheckButton>
                    <CheckButton {...props.register('sportsScience')}>스포츠과학</CheckButton>
                  </FlexContainer>
                  <FlexContainer>
                    <CheckButton {...props.register('sportsIndustry')}>스포츠산업</CheckButton>
                    <CheckButton {...props.register('securityGuard')}>경호 무도</CheckButton>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
                <FindUniversityFilterModalItem title="기여도" subtitle="* 중복 선택 가능합니다">
                  <FlexContainerSmall>
                    <SubTitle>수능 기여도</SubTitle>
                    <CheckButtonSmall {...props.register('examinationHigh')}>상</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('examinationMiddle')}>중</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('examinationLow')}>하</CheckButtonSmall>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>실기 기여도</SubTitle>
                    <CheckButtonSmall {...props.register('practiceHigh')}>상</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('practiceMiddle')}>중</CheckButtonSmall>
                    <CheckButtonSmall {...props.register('practiceLow')}>하</CheckButtonSmall>
                  </FlexContainerSmall>
                </FindUniversityFilterModalItem>
                <FindUniversityFilterModalItem title="실기 반영" subtitle="* 실기 선택을 해제할 경우, 해당 실기를 반영하지 않는 대학만 검색됩니다.">
                  <ExerciseTitle>점프</ExerciseTitle>
                  <FlexContainer>
                    <CheckButton {...props.register('standingLongJump')}>제자리멀리뛰기</CheckButton>
                    <CheckButton {...props.register('surgentJump')}>서전트 점프</CheckButton>
                  </FlexContainer>
                  <ExerciseTitle>유연성</ExerciseTitle>
                  <FlexContainer>
                    <CheckButton {...props.register('sittingFlexion')}>좌전굴</CheckButton>
                    <CheckButton {...props.register('standingFlexion')}>체전굴</CheckButton>
                  </FlexContainer>
                  <ExerciseTitle>던지기</ExerciseTitle>
                  <FlexContainer>
                    <CheckButton {...props.register('throwingMedicineBall')}>메디신볼던지기</CheckButton>
                    <CheckButton {...props.register('throwingHandball')}>핸드볼공던지기</CheckButton>
                  </FlexContainer>
                  <ExerciseTitle>기타종목</ExerciseTitle>
                  <FlexContainer>
                    <CheckButton {...props.register('sitUp')}>싯업</CheckButton>
                    <CheckButton {...props.register('backMuscleStrength')}>배근력</CheckButton>
                    <CheckButton {...props.register('pullUp')}>턱걸이 매달리기</CheckButton>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
              </Right>
            </Container>
            <Bottom>
              <CheckBox type="checkbox" id="completionTeaching" {...props.register('completionTeaching')} />
              <CheckBoxLabel htmlFor="completionTeaching">교직 이수 가능한 대학만 보기</CheckBoxLabel>
              <ResultButton type="submit">검색결과 000개 보기</ResultButton>
            </Bottom>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default UniversitySettingFilterModal;

const FileterButton = styled.div`
  max-width: 112px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 4px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding: 8px 24px;
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
const CheckButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  font-size: 14px;
  color: ${props => props.theme.colors.gray2};
`;
const CheckButton2 = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  font-size: 14px;
  color: ${props => props.theme.colors.gray2};
`;
const CheckButtonSmall = styled.button`
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  line-height: 16px;
  font-weight: 700;
  letter-spacing: -0.04em;
  font-size: 12px;
  color: ${props => props.theme.colors.gray2};
`;

const CheckBox = styled.input`
  margin-left: 40px;
`;

const CheckBoxLabel = styled.label`
  margin-left: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;

const IconWrapper = styled.div`
  margin-right: 8px;
`;

const CheckBoxWrapper = styled.div`
  margin-top: 8px;
  display: flex;
`;
