import React from 'react';
import styled from '@emotion/styled';
import Select from '@/components/Select';
import Search from '../../../../public/images/icons/search.svg';
import { useForm } from 'react-hook-form';

const PassAnalysisSearchContainer = () => {
  const { register, setValue } = useForm();

  return (
    <Container>
      <InputContainer>
        <InputIconWrapper>
          <Search />
        </InputIconWrapper>
        <Input placeholder="대학명 검색" />
      </InputContainer>
      <SelectContainer>
        <Select
          size="sm"
          width="112px"
          options={[{ value: '가나다', label: '가나다 순' }, { value: '모집군', label: '모집군 순' }, , { value: '지원가능', label: '지원가능 순' }]}
          defaultValue={{ value: '가나다', label: '가나다 순' }}
          name="AnalysisSortng"
          setValue={setValue}
          register={register}
        />
      </SelectContainer>
    </Container>
  );
};

export default PassAnalysisSearchContainer;

const Container = styled.div`
  margin-top: 24px;
  width: 100%;
  display: flex;
  gap: 0 8px;
  padding: 0 16px;
`;

const InputContainer = styled.div`
  width: 100%;
  min-width: 229px;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.gray4};
  border-radius: 16px;
  padding: 12px 32px;
  position: relative;
`;

const InputIconWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.gray3};
`;

const Input = styled.input`
  position: absolute;
  top: 12px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
  outline: none;
`;

const SelectContainer = styled.div`
  min-width: 112px;
`;
