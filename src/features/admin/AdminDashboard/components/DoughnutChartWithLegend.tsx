import styled from '@emotion/styled';
import { DoughnutChart } from './DoughnutChart';
import { ChartOptions } from 'chart.js';

export interface DoughnutChartWithLegendData {
  title: string;
  value: number;
  color: string;
}

export interface DoughnutChartWithLegendProps {
  title: string;
  data: DoughnutChartWithLegendData[];
  legendWidth: string;
  options?: ChartOptions<'doughnut'>;
  upsideDown?: boolean;
}

export const DoughnutChartWithLegend = (props: DoughnutChartWithLegendProps) => {
  const { title, data, legendWidth, options, upsideDown } = props;
  return (
    <PurchasePlanRatioChartWrapper>
      <Title>{title}</Title>
      <DoughnutChartWrapper upsideDown={upsideDown}>
        <DoughnutChart data={data} options={options} />
      </DoughnutChartWrapper>
      <Legend>
        <LegndItemWrapper legendWidth={legendWidth}>
          {data.map((item, index) => {
            return (
              <LegndItem key={index}>
                <Marker backgroundColor={item.color} />
                <Label>{item.title}</Label>
              </LegndItem>
            );
          })}
        </LegndItemWrapper>
      </Legend>
    </PurchasePlanRatioChartWrapper>
  );
};

DoughnutChartWithLegend.defaultProps = {
  title: '타이틀',
  data: [
    { title: 'Basic', value: 25, color: 'rgba(228, 230, 240, 1)' },
    { title: 'Light', value: 25, color: 'rgba(96, 200, 222, 1)' },
    { title: 'Premium', value: 50, color: 'rgba(107, 119, 248, 1)' },
  ],
  legendWidth: '100%',
};

interface MarkerProps {
  backgroundColor: string;
}

interface LegndItemWrapperProps {
  legendWidth?: string;
}

interface DoughnutChartWrapperProps {
  upsideDown?: boolean;
}

const PurchasePlanRatioChartWrapper = styled.div`
  display: flex;
  height: 348px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  border-radius: 16px;
  background: var(--gray-white, #fff);
`;

const Title = styled.span`
  color: var(--gray-black, #353644);
  font-size: 20px;
  font-family: Pretendard Bold;
  line-height: 24px;
  letter-spacing: -0.4px;
`;

const Legend = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LegndItemWrapper = styled.div<LegndItemWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 20px;
  width: ${({ legendWidth }) => legendWidth};
`;

const LegndItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Marker = styled.div<MarkerProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: ${({ backgroundColor }) => backgroundColor};
`;

const Label = styled.span`
  color: var(--gray-1, #626474);
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const DoughnutChartWrapper = styled.div<DoughnutChartWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 198px;
  ${({ upsideDown }) =>
    upsideDown &&
    `
    transform: scaleY(-1);
  `}
`;
