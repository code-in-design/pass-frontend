import styled from '@emotion/styled';
import GoService from '@/features/mainHome/components/ServiceList/ServiceList';
import Hello from '@/features/mainHome/components/WelcomeSection';
import Probability from '@/features/mainHome/components/Probability/Probability';
import Layout from '@/common/components/Layout/Layout';

const MainHome = () => {
  return (
    <Layout>
      <Container>
        <MainHomeLeft>
          <Hello />
          <GoService />
          <Probability />
        </MainHomeLeft>
        <MainHomeRight></MainHomeRight>
      </Container>
    </Layout>
  );
};
export default MainHome;

const Container = styled.div`
  display: flex;
`;
const MainHomeLeft = styled.div``;
const MainHomeRight = styled.div``;
