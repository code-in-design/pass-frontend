import GoService from './components/GoService/GoService';
import Hello from './components/Hello';
import Probability from './components/Probability/Probability';

const MainHomeContainer: React.FC = () => {
  return (
    <>
      <Hello /> <GoService /> <Probability />
    </>
  );
};

export default MainHomeContainer;
