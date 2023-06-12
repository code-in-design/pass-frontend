import React from 'react';
import styled from '@emotion/styled';
import InfoIcon from '../../../../../public/images/icons/info.svg';
import InputFindIcon from '../../../../../public/images/icons/search.svg';
import UniversityFilterModalContainer from '../../containers/UniversitySettingFilterModalContainer';
import UniversityInfoModalContainer from '../../containers/UniversityInfoModalContainer';
import UniversityScoreModalContainer from '../../containers/UniversityScoreModalContainer';

const TableFindUniversity = () => {
  return (
    <Container>
      <Wrapper>
        <SearchWrapper>
          <InputWrapper>
            <IconWrapper>
              <InputFindIcon />
            </IconWrapper>
            <SearchUniversity placeholder="대학명 검색" />
          </InputWrapper>
          <InfoWrapper>
            <InfoIconWrapper>
              <InfoIcon />
            </InfoIconWrapper>
            <InfoText>학과명을 클릭하면 입시 정보를 볼 수 있어요!</InfoText>
          </InfoWrapper>
        </SearchWrapper>
        <UniversityFilterModalContainer />
      </Wrapper>
      테이블 데이터
      <UniversityInfoModalContainer />
      <UniversityScoreModalContainer />
    </Container>
  );
};

export default TableFindUniversity;

const Container = styled.div`
  padding-right: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

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

const FileterButton = styled.div`
  max-width: 112px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  padding: 4px 8px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  cursor: pointer;
`;
