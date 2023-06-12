import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Filter from '../../../../../../../public/images/icons/filter.svg';
import ModalLayout from '@/components/Modal/ModalLayout';
import FindUniversityFilterModalItem from './UniversityFilterModalItem';
import { CheckButton } from '@/components/Button';

interface Props {}

const UniversitySettingFilterModal = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);
  return (
    <>
      <FileterButton onClick={openModal}>
        <Filter />
        필터 열기
      </FileterButton>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={closeModal}>
          <Title>필터</Title>
          <Container>
            <Left>
              <FindUniversityFilterModalItem title="모집시기" subtitle="* 중복 선택 가능합니다">
                <FlexContainer>
                  <CheckButton>가군</CheckButton>
                  <CheckButton>나군</CheckButton>
                  <CheckButton>다군</CheckButton>
                </FlexContainer>
              </FindUniversityFilterModalItem>

              <FindUniversityFilterModalItem title="과목 반영" subtitle="* 중복 선택 가능합니다">
                <FlexContainer>
                  <SubTitle>국어</SubTitle>
                  <CheckButton>필수반영</CheckButton>
                  <CheckButton>선택반영</CheckButton>
                  <CheckButton>미반영</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <SubTitle>수학</SubTitle>
                  <CheckButton>필수반영</CheckButton>
                  <CheckButton>선택반영</CheckButton>
                  <CheckButton>미반영</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <SubTitle>영어</SubTitle>
                  <CheckButton>필수반영</CheckButton>
                  <CheckButton>선택반영</CheckButton>
                  <CheckButton>미반영</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <SubTitle>탐구</SubTitle>
                  <CheckButton>필수반영</CheckButton>
                  <CheckButton>선택반영</CheckButton>
                  <CheckButton>미반영</CheckButton>
                </FlexContainer>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">1과목 반영 대학만 보기</label>
              </FindUniversityFilterModalItem>

              <FindUniversityFilterModalItem title="지역 선택" subtitle="* 중복 선택 가능합니다">
                <FlexContainer>
                  <CheckButton>전체</CheckButton>
                  <CheckButton>서울권</CheckButton>
                  <CheckButton>경기권</CheckButton>
                  <CheckButton>인천권</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <CheckButton>경남권</CheckButton>
                  <CheckButton>경북권</CheckButton>
                  <CheckButton>강원제주권</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <CheckButton>광주권</CheckButton>
                  <CheckButton>전라권</CheckButton>
                  <CheckButton>충청권</CheckButton>
                </FlexContainer>
              </FindUniversityFilterModalItem>

              <FindUniversityFilterModalItem title="경쟁률 범위 설정" subtitle="* 2023학년도 기준입니다">
                <input type="range" />
              </FindUniversityFilterModalItem>
            </Left>

            <Right>
              <FindUniversityFilterModalItem title="학과 계열" subtitle="* 학과명에 따른 분류입니다">
                <CheckButton>체육교육 지도</CheckButton>
                <CheckButton>스포츠의학</CheckButton>
                <CheckButton>스포츠과학</CheckButton>
                <CheckButton>스포츠산업</CheckButton>
                <CheckButton>경호 무도</CheckButton>
              </FindUniversityFilterModalItem>

              <FindUniversityFilterModalItem title="기여도" subtitle="* 중복 선택 가능합니다">
                <FlexContainer>
                  <SubTitle>수능 기여도</SubTitle>
                  <CheckButton>상</CheckButton>
                  <CheckButton>중</CheckButton>
                  <CheckButton>하</CheckButton>
                </FlexContainer>
                <FlexContainer>
                  <SubTitle>실기 기여도</SubTitle>
                  <CheckButton>상</CheckButton>
                  <CheckButton>중</CheckButton>
                  <CheckButton>하</CheckButton>
                </FlexContainer>
              </FindUniversityFilterModalItem>

              <FindUniversityFilterModalItem title="실기 반영" subtitle="* 실기 선택을 해제할 경우, 해당 실기를 반영하지 않는 대학만 검색됩니다.">
                <Button>점프</Button>
                <FlexContainer>
                  <CheckButton>제자리멀리뛰기</CheckButton>
                  <CheckButton>서전트 점프</CheckButton>
                </FlexContainer>
                <Button>유연성</Button>
                <FlexContainer>
                  <CheckButton>좌전굴</CheckButton>
                  <CheckButton>체전굴</CheckButton>
                </FlexContainer>
                <Button>던지기</Button>
                <FlexContainer>
                  <CheckButton>메디신볼던지기</CheckButton>
                  <CheckButton>핸드볼공던지기</CheckButton>
                </FlexContainer>
                <Button>기타종목</Button>
                <FlexContainer>
                  <CheckButton>싯업</CheckButton>
                  <CheckButton>배근력</CheckButton>
                  <CheckButton>턱걸이 매달리기</CheckButton>
                </FlexContainer>
              </FindUniversityFilterModalItem>
            </Right>
          </Container>
          <Bottom>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">교직 이수 가능한 대학만 보기</label>
            <button>검색결과 000개 보기</button>
          </Bottom>
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
`;

const Left = styled.div`
  width: 100%;
`;

const Right = styled.div`
  width: 100%;
`;

const Button = styled.button``;

const FlexContainer = styled.div`
  display: flex;
`;
const SubTitle = styled.div`
  height: 16px;
  padding-right: 8px;
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
`;
