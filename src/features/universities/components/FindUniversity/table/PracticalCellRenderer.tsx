import styled from '@emotion/styled';
import ExerciseIcon from './ExerciseIcon';

// 실기종목 아이콘을 보여준다.
export const PracticalCellRenderer = props => {
  const { value } = props;
  const id = props?.data?.id;
  return (
    <div style={{ display: 'flex', gap: '0 4px', alignItems: 'center' }}>
      {value?.map((icon, index) => {
        return (
          <ImageWrapper key={index}>
            <ExerciseIcon type={icon} id={id} />
          </ImageWrapper>
        );
      })}
    </div>
  );
};

const ImageWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
