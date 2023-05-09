import GoService from './components/ServiceList/ServiceList';
import Hello from './components/WelcomeSection';
import Probability from './components/Probability/Probability';
import University from './components/University/University';

const MainHomeContainer: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Hello /> <GoService /> <Probability />
      </div>
      <div>
        <University />
      </div>
    </div>
  );
};

export default MainHomeContainer;
