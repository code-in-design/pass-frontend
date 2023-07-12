import Select from '@/components/Select';
import theme from '@/theme/theme';
import styled from '@emotion/styled';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

export type OptionType = {
  value: number;
  label: string;
};

interface Props {
  options: OptionType[];
  scheduledUpdateDate: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}

const VersionDropDown = (props: Props) => {
  const { options, scheduledUpdateDate, register, setValue } = props;
  return (
    <VersionDropDownWrapper>
      <SelectWrapper>
        <Select height={40} border="10px" options={options} name="id" register={register} setValue={setValue} />
      </SelectWrapper>
      <DateDisplay>{scheduledUpdateDate}</DateDisplay>
    </VersionDropDownWrapper>
  );
};

export default VersionDropDown;

const VersionDropDownWrapper = styled.div`
  height: 40px;
  display: flex;
  gap: 24px;
`;

const SelectWrapper = styled.div`
  min-width: 145px;
`;

const DateDisplay = styled.div`
  display: flex;
  min-width: 140px;
  padding: 12px 16px;
  align-items: center;

  border-radius: 10px;
  border: 1px solid ${theme.colors.gray4};
  background: ${theme.colors.white};

  color: ${theme.colors.grayBlack};
  font-family: Pretendard SemiBold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;
