import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

interface Props {
  name: string;
}

const Welcome = (props: Props) => {
  return (
    <Container>
      <MainTitle>
        안녕하세요,
        <br />
        <Name>{props.name}</Name> 님!
      </MainTitle>
      <SubTitle>당신의 미래와 합격을 Z-ONE이 응원합니다</SubTitle>
      <MenuList>
        <MenuListItem>
          <Link href="/findUniversity">
            <Wrapper>
              <MenuTitle>대학 찾기</MenuTitle>
              <MenuArrow src="/images/icons/arrowRightWhite.svg" alt="arrow" />
            </Wrapper>
            <RectangleTop />
            <RectangleBottom />
            <SchoolIcon src="/images/icons/findSchool.svg" alt="icon" />
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link href="/passAnalysis">
            <Wrapper>
              <MenuTitle>합격 분석</MenuTitle>
              <MenuArrow src="/images/icons/arrowRightWhite.svg" alt="arrow" />
            </Wrapper>
            <RectangleTop />
            <RectangleBottom />
            <ChartIcon src="/images/icons/passAnalysis.svg" alt="icon" />
          </Link>
        </MenuListItem>
      </MenuList>
    </Container>
  );
};

export default Welcome;
Welcome.defaultProps = {
  name: '지훈',
};

const Container = styled.div``;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;

const Name = styled.span`
  color: ${props => props.theme.colors.blue};
`;

const Wrapper = styled.div`
  display: flex;
`;

const SubTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${props => props.theme.colors.gray1};
`;

const MenuList = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  gap: 0 12px;
`;

const MenuListItem = styled.div`
  display: flex;
  min-width: 240px;
  width: 50%;
  height: 132px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.blue};
  box-shadow: 4px 14px 24px -16px ${props => props.theme.colors.blue};
  padding: 20px;
  background-repeat: no-repeat;
  background-position: bottom 5px right 12px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:last-of-type {
    background-color: ${props => props.theme.colors.green};
    box-shadow: 4px 14px 24px -16px ${props => props.theme.colors.green};
  }
`;

const SchoolIcon = styled.img`
  width: 129px;
  height: 109px;
  position: absolute;
  top: 18px;
  right: 12px;
`;

const ChartIcon = styled.img`
  width: 112px;
  height: 99px;
  position: absolute;
  top: 22px;
  right: 12px;
`;

const MenuTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.white};
`;

const MenuArrow = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;

const RectangleBottom = styled.div`
  width: 177.21px;
  height: 34px;
  position: absolute;
  right: -50px;
  bottom: 29px;
  background: ${props => props.theme.colors.white};
  opacity: 0.1;
  transform: rotate(-40.56deg);
`;

const RectangleTop = styled.div`
  width: 144px;
  height: 34px;
  position: absolute;
  right: -50px;
  bottom: 80px;
  background: ${props => props.theme.colors.white};
  opacity: 0.05;
  transform: rotate(-127.25deg);
`;
