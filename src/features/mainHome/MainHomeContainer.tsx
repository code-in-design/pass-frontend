import GoService from './components/ServiceList/ServiceList';
import Hello from './components/WelcomeSection';
import Probability from './components/Probability/Probability';
import University from './components/University/University';
import PopularUniversity from './components/PopularUniversity/PopularUniversity';
import Update from './components/Update/Update';

const MainHomeContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Hello /> <GoService /> <Probability />
      </div>
      <div>
        <University /> <PopularUniversity /> <Update />
      </div>
    </div>
  );
};

export default MainHomeContainer;
