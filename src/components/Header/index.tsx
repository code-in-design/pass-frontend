import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface HeaderProps {
  avatar?: string;
  name: string;
  membership: ReactNode;
  email: string;
}

const Header = (props: HeaderProps) => {
  return (
    <HeaderWrapper>
      <AlertWrapper>
        <Alert src="/images/icons/notifications.svg" alt="notifications" />
        <AlertDot />
      </AlertWrapper>
      <UserWrapper>
        <UserImage src={props.avatar} alt="user" />
        <UserInfo>
          <UserNameWrapper>
            <UserName>{props.name}</UserName>
            {props.membership}
          </UserNameWrapper>
          <UserEmail>{props.email}</UserEmail>
        </UserInfo>
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;

Header.defaultProps = {
  userName: '한치훈',
  userAvatar: '/images/user/user.png',
  membership: 'Basic',
  userEmail: 'gks3628@naver.com',
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 112px;
  padding: 28px 60px;
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

const UserMembership = styled.div`
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
  text-align: center;
`;

const UserEmail = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #737c89;
`;
