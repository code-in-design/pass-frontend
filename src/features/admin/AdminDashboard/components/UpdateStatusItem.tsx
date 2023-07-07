import styled from '@emotion/styled';
import MarkUnreadChat from '../../../../../public/images/icons/markUnreadChat.svg';
import Attachment from '../../../../../public/images/icons/attachment.svg';
import Percent from '../../../../../public/images/icons/percent.svg';
import theme from '@/theme/theme';

export interface UpdateStatusItemProps {
  iconType: UpdateStatusItemIconType;
  name: string;
  status: '업로드 완료' | '작성 완료' | '미완료';
  isActive?: boolean;
}

export type UpdateStatusItemIconType = keyof typeof UpdateStatusItemIcons;

const UpdateStatusItemIcons = {
  comment: <MarkUnreadChat width={20} height={20} color={theme.colors.gray1} />,
  attachment: <Attachment width={20} height={20} color={theme.colors.gray1} />,
  percent: <Percent width={20} height={20} color={theme.colors.gray1} />,
};

export const UpdateStatusItem = (props: UpdateStatusItemProps) => {
  const { iconType, name, status, isActive } = props;
  return (
    <Container>
      <Wrapper>
        {UpdateStatusItemIcons[iconType]}
        <Content>{name}</Content>
      </Wrapper>
      <Badge isActive={isActive}>
        <Text isActive={isActive}>{status}</Text>
      </Badge>
    </Container>
  );
};

interface BadgeProps {
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  height: 48px;
  padding: 16px 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${theme.colors.gray4};
  background: #fff;
`;

const Content = styled.span`
  color: ${theme.colors.black});
  font-family: Pretendard Bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.28px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Badge = styled.div<BadgeProps>`
  display: flex;
  width: 70px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background: ${({ isActive }) => (isActive ? 'rgba(107, 119, 248, 0.10)' : theme.colors.gray5)}};
`;

const Text = styled.span<BadgeProps>`
  color: ${({ isActive }) => (isActive ? theme.colors.blue : theme.colors.gray2)};
  font-family: Pretendard Bold;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.24px;
`;
