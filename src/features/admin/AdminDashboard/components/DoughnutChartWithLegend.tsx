import styled from '@emotion/styled';
import { DoughnutChart } from './DoughnutChart';
import { ChartOptions } from 'chart.js';
import theme from '@/theme/theme';

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
}

export const DoughnutChartWithLegend = (props: DoughnutChartWithLegendProps) => {
  const { title, data, legendWidth, options } = props;
  return (
    <DoughnutChartWithLegendWrapper>
      <Title>{title}</Title>
      <DoughnutChartWrapper>
        <DoughnutChart data={data} options={options} />
      </DoughnutChartWrapper>
      <Legend>
        <LegndItemWrapper legendWidth={legendWidth}>
          {data.map((item, index) => {
            return (
              <LegndItem key={index}>
                <Marker color={item.color} />
                <Label>{item.title}</Label>
              </LegndItem>
            );
          })}
        </LegndItemWrapper>
      </Legend>
    </DoughnutChartWithLegendWrapper>
  );
};

DoughnutChartWithLegend.defaultProps = {
  title: '타이틀',
  data: [
    { title: 'Light', value: 25, color: theme.colors.gray4 },
    { title: 'Basic', value: 25, color: theme.colors.green },
    { title: 'Premium', value: 50, color: theme.colors.blue },
  ],
  legendWidth: '100%',
};

const DoughnutChartWithLegendWrapper = styled.div`
  display: flex;
  height: 348px;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
  border-radius: 16px;
  background: ${theme.colors.white};
`;

const Title = styled.span`
  color: ${theme.colors.grayBlack};
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

const LegndItemWrapper = styled.div<Pick<DoughnutChartWithLegendProps, 'legendWidth'>>`
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

const Marker = styled.div<Pick<DoughnutChartWithLegendData, 'color'>>`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  background: ${({ color }) => color};
`;

const Label = styled.span`
  color: ${theme.colors.gray1};
  font-size: 12px;
  font-family: Pretendard SemiBold;
  line-height: 16px;
  letter-spacing: -0.24px;
`;

const DoughnutChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 198px;
`;
