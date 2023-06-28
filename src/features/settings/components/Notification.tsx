import React, { useState } from 'react';
import styled from '@emotion/styled';
import Switch from 'react-switch';

const Notification = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = checked => {
    setChecked(checked);
  };

  return (
    <div>
      <Title>알림</Title>
      <Wrapper>
        <div>
          <Text>마케팅 정보 소식</Text>
          <Description>서비스 공지 및 업데이트 알림을 이메일 및 SMS로 받고 싶어요!</Description>
        </div>
        <Switch onChange={handleChange} checked={checked} onColor="#6B77F8" onHandleColor="#fff" width={56} height={32} handleDiameter={24} uncheckedIcon={false} checkedIcon={false} />
      </Wrapper>
    </div>
  );
};

export default Notification;

const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 24px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 8px;
`;

const Description = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray1};
`;
