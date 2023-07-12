import { ReactNode, useState } from 'react';
import UnCheckedCheckBoxIcon from '../../../../../public/images/icons/check_box_outline_blank.svg';
import CheckedCheckBoxIcon from '../../../../../public/images/icons/CheckedCheckBox.svg';
import theme from '@/theme/theme';
import styled from '@emotion/styled';

interface Props {
  children: ReactNode;
}

const CheckBox = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckBoxWrapper onClick={() => setIsChecked(!isChecked)}>
      {isChecked || <UnCheckedCheckBoxIcon width="20px" height="20px" color={theme.colors.gray3} />}
      {isChecked && <CheckedCheckBoxIcon width="20px" height="20px" color={theme.colors.blue} />}
      <Text>{props.children}</Text>
    </CheckBoxWrapper>
  );
};

export default CheckBox;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Text = styled.span`
  color: ${theme.colors.grayBlack};
  font-family: Pretendard Bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.28px;
`;
