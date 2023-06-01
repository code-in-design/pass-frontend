import styled from '@emotion/styled';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import WelcomeSection from './components/WelcomeSection';
import UpdateHistory from '../../features/versions/components/UpdateHistory';
import PopularUniversity from '../../features/universities/components/PopularUniversity';
import InterestedUniversities from '../../features/universities/components/InterestedUniversities';
import Probability from './components/Probability';
import ServiceList from './components/ServiceList';
import { useForm } from 'react-hook-form';

interface Props {
  isMobile?: boolean;
}

const MainPage = (props: Props) => {
  const { register } = useForm();
  return (
    <Layout>
      <MainWrapper>
        <MainLeft>
          <WelcomeSection /> <ServiceList /> <Probability />
        </MainLeft>
        <MainRight>
          <InterestedUniversities /> <PopularUniversity /> <UpdateHistory register={register} />
        </MainRight>
      </MainWrapper>
    </Layout>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  gap: 0 56px;
`;

const MainLeft = styled.div`
  width: 50%;
`;

const MainRight = styled.div`
  width: 50%;
`;
