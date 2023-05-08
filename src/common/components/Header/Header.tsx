import React from 'react';
import styled from '@emotion/styled';

const Header: React.FC = props => {
  return (
    <HeaderWrapper>
      <AlertWrapper>
        <Alert src="/images/icons/notifications.svg" alt="notifications" />
        <AlertDot />
      </AlertWrapper>
      <UserWrapper>
        <UserImage src="/images/user/user.png" alt="user" />
        <UserInfo>
          <UserNameWrapper>
            <UserName>한치훈</UserName>
            <UserLevel>Basic</UserLevel>
          </UserNameWrapper>
          <UserEmail>gks3628@naver.com</UserEmail>
        </UserInfo>
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: calc(100% - 288px);
  display: flex;
  justify-content: flex-end;
  height: 112px;
  padding: 28px 92px;
  background-color: #fff;
`;

const AlertWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #f3f4fa;
  padding: 4px;
  position: relative;
  margin-right: 24px;
`;
const Alert = styled.img`
  width: 24px;
  height: 24px;
  display: block;
`;

const AlertDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #6b77f8;
  position: absolute;
  top: 4px;
  right: 4px;
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 16px;
`;

const UserInfo = styled.div``;

const UserNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

const UserName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: #3b4555;
`;

const UserLevel = styled.div`
  margin-left: 8px;
  width: 45px;
  height: 20px;
  border-radius: 20px;
  background-color: #6b77fb;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  padding: 4px 8px;
`;

const UserEmail = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #737c89;
`;
