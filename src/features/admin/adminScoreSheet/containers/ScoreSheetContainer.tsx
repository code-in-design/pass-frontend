import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { createContext } from 'react';
import VersionDropDownContainer from './VersionDropDownContainer';
import RadioButtonGroupContainer from './RadioButtonGroupContainer';
import ScoreSheetUploaderContainer from './ScoreSheetUploaderContainer';
import DataUnifierOptionContainer from '../components/DataUnifierOptionContainer';
import FormButtonGroupContainer from './FormButtonGroupContainer';
import { Flex } from '@chakra-ui/react';
import ScoreSheetFormProvider from '../context/ScoreSheetFormContext';

const ScoreSheetContainer = () => {
  return (
    <ScoreSheetFormProvider>
      <Container>
        <Title>수능 점수 분석</Title>
        <VersionDropDownContainer />
        <RadioButtonGroupContainer />
        <Flex flex="1" gap="24px">
          <ScoreSheetUploaderContainer />
          <DataUnifierOptionContainer />
        </Flex>
        <FormButtonGroupContainer />
      </Container>
    </ScoreSheetFormProvider>
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
