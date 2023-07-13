import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoIconWrapper = styled.span<{ color: string; marginLeft?: string; marginRight?: string }>`
  display: inline-block;
  color: ${props => props.color};
  width: 14px;
  height: 14px;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
  cursor: pointer;
`;

export const TooltipText = styled.div`
  color: #000;
`;

// 학과정보, 수능 과목별 반영비율, 실기 반영종목, 학교 정보 바로가기
export const MenuTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: ${props => props.theme.colors.grayBlack};
  margin-bottom: 12px;
  margin-top: 32px;
  &:first-of-type {
    margin-top: 24px;
  }
`;

// 학과 정보
export const InformationWrapper = styled.div`
  display: flex;
  gap: 0 24px;
`;

export const Information = styled.div`
  display: flex;
`;

export const InformationBox = styled.div`
  width: 96px;
  height: 72px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.gray6};
  padding: 12px;
  margin-right: 8px;
`;

export const InformationBoxTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.gray1};
  margin-bottom: 4px;
`;

export const InformationBoxText = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: ${props => props.theme.colors.grayBlack};
`;

export const InformationMethod = styled.div`
  min-width: 323px;
`;

export const InformationMethodTitle = styled.div`
  margin: 24px 0 12px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;

// 전형 방법
export const GraphWrapper = styled.div`
  display: flex;
  gap: 0 8px;
  margin-bottom: 2px;
  :last-of-type {
    margin-bottom: 0px;
  }
`;

export const Graph = styled.div`
  width: 100%;
  height: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.gray5};
  overflow: hidden;
`;

export const GraphTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  white-space: nowrap;
`;

export const GraphScore = styled.div<{ width: string; bgColor: string }>`
  display: ${props => (props.width === '0%' ? 'none' : 'bolck')};
  width: ${props => props.width};
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  padding: 0 4px;
  text-align: right;
  background-color: ${props => props.bgColor};
`;

export const HelpIconWrapper = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  color: ${props => props.theme.colors.gray3};
  margin-left: 4px;
`;
//수능 과목별 반영 비율
export const GradeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 12px;
  border-style: hidden;
  box-shadow: 0 0 0 1px ${props => props.theme.colors.gray4};
  overflow: hidden;
`;

export const GradeTableThead = styled.thead`
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${props => props.theme.colors.blue};
`;

export const GradeTableTheadTr = styled.tr`
  background-color: rgba(107, 119, 248, 0.2);
  height: 32px;
  & > td {
    width: 109.4px;
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

export const GradeTableTbody = styled.tbody`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors.black};
`;

export const GradeTableTBodyTr = styled.tr`
  height: 32px;
  & > td {
    border: 1px solid ${props => props.theme.colors.gray4};
  }
`;

export const TableTd = styled.td`
  vertical-align: middle;
  & > span {
    font-size: 10px;
    line-height: 12px;
    font-weight: 500;
  }
`;

// 실기고사 일정, 최초합격자 발표일
export const DateBox = styled.div`
  height: 68px;
  padding: 16px 24px;
  background-color: rgba(107, 119, 248, 0.15);
  display: flex;
  border-radius: 16px;
  width: 100%;
  margin-right: 16px;
  margin-top: 32px;
  color: ${props => props.theme.colors.blue};
  :last-of-type {
    margin-right: 0;
    background-color: rgba(96, 200, 222, 0.15);
    color: #45bfd9;
  }
`;

export const DateContainer = styled.div`
  margin-left: 16px;
`;

export const DateName = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.grayBlack};
`;
export const Date = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
`;

// 학교 정보 바로가기
export const InfoItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  border: 1px solid ${props => props.theme.colors.gray4};
  margin-right: 10px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const InfoIcon = styled.div`
  color: ${props => props.theme.colors.green};
  width: 20px;
  height: 20px;
`;

export const InfoTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.grayBlack};
`;

// 배점표 보기
export const ShowTable = styled.div`
  height: 24px;
  padding: 4px 8px;
  display: flex;
  border-radius: 8px;
  gap: 0 4px;
  border: 1px solid ${props => props.theme.colors.gray4};
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
  color: ${props => props.theme.colors.gray1};
  cursor: pointer;
`;

// 실기 반영 종목
export const ExerciseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 12px;
`;
