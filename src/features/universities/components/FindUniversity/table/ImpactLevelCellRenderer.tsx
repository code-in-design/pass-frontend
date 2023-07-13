import styled from '@emotion/styled';
import ArrowDown from '../../../../../../public/images/icons/arrowDropDown.svg';
import ArrowUp from '../../../../../../public/images/icons/arrowDropUp.svg';
import ArrowDoubleDown from '../../../../../../public/images/icons/arrowDropDoubleDown.svg';
import ArrowDoubleUp from '../../../../../../public/images/icons/arrowDropDoubleUp.svg';
import Hyphen from '../../../../../../public/images/icons/hyphen.svg';

// 수능 or 실기가 해당 대학 합격에 미치는 중요도 (기여도)
type ImpactLevelType = {
  value: '최하' | '하' | '중' | '상' | '최상';
};

//기여도에 따라 아이콘과 글자 색을 다르게 보여준다. (수능기여도, 실기 기여도)
export const ImpactLevelCellRenderer = (props: ImpactLevelType) => {
  const { value } = props;

  return (
    <ImpactLevelContainer>
      {value === '최하' && <ArrowDoubleDown />}
      {value === '하' && <ArrowDown />}
      {value === '중' && <Hyphen />}
      {value === '상' && <ArrowUp />}
      {value === '최상' && <ArrowDoubleUp />}
      <ImpactLevelText type={value}>{value}</ImpactLevelText>
    </ImpactLevelContainer>
  );
};

const ImpactLevelContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImpactLevelText = styled.span<{ type: string }>`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => (props.type === '최하' || props.type === '하') && '#45BFD9'};
  color: ${props => props.type === '중' && '#626474'};
  color: ${props => (props.type === '상' || props.type === '최상') && '#FF4444'};
`;