import theme from '@/theme/theme';
import styled from '@emotion/styled';

interface Props {
  scheduledUpdateDate: string;
}

const UpdateDateDisplay = (props: Props) => {
  return <UpdateDateDisplayWrapper>{props.scheduledUpdateDate}</UpdateDateDisplayWrapper>;
};

export default UpdateDateDisplay;

const UpdateDateDisplayWrapper = styled.div`
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
