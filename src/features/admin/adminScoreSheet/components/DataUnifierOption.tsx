import styled from '@emotion/styled';
import CheckBox from './CheckBox';
import Select from '@/components/Select';
import useScoreSheetForm from '../hooks/useScoreSheetForm';
import { find } from 'lodash';
import { OptionType } from './VersionDropDown';

const DataUnifierOption = () => {
  const { register, setValue, watch } = useScoreSheetForm();
  const selectedId = watch('id', '');

  const serverData = [
    {
      id: 1,
      version: '2.3.5',
      date: '2023.01.02 11:00',
      comment: '2.3.5 버전 업데이트입니다.',
    },
    {
      id: 2,
      version: '2.3.6',
      date: '2023.01.03 11:00',
      comment: '2.3.6 버전 업데이트입니다.',
    },
  ];

  const selectedItem = find(serverData, { id: selectedId });

  const options: OptionType[] = serverData.map(data => {
    return { value: data.id, label: 'ver ' + data.version };
  });

  return (
    <DataUnifierOptionWrapper>
      <CheckBox>데이터 통일</CheckBox>
      <SelectWrapper>
        <Select height={40} border="10px" name="id" options={options} register={register} setValue={setValue} />
      </SelectWrapper>
    </DataUnifierOptionWrapper>
  );
};

export default DataUnifierOption;

const DataUnifierOptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
`;

const SelectWrapper = styled.div`
  max-width: 140px;
`;
