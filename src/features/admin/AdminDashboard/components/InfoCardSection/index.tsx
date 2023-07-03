import InfoCard from '@/features/admin/components/InfoCard';
import InfoCardItem from '@/features/admin/components/InfoCard/InfoCardItem';
import SalesIcon from '../../../../../../public/images/icons/grossSales.svg';
import BarChartIcon from '../../../../../../public/images/icons/bar_chart.svg';
import EditDocumentIcon from '../../../../../../public/images/icons/edit_document.svg';
import UpdateIcon from '../../../../../../public/images/icons/update.svg';

import styled from '@emotion/styled';

export const InfoCardSection = () => {
  return (
    <InfoCardSectionWrapper>
      <InfoCard>
        <InfoCardItem icon={<SalesIcon />} title="총 매출" content="79,500,000" />
      </InfoCard>
      <InfoCard>
        <InfoCardItem icon={<BarChartIcon />} title="총 유입 표본 개수" content="23,456" />
      </InfoCard>
      <InfoCard>
        <InfoCardItem icon={<EditDocumentIcon />} title="총 성적 입력 개수" content="45,678" />
      </InfoCard>
      <InfoCard isFull={true}>
        <NextUpdateWrapper>
          <IconWrapper>
            <UpdateIcon />
          </IconWrapper>
          <InfoWrapper>
            <Title>{'Next Update'}</Title>
            <Content>{'2023.01.01'}</Content>
          </InfoWrapper>
        </NextUpdateWrapper>
        <DdayBadge>{`D-${2}`}</DdayBadge>
      </InfoCard>
    </InfoCardSectionWrapper>
  );
};

const InfoCardSectionWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const NextUpdateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const IconWrapper = styled.div`
  display: flex;
  padding: 8px;
  height: fit-content;
  align-items: flex-start;
  gap: 10px;
  border-radius: 70px;
  background: #f1f2ff;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const Title = styled.span`
  color: var(--gray-1, #626474);
  font-size: 16px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.32px;
`;

const Content = styled.span`
  color: var(--gray-3, #b7b9c9);
  font-size: 12px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const DdayBadge = styled.div`
  color: var(--green-deep, #45bfd9);
  font-size: 32px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.64px;
`;
