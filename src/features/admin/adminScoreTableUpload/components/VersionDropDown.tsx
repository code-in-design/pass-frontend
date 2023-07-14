import Select from '@/components/Select';
import styled from '@emotion/styled';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type OptionType = {
  value: number;
  label: string;
};

interface Props {
  options: OptionType[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const VersionDropDown = (props: Props) => {
  const { options, register, setValue } = props;
  return (
    <SelectWrapper>
      <Select height={40} border="10px" options={options} name="updateVersionId" register={register} setValue={setValue} required="수능 점수표 업로드할 버전을 선택해주세요" />
    </SelectWrapper>
  );
};

export default VersionDropDown;

const SelectWrapper = styled.div`
  min-width: 145px;
`;