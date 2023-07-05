import ModalLayout from '@/components/Modal/ModalLayout';
import Select from '@/components/Select';
import theme from '@/theme/theme';
import { Button, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useMemo } from 'react';

interface VersionUpdateModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const VersionUpdateModal = (props: VersionUpdateModalProps) => {
  const { isOpen, onClose } = props;
  const versions = ['ver.2.3.0', 'ver.2.3.1', 'ver.2.3.2'];
  const options = useMemo(
    () =>
      versions.map(version => {
        return { value: version, label: version };
      }),
    [versions],
  );
  const updateItems = [
    {
      name: '업데이트 코멘트',
      status: '작성 완료',
    },
    {
      name: '3학년 예상 점수표',
      status: '업로드 완료',
    },
    {
      name: '2학년 예상 점수표',
      status: '미완료',
    },
    {
      name: '1학년 예상 점수표',
      status: '미완료',
    },
  ];

  return (
    <>
      {isOpen && (
        <ModalLayout isOpen={isOpen} onClose={onClose}>
          <Flex width="429px" direction="column" gap="24px">
            <TitleWrapper>
              <Title>버전 업데이트</Title>
              <VersionBadge>
                <VersionText>{'user ver. 2.3.2'}</VersionText>
              </VersionBadge>
            </TitleWrapper>
            <Flex direction="column" gap="12px">
              <ContentWrapperTitle>버전 선택</ContentWrapperTitle>
              <SelectorWrapper>
                <Select size="md" width="100%" options={options} placeholder="업데이트할 버전을 선택해주세요" name="AnalysisSortng" setValue={() => {}} register={() => {}} />
              </SelectorWrapper>
            </Flex>
            <Flex direction="column" gap="12px">
              <ContentWrapper>
                <ContentWrapperTitle>업데이트 예정일</ContentWrapperTitle>
                <InuptDate type="datetime-local" />
              </ContentWrapper>
            </Flex>
            <Flex direction="column" gap="12px">
              <ContentWrapperTitle>업데이트 요소 상태</ContentWrapperTitle>
              <Flex direction="column" gap="8px">
                {updateItems.map(item => {
                  return (
                    <Flex justifyContent="space-between">
                      <Flex>{item.name}</Flex>
                      <Flex>{item.status}</Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
            <ButtonWrapper>
              <Button>취소</Button>
              <Button>업데이트하기</Button>
            </ButtonWrapper>
          </Flex>
        </ModalLayout>
      )}
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: ${theme.colors.black};
  font-size: 20px;
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const VersionBadge = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  height: fit-content;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: ${theme.colors.grayBlack};
`;

const VersionText = styled.span`
  color: ${theme.colors.white};
  font-size: 14px;
  font-family: Pretendard Regular;
  line-height: 16px;
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 12px;
  align-self: stretch;
`;

const ContentWrapperTitle = styled.span`
  color: ${theme.colors.grayBlack};
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const SelectorWrapper = styled.div`
  width: 100%;
  font-size: 16px;
`;

const InuptDate = styled.input`
  display: hidden;
  position: relative;

  &:after {
    content: '';
    display: flex;
    height: 48px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border: 1px solid black;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
