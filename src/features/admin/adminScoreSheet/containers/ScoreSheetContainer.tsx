import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const ScoreSheetContainer = (props: Props) => {
  return (
    <Container>
      <Title>수능 점수 분석</Title>
      {props.children}
    </Container>
  );
};

export default ScoreSheetContainer;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding: 24px;
  flex-direction: column;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 24px;
  background: ${theme.colors.white};
`;

const Title = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
