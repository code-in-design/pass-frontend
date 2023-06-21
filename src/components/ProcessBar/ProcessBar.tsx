import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import More from '../../../public/images/icons/moreHoriz.svg';
import ProgressBar from '@ramonak/react-progress-bar';

interface Props {
  img: ReactNode;
  text: string;
}

const ProcessBar = (props: Props) => {
  return (
    <>
      <IconWrapper>{props.img}</IconWrapper>
      <TextWrapper>
        <Text>{props.text}</Text>
        <MoreWrpper>
          <More />
        </MoreWrpper>
      </TextWrapper>
      <ProgressBar completed={100} bgColor="#6B77F8" height="24px" width="784px" borderRadius="53px" baseBgColor="#F3F4FA" />
    </>
  );
};

export default ProcessBar;

const IconWrapper = styled.div`
  width: 63px;
  height: 63px;
  margin: 0 auto 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${props => props.theme.colors.grayBlack};
`;
const MoreWrpper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  margin-left: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
