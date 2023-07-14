import styled from '@emotion/styled';
import Select from '@/components/Select';
import { FieldValues, UseFormRegister, UseFormSetValue, UseFormWatch, useForm, useFormContext } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';

export type OptionType = {
  value: number;
  label: string;
};

interface Props {
  options: OptionType[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

const VersionToApplyTestScoreSheet = (props: Props) => {
  const { options, register, setValue } = props;
  return (
    <VersionToApplyTestScoreSheetOptionWrapper>
      <Checkbox size="blueCheckBox" {...register('isApplyPreviousVersion')}>
        데이터 통일
      </Checkbox>
      <SelectWrapper>
        <Select height={40} border="10px" name="TobeAppliedVersionId" options={options} register={register} setValue={setValue} />
      </SelectWrapper>
    </VersionToApplyTestScoreSheetOptionWrapper>
  );
};

export default VersionToApplyTestScoreSheet;

const VersionToApplyTestScoreSheetOptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
`;

const SelectWrapper = styled.div`
  max-width: 140px;
`;
