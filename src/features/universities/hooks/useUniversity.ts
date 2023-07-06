import { useDispatch } from 'react-redux';
import { universityActions } from '../slices/universitySlice';

const useUniversity = () => {
  const dispatch = useDispatch();

  const dispatchFilterData = data => {
    dispatch(universityActions.updateFilterData(data));
  };

  return {
    dispatchFilterData,
  };
};

export default useUniversity;
