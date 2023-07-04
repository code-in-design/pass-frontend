import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Checkbox } from '@chakra-ui/react';
import { UseFormRegister, FieldValues, UseFormHandleSubmit, UseFormSetValue } from 'react-hook-form';
import ModalLayout from '@/components/Modal/ModalLayout';
import TwoThumbsRange from '@/components/Range/TwoThumbsRange';
import FindUniversityFilterModalItem from './UniversityFilterModalItem';
import Filter from '../../../../public/images/icons/filter.svg';
import { useRouter } from 'next/router';

interface Props {
  size: 'sm' | 'md';
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  onSubmit: (data) => void;
  filterResult: any;
}

const UniversityFilterModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  return (
    <>
      <FileterButton size={props.size} onClick={openModal}>
        <Filter />
        필터 열기
      </FileterButton>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Title>필터</Title>
          <form onSubmit={props.handleSubmit(props.onSubmit)}>
            <Container>
              <Left>
                <FindUniversityFilterModalItem title="모집시기" subtitle="* 중복 선택 가능합니다">
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('applyGroup')} value="가군" name="applyGroup" defaultChecked={router.query.모집군_리스트 === '가군'}>
                      가군
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('applyGroup')} value="나군" name="applyGroup" defaultChecked={router.query.모집군_리스트 === '나군'}>
                      나군
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('applyGroup')} value="다군" name="applyGroup" defaultChecked={router.query.모집군_리스트 === '다군'}>
                      다군
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="과목 반영" subtitle="* 중복 선택 가능합니다">
                  <FlexContainerSmall>
                    <SubTitle>국어</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('isKoreanRequired')} value="필수반영">
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isKoreanRequired')} value="선택반영">
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isKoreanRequired')} value="미반영">
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>수학</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('isMathRequired')} value="필수반영">
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isMathRequired')} value="선택반영">
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isMathRequired')} value="미반영">
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>영어</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('isEnglishRequired')} value="필수반영">
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isEnglishRequired')} value="선택반영">
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isEnglishRequired')} value="미반영">
                      미반영
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>탐구</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('isInquiryRequired')} value="필수반영">
                      필수반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isInquiryRequired')} value="선택반영">
                      선택반영
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('isInquiryRequired')} value="미반영">
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
                    <Checkbox size="checkButton" {...props.register('region')} value="전체">
                      전체
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="서울권" defaultChecked={router.query.지역_리스트 === '서울권'}>
                      서울권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="경기권" defaultChecked={router.query.지역_리스트 === '경기권'}>
                      경기권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="인천권">
                      인천권
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('region')} value="경남권">
                      경남권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="경북권">
                      경북권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="강원제주권">
                      강원제주권
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('region')} value="광주권">
                      광주권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="전라권">
                      전라권
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('region')} value="충청권">
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
                    <Checkbox size="checkButton" {...props.register('department')} value="체육교육·지도" defaultChecked={router.query.학과_계열_리스트 === '체육교육과'}>
                      체육교육 지도
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('department')} value="스포츠의학">
                      스포츠의학
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('department')} value="스포츠과학">
                      스포츠과학
                    </Checkbox>
                  </FlexContainer>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('department')} value="스포츠산업">
                      스포츠산업
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('department')} value="경호무도">
                      경호 무도
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="기여도" subtitle="* 중복 선택 가능합니다" tooltip>
                  <FlexContainerSmall>
                    <SubTitle>수능 기여도</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('testContribution')} value="최상">
                      최상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('testContribution')} value="상">
                      상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('testContribution')} value="중">
                      중
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('testContribution')} value="하">
                      하
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('testContribution')} value="최하">
                      최하
                    </Checkbox>
                  </FlexContainerSmall>
                  <FlexContainerSmall>
                    <SubTitle>실기 기여도</SubTitle>
                    <Checkbox size="noControlCheckbox" {...props.register('practicalContribution')} value="최상">
                      최상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practicalContribution')} value="상">
                      상
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practicalContribution')} value="중">
                      중
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practicalContribution')} value="하">
                      하
                    </Checkbox>
                    <Checkbox size="noControlCheckbox" {...props.register('practicalContribution')} value="최하">
                      최하
                    </Checkbox>
                  </FlexContainerSmall>
                </FindUniversityFilterModalItem>

                <FindUniversityFilterModalItem title="제외할 실기 종목">
                  <ExerciseTitle>점프</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="제자리멀리뛰기">
                      제자리멀리뛰기
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="서전트">
                      서전트 점프
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="높이뛰기">
                      높이뛰기
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>유연성</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="좌전굴">
                      좌전굴
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="체전굴">
                      체전굴
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>던지기</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="메디신볼던지기">
                      메디신볼던지기
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="핸드볼공던지기">
                      핸드볼공던지기
                    </Checkbox>
                  </FlexContainer>
                  <ExerciseTitle>기타종목</ExerciseTitle>
                  <FlexContainer>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="싯업">
                      싯업
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="배근력">
                      배근력
                    </Checkbox>
                    <Checkbox size="checkButton" {...props.register('exceptionPractical')} value="턱걸이(남),매달리기(여)">
                      턱걸이(남), 매달리기(여)
                    </Checkbox>
                  </FlexContainer>
                </FindUniversityFilterModalItem>
              </Right>
            </Container>
            <Bottom>
              <Checkbox size="greenCheckbox" {...props.register('completionTeaching')}>
                교직 이수 가능한 대학만 보기
              </Checkbox>
              <ResultButton type="submit">검색결과 {props.filterResult}개 보기</ResultButton>
            </Bottom>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default UniversityFilterModal;

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
