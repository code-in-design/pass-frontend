import styled from '@emotion/styled';
import Search from '../../../../../../public/images/icons/search.svg';

// 합격 가능성 보기에서 사용되는 검색 아이콘
export const SearchImageCellRenderer = () => {
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
