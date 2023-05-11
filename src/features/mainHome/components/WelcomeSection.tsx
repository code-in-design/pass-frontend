import styled from '@emotion/styled';

const WelcomeSection: React.FC = () => {
  return (
    <Container>
      <MainTitle>
        안녕하세요,
        <br />
        <Name>지훈</Name> 님!
      </MainTitle>
      <SubTitle>당신의 미래와 합격을 Z-ONE이 응원합니다</SubTitle>
      <MenuList>
        <MenuListItem>
          <MenuTitle>대학 찾기</MenuTitle>
          <MenuArrow src="/images/icons/arrowRightWhite.svg" alt="arrow" />
          <RectangleTop />
          <RectangleBottom />
          <SchoolIcon src="/images/icons/findSchool.svg" alt="icon" />
        </MenuListItem>
        <MenuListItem>
          <MenuTitle>합격 분석</MenuTitle>
          <MenuArrow src="/images/icons/arrowRightWhite.svg" alt="arrow" />
          <RectangleTop />
          <RectangleBottom />
          <ChartIcon src="/images/icons/passAnalysis.svg" alt="icon" />
        </MenuListItem>
      </MenuList>
    </Container>
  );
};

export default WelcomeSection;

const Container = styled.div``;

const MainTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: #191e25;
  letter-spacing: -0.02em;
  margin-bottom: 8px;
`;
const Name = styled.span`
  color: #6b77f8;
`;

const SubTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: #626474;
`;

const MenuList = styled.div`
  display: flex;
  margin-top: 24px;
  width: 492px;
`;

const MenuListItem = styled.div`
  display: flex;
  width: 240px;
  height: 132px;
  border-radius: 16px;
  background-color: #6b77f8;
  box-shadow: 4px 14px 24px -16px #6b77f8;
  padding: 20px;
  margin-right: 12px;
  background-repeat: no-repeat;
  background-position: bottom 5px right 12px;
  position: relative;
  &:last-child {
    margin-right: 0;
    background-color: #60c8de;
    box-shadow: 4px 14px 24px -16px #60c8de;
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
  letter-spacing: -0.02em;
  color: #fff;
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
  left: 111.37px;
  top: 75px;
  background: #ffffff;
  opacity: 0.1;
  transform: rotate(-40.56deg);
`;

const RectangleTop = styled.div`
  width: 144px;
  height: 34px;
  position: absolute;
  left: 147px;
  top: 20px;
  background: #ffffff;
  opacity: 0.05;
  transform: rotate(-127.25deg);
`;
