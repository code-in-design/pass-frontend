import React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from '@chakra-ui/react';
import HelpOutline from '../../../public/images/icons/helpOutline.svg';

const TableHeaderTooltip = props => {
  const { displayName } = props;
  let label;
  const contribution = (
    <div>
      수능기여도 : 반영 비율과 상관없이 합격을 위한 수능이 차지하는 실질변별력이에요 <br />
      실기 기여도 : 반영 비율과 상관없이 합격을 위한 실기가 차지하는 실질변별력이에요
    </div>
  );
  const conversionScore = '실기 만점을 기준으로 환산된 총 환산 점수에요!';
  const zValue = (
    <div>
      대학별 반영 과목과 반영 비율을 기준으로 등급 을 환산한 수치로, 숫자가 낮을 수록 더 유리하다고 생각하면 돼요. <br />
      예를들어, 국어2등급, 영어 3등급, 탐구 1과목 3등급인 학생의 국어 40% 영어 20% 탐구 상위 1과목 40%를 반영하는 학과에서의 Z-지수는 2x0.4 + 3x0.2 + 3x0.4 = 2.6이에요
    </div>
  );
  if (displayName === '기여도') label = contribution;
  if (displayName === '수능환산점수') label = conversionScore;
  if (displayName === 'Z-지수') label = zValue;
  return (
    <TooltipWrapper>
      {displayName}
      <Tooltip hasArrow label={label} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
        <TooltipPosition>
          <HelpOutline />
        </TooltipPosition>
      </Tooltip>
    </TooltipWrapper>
  );
};

export default TableHeaderTooltip;

const TooltipWrapper = styled.div`
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  color: #353644;
  display: flex;
  gap: 0 2px;
`;

const TooltipPosition = styled.div`
  cursor: pointer;
`;
