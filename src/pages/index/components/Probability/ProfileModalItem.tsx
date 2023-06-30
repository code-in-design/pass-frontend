import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

interface Props {
  icon: ReactNode;
  iconName: string;
  title: string;
  link?: ReactNode;
}

const ProfileModalItem = (props: Props) => {
  return (
    <ListItem>
      <IconWrapper>
        {props.icon}
        {props.iconName}
      </IconWrapper>
      <Text>
        {props.title}
        {props?.link}
      </Text>
    </ListItem>
  );
};

export default ProfileModalItem;

const ListItem = styled.div`
  display: flex;
  gap: 0 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray2};
`;

const Text = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
`;
