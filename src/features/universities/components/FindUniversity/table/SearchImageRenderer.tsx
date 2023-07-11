import styled from '@emotion/styled';
import Search from '../../../../../../public/images/icons/search.svg';

// 표 header에 있는 아이콘을 보여준다 (기여도와 수능환산점수, z-지수)
export const SearchImageRenderer = () => {
  return (
    <IconWrapper>
      <Search />
    </IconWrapper>
  );
};

const IconWrapper = styled.div`
  width: 20px;
  height: 20px;
  color: '#626474';
  margin: auto;
`;
