import styled from '@emotion/styled';
import { ReactNode } from 'react';
import SubjectSelection from './SubjectSelection';
import { UseFormRegister, FieldValues, UseFormSetValue } from 'react-hook-form';

interface Props {
  title: string;
  isRequire?: boolean;
  isChoice?: string[];
  children: ReactNode;
  marginTop?;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const GradeInputFormItem = (props: Props) => {
  let type = '';
  if (props.title === '국어') {
    type = 'koreanType';
  }
  if (props.title === '수학') {
    type = 'mathType';
  }
  return (
    <Container>
      <TitleWrapper>
        <Title marginTop={props.marginTop}>
          {props.title}
          {props.isRequire && <Require>*</Require>}
        </Title>
        {props.isChoice && <SubjectSelection type={type} isChoice={props.isChoice} register={props.register} setValue={props.setValue} />}
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
