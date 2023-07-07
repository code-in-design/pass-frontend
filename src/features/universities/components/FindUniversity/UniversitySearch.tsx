import React from 'react';
import styled from '@emotion/styled';
import InfoIcon from '../../../../../public/images/icons/info.svg';
import InputFindIcon from '../../../../../public/images/icons/search.svg';
import { useQueryParam } from 'use-query-params';
import { debounce } from 'lodash';

const UniversitySearch = () => {
  const [searchUniversity, setSearchUniversity] = useQueryParam('searchUniversity');

  const onInputChange = debounce(event => {
    setSearchUniversity(event.target.value);
  }, 300);

  return (
    <SearchWrapper>
      <InputWrapper>
        <IconWrapper>
          <InputFindIcon />
        </IconWrapper>
        <SearchUniversity placeholder="대학명 검색" onChange={onInputChange} />
      </InputWrapper>
      <InfoWrapper>
        <InfoIconWrapper>
          <InfoIcon />
        </InfoIconWrapper>
        <InfoText>학과명을 클릭하면 입시 정보를 볼 수 있어요!</InfoText>
      </InfoWrapper>
    </SearchWrapper>
  );
};

export default UniversitySearch;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.gray3};
`;

const SearchUniversity = styled.input`
  min-width: 360px;
  height: 40px;
  padding: 12px 12px 12px 32px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  outline: none;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.gray2};
`;

const InfoIconWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

const InfoText = styled.text`
  margin-left: 4px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
`;
