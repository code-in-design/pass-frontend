import styled from '@emotion/styled';

const Hello: React.FC = () => {
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
        </MenuListItem>
        <MenuListItem>
          <MenuTitle>합격 분석</MenuTitle>
          <MenuArrow src="/images/icons/arrowRightWhite.svg" alt="arrow" />
        </MenuListItem>
      </MenuList>
    </Container>
  );
};

export default Hello;

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
  width: 240px;
  height: 132px;
  border-radius: 16px;
  background-color: #6b77f8;
  box-shadow: 4px 14px 24px -16px #6b77f8;
  padding: 20px;
  margin-right: 12px;
  &:last-child {
    margin-right: 0;
  }
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
