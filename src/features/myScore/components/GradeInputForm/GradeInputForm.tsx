import Layout from '@/components/Layout/Layout';
import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import InfoIcon from '../../../../../public/images/icons/info.svg';

interface Props {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const GradeInputForm = (props: Props) => {
  return (
    <Layout>
      <Container>
        <Title>{props.title}</Title>
        {props.subtitle && <SubTitle>{props.subtitle}</SubTitle>}
        {props.children}
      </Container>
    </Layout>
  );
};

export default GradeInputForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${props => props.theme.colors.gray2};
  margin-bottom: 32px;
`;
