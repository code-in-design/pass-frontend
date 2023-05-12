import GoService from './components/ServiceList/ServiceList';
import Hello from './components/WelcomeSection';
import Probability from './components/Probability/Probability';
import University from './components/University/University';
import PopularUniversity from './components/PopularUniversity/PopularUniversity';
import Update from './components/Update/Update';
import styled from '@emotion/styled';

const MainHomeContainer: React.FC = () => {
  return (
    <MainWrapper>
      <MainLeft>
        <Hello /> <GoService /> <Probability />
      </MainLeft>
      <MainRight>
        <University /> <PopularUniversity /> <Update />
      </MainRight>
    </MainWrapper>
  );
};

export default MainHomeContainer;

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
