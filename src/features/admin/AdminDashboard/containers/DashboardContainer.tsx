import styled from '@emotion/styled';
import { InfoCard } from '../components/InfoCard';
import SalesIcon from '../../../../../public/images/icons/grossSales.svg';
import BarChartIcon from '../../../../..//public/images/icons/bar_chart.svg';
import EditDocumentIcon from '../../../../../public/images/icons/edit_document.svg';
import UpdateIcon from '../../../../../public/images/icons/update.svg';
import { Flex } from '@chakra-ui/react';
import { UpdateCounter } from '../components/UpdateCounter';
import { SalesChart } from '../components/SalesChart';
import { WeeklySalesChart } from '../components/WeeklySalesChart';
import { GradeAndSampleCounter } from '../components/GradeAndSampleCounter';
import { DailyReport } from '../components/DailyReport';
import { PurchasePlanRatioChart } from '../components/PurchasePlanRatioChart';

export const DashboardContainer = () => {
  return (
    <DashboardWrapper>
      <Title>Main Dashboard</Title>
      <Flex gap="16px">
        <InfoCard icon={<SalesIcon />} title="총 매출" content="79,500,000" />
        <InfoCard icon={<BarChartIcon />} title="총 유입 표본 개수" content="23,456" />
        <InfoCard icon={<EditDocumentIcon />} title="총 성적 입력 개수" content="45,678" />
        <UpdateCounter icon={<UpdateIcon />} title="Next Update" content="2023.01.01" />
      </Flex>
      <Flex gap="16px">
        <SalesChart />
        <WeeklySalesChart />
        <GradeAndSampleCounter />
      </Flex>
      <Flex gap="16px">
        <DailyReport />
        <PurchasePlanRatioChart />
      </Flex>
    </DashboardWrapper>
  );
};

const DashboardWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Title = styled.div`
  color: var(--black, #191e25);
  font-size: 24px;
  font-family: Pretendard Bold;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
