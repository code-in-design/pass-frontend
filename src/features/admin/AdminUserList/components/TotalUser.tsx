import theme from '@/theme/theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface Props {
  count: number;
}

export const TotalUser = (props: Props) => {
  return (
    <Flex gap="8px">
      <Text>전체 사용자</Text>
      <Count>{props.count}명</Count>
    </Flex>
  );
};

const Text = styled.span`
  color: ${theme.colors.black};
  font-size: 24px;
  font-family: Pretendard Bold;
  line-height: 32px;
  letter-spacing: -0.48px;
`;

const Count = styled.span`
  color: ${theme.colors.blue};
  font-size: 24px;
  font-family: Pretendard Bold;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
