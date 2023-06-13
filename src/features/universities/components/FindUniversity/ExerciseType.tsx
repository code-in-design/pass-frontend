import React from 'react';
import styled from '@emotion/styled';

interface Props {
  type: string;
  isSelected?: boolean;
  onClick?: (item?: string) => void;
}

const exerciseProps = {
  달리기10m: {
    text: '10m 달리기',
    icon: '/images/icons/exerciseIcon/10m달리기.png',
  },
  달리기20m: {
    text: '20m 달리기',
    icon: '/images/icons/exerciseIcon/20m달리기.png',
  },
  달리기25m: {
    text: '25m 달리기',
    icon: '/images/icons/exerciseIcon/25m달리기.png',
  },
  달리기50m: {
    text: '50m 달리기',
    icon: '/images/icons/exerciseIcon/50m달리기.png',
  },
  달리기80m: {
    text: '80m 달리기',
    icon: '/images/icons/exerciseIcon/80m달리기.png',
  },
  달리기100m: {
    text: '100m 달리기',
    icon: '/images/icons/exerciseIcon/100m달리기.png',
  },
  달리기800m: {
    text: '800m 달리기',
    icon: '/images/icons/exerciseIcon/800m달리기.png',
  },
  농구: {
    text: '농구',
    icon: '/images/icons/exerciseIcon/농구.png',
  },
  농구공던지기: {
    text: '농구공던지기',
    icon: '/images/icons/exerciseIcon/농구공던지기.png',
  },
  높이뛰기: {
    text: '높이뛰기',
    icon: '/images/icons/exerciseIcon/높이뛰기.png',
  },
  매달리기: {
    text: '매달리기',
    icon: '/images/icons/exerciseIcon/매달리기.png',
  },
  메디신볼던지기: {
    text: '메디신볼던지기',
    icon: '/images/icons/exerciseIcon/메디신볼던지기.png',
  },
  배구: {
    text: '배구',
    icon: '/images/icons/exerciseIcon/배구.png',
  },
  배근력: {
    text: '배근력',
    icon: '/images/icons/exerciseIcon/배근력.png',
  },
  사이드스텝: {
    text: '사이드스텝',
    icon: '/images/icons/exerciseIcon/사이드스텝.png',
  },
  서전트점프: {
    text: '서전트점프',
    icon: '/images/icons/exerciseIcon/서전트점프.png',
  },
  셔틀런: {
    text: '셔틀런',
    icon: '/images/icons/exerciseIcon/셔틀런.png',
  },
  순환식계측: {
    text: '순환식계측',
    icon: '/images/icons/exerciseIcon/순환식계측.png',
  },
  십자런: {
    text: '십자런',
    icon: '/images/icons/exerciseIcon/십자런.png',
  },
  싯업: {
    text: '싯업',
    icon: '/images/icons/exerciseIcon/싯업.png',
  },
  앉아메디신볼던지기: {
    text: '앉아메디신볼던지기',
    icon: '/images/icons/exerciseIcon/앉아메디신볼던지기.png',
  },
  전공: {
    text: '전공',
    icon: '/images/icons/exerciseIcon/전공.png',
  },
  제자리3단뛰기: {
    text: '제자리3단뛰기',
    icon: '/images/icons/exerciseIcon/제자리3단뛰기.png',
  },
  제자리멀리뛰기: {
    text: '제자리 멀리뛰기',
    icon: '/images/icons/exerciseIcon/제자리멀리뛰기.png',
  },
  좌전굴: {
    text: '좌전굴',
    icon: '/images/icons/exerciseIcon/좌전굴.png',
  },
  중량런: {
    text: '중량런',
    icon: '/images/icons/exerciseIcon/중량런.png',
  },
  체전굴: {
    text: '체전굴',
    icon: '/images/icons/exerciseIcon/체전굴.png',
  },
  체조: {
    text: '체조',
    icon: '/images/icons/exerciseIcon/체조.png',
  },
  축구: {
    text: '축구',
    icon: '/images/icons/exerciseIcon/축구.png',
  },
  핸드볼공던지기: {
    text: '핸드볼공던지기',
    icon: '/images/icons/exerciseIcon/핸드볼공던지기.png',
  },
  허들: {
    text: '허들',
    icon: '/images/icons/exerciseIcon/허들.png',
  },
};

const ExerciseType = (props: Props) => {
  const exercise = exerciseProps[props.type] || { text: '-', icon: '' };
  const Component = props.isSelected ? SelectExerciseItem : ExerciseItem;
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(exercise.text);
    }
  };
  return (
    <Component onClick={handleClick}>
      {props.isSelected ? <ExerciseIcon src={exercise.icon} alt={exercise.text} /> : <ExerciseIcon src={exercise.icon} alt={exercise.text} />}
      <ExerciseTitle>{exercise.text}</ExerciseTitle>
    </Component>
  );
};

export default ExerciseType;

const ExerciseItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.gray6};
  color: ${props => props.theme.colors.gray1};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const SelectExerciseItem = styled.div`
  display: flex;
  width: 100%;
  gap: 0 10px;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 16px;
  margin-right: 10px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

const ExerciseIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ExerciseTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`;
