import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import More from '../../../public/images/icons/moreHoriz.svg';
import ProgressBar from '@ramonak/react-progress-bar';

interface Props {
  img: ReactNode;
  text: string;
  iconSize: string;
  iconMargin: string;
  textJustify: string;
}

const ProcessBar = (props: Props) => {
  return (
    <Container>
      <IconWrapper iconSize={props.iconSize} iconMargin={props.iconMargin}>
        {props.img}
      </IconWrapper>
      <TextWrapper textJustify={props.textJustify}>
        <Text>{props.text}</Text>
        <MoreWrpper>
          <More />
        </MoreWrpper>
      </TextWrapper>
      <ProgressBar completed={100} bgColor="#6B77F8" height="24px" width="100%" borderRadius="53px" baseBgColor="#F3F4FA" />
    </Container>
  );
};

export default ProcessBar;

const Container = styled.div`
  width: 100%;
`;

const IconWrapper = styled.div<{ iconSize: string; iconMargin: string }>`
  width: ${props => props.iconSize};
  height: ${props => props.iconSize};
  margin: ${props => props.iconMargin};
`;

const TextWrapper = styled.div<{ textJustify: string }>`
  display: flex;
  justify-content: ${props => props.textJustify};
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
