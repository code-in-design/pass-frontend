import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { DoughnutChart } from './DoughnutChart';

interface Props {
  data: {
    title: string;
    value: number;
    color: string;
    segment: ReactNode;
  }[];
}

export const UserRatioChart = (props: Props) => {
  const { data } = props;
  const percentages: number[] = [];
  const colors: string[] = [];
  data.forEach(item => {
    percentages.push(item.value);
    colors.push(item.color);
  });

  return (
    <UserRatioChartWrapper>
      <Title>사용자 비율</Title>
      <DoughnutChartWrapper>
        <DoughnutChart percentages={percentages} colors={colors} opt={{ spacing: 1, borderRadius: 4, cutout: 60, rotation: -90 }} />
      </DoughnutChartWrapper>
      {/* <Legend>
        {data.map((item, index) => {
          return (
            <LegndItem key={index}>
              <Marker backgroundColor={item.color} />
              <Label>{item.title}</Label>
            </LegndItem>
          );
        })}
      </Legend> */}
      <LegendWrapper>
        <div>
          <Legend>
            {data.map((item, index) => {
              if (index < 2)
                return (
                  <LegndItem key={index}>
                    <Marker backgroundColor={item.color} />
                    <Label>{item.title}</Label>
                  </LegndItem>
                );
            })}
          </Legend>
        </div>
        <div>
          <Legend>
            {data.map((item, index) => {
              if (index >= 2)
                return (
                  <LegndItem key={index}>
                    <Marker backgroundColor={item.color} />
                    <Label>{item.title}</Label>
                  </LegndItem>
                );
            })}
          </Legend>
        </div>
      </LegendWrapper>
    </UserRatioChartWrapper>
  );
};

UserRatioChart.defaultProps = {
  data: [
    { title: '고1', value: 25, color: '#60C8DE' },
    { title: '고2', value: 25, color: '#6B77F8' },
    { title: '고3', value: 25, color: '#AA83FF' },
    { title: '학부모', value: 12.5, color: '#E4E6F0' },
    { title: '교육자', value: 12.5, color: '#F3F4FA' },
  ],
};

const UserRatioChartWrapper = styled.div`
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

const PieChartWrraper = styled.div`
  height: 198px;
  flex-shrink: 0;
  align-self: stretch;
`;

const LegendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

const LegndItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Marker = styled.div<{ backgroundColor: string }>`
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

const DoughnutChartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 198px;
`;
