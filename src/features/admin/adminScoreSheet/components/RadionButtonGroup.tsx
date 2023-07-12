import styled from '@emotion/styled';
import UnCheckedRadioIcon from '../../../../../public/images/icons/radio_button_unchecked.svg';
import CheckedRadioIcon from '../../../../../public/images/icons/radio_button_checked.svg';
import theme from '@/theme/theme';
import { useState } from 'react';

interface Props {
  options: string[];
}

const RadioButtonGroup = (props: Props) => {
  const [selectedId, setSelectedId] = useState<number>(-1);

  const handleClick = (index: number) => {
    setSelectedId(index);
  };

  return (
    <RadioButtonGroupWrapper>
      {props.options?.map((option, index) => {
        const isChecked = index === selectedId;

        return (
          <RadioItem key={index} onClick={() => handleClick(index)}>
            {isChecked || <UnCheckedRadioIcon width="20px" height="20px" color={theme.colors.gray3} />}
            {isChecked && <CheckedRadioIcon width="20px" height="20px" color={theme.colors.blue} />}
            <Title isChecked={isChecked}>{option}</Title>
          </RadioItem>
        );
      })}
    </RadioButtonGroupWrapper>
  );
};

export default RadioButtonGroup;

RadioButtonGroup.defaultProps = {
  options: ['고3 이상', '고2', '고1'],
};

const RadioButtonGroupWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Title = styled.span<any>`
  color: ${({ isChecked }) => (isChecked ? theme.colors.grayBlack : theme.colors.gray2)};
  font-family: Pretendard Bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;
