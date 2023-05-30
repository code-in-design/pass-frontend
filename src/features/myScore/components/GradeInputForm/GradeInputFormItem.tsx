import styled from '@emotion/styled';
import { ReactNode } from 'react';
import SubjectSelection from './SubjectSelection';

interface Props {
  title: string;
  isRequire?: boolean;
  isChoice?: string[];
  children: ReactNode;
  marginTop?;
}

const GradeInputFormItem = (props: Props) => {
  return (
    <Container>
      <TitleWrapper>
        <Title marginTop={props.marginTop}>
          {props.title}
          {props.isRequire && <Require>*</Require>}
        </Title>
        {props.isChoice && <SubjectSelection isChoice={props.isChoice} />}
      </TitleWrapper>
      {props.children}
    </Container>
  );
};

export default GradeInputFormItem;

GradeInputFormItem.defaultProps = {
  choiceItems: [''],
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  border-radius: 16px;
  padding: 20px 24px 16px;
  margin-bottom: 28px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div<{ marginTop: string }>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #191e25;
  margin-top: ${props => props.marginTop};
`;

const Require = styled.span`
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #6b77f8;
  margin-left: 4px;
`;
