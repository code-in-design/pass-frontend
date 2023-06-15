import React from 'react';
import styled from '@emotion/styled';
import Run10m from '../../../../../../public/images/icons/exerciseIcon/10m달리기.svg';
import Run20m from '../../../../../../public/images/icons/exerciseIcon/20m달리기.svg';
import Run25m from '../../../../../../public/images/icons/exerciseIcon/25m달리기.svg';
import Run50m from '../../../../../../public/images/icons/exerciseIcon/50m달리기.svg';
import Run80m from '../../../../../../public/images/icons/exerciseIcon/80m달리기.svg';
import Run100m from '../../../../../../public/images/icons/exerciseIcon/100m달리기.svg';
import Run800m from '../../../../../../public/images/icons/exerciseIcon/800m달리기.svg';
import 농구 from '../../../../../../public/images/icons/exerciseIcon/농구.svg';
import 농구공던지기 from '../../../../../../public/images/icons/exerciseIcon/농구공던지기.svg';
import 높이뛰기 from '../../../../../../public/images/icons/exerciseIcon/높이뛰기.svg';
import 매달리기 from '../../../../../../public/images/icons/exerciseIcon/매달리기.svg';
import 메디신볼던지기 from '../../../../../../public/images/icons/exerciseIcon/메디신볼던지기.svg';
import 배구 from '../../../../../../public/images/icons/exerciseIcon/배구.svg';
import 배근력 from '../../../../../../public/images/icons/exerciseIcon/배근력.svg';
import 사이드스텝 from '../../../../../../public/images/icons/exerciseIcon/사이드스텝.svg';
import 서전트점프 from '../../../../../../public/images/icons/exerciseIcon/서전트점프.svg';
import 셔틀런 from '../../../../../../public/images/icons/exerciseIcon/셔틀런.svg';
import 순환식계측 from '../../../../../../public/images/icons/exerciseIcon/순환식계측.svg';
import 십자런 from '../../../../../../public/images/icons/exerciseIcon/십자런.svg';
import 싯업 from '../../../../../../public/images/icons/exerciseIcon/싯업.svg';
import 앉아메디신볼던지기 from '../../../../../../public/images/icons/exerciseIcon/앉아메디신볼던지기.svg';
import 전공 from '../../../../../../public/images/icons/exerciseIcon/전공.svg';
import 제자리3단뛰기 from '../../../../../../public/images/icons/exerciseIcon/제자리3단뛰기.svg';
import 제자리멀리뛰기 from '../../../../../../public/images/icons/exerciseIcon/제자리멀리뛰기.svg';
import 좌전굴 from '../../../../../../public/images/icons/exerciseIcon/좌전굴.svg';
import 중량런 from '../../../../../../public/images/icons/exerciseIcon/중량런.svg';
import 체전굴 from '../../../../../../public/images/icons/exerciseIcon/체전굴.svg';
import 체조 from '../../../../../../public/images/icons/exerciseIcon/체조.svg';
import 축구 from '../../../../../../public/images/icons/exerciseIcon/축구.svg';
import 핸드볼공던지기 from '../../../../../../public/images/icons/exerciseIcon/핸드볼공던지기.svg';
import 허들 from '../../../../../../public/images/icons/exerciseIcon/허들.svg';
import MyTooltip from '@/components/Tooltip';
import { Tooltip } from '@chakra-ui/react';

interface Props {
  type: string;
  id: number;
}

const exerciseProps = {
  달리기10m: {
    icon: <Run10m />,
  },
  달리기20m: {
    icon: <Run20m />,
  },
  달리기25m: {
    icon: <Run25m />,
  },
  달리기50m: {
    icon: <Run50m />,
  },
  달리기80m: {
    icon: <Run80m />,
  },
  달리기100m: {
    icon: <Run100m />,
  },
  달리기800m: {
    icon: <Run800m />,
  },
  농구: {
    icon: <농구 />,
  },
  농구공던지기: {
    icon: <농구공던지기 />,
  },
  높이뛰기: {
    icon: <높이뛰기 />,
  },
  매달리기: {
    icon: <매달리기 />,
  },
  메디신볼던지기: {
    icon: <메디신볼던지기 />,
  },
  배구: {
    icon: <배구 />,
  },
  배근력: {
    icon: <배근력 />,
  },
  사이드스텝: {
    icon: <사이드스텝 />,
  },
  서전트점프: {
    icon: <서전트점프 />,
  },
  셔틀런: {
    icon: <셔틀런 />,
  },
  순환식계측: {
    icon: <순환식계측 />,
  },
  십자런: {
    icon: <십자런 />,
  },
  싯업: {
    icon: <싯업 />,
  },
  앉아메디신볼던지기: {
    icon: <앉아메디신볼던지기 />,
  },
  전공: {
    icon: <전공 />,
  },
  제자리3단뛰기: {
    icon: <제자리3단뛰기 />,
  },
  '제자리 멀리뛰기': {
    icon: <제자리멀리뛰기 />,
  },
  좌전굴: {
    icon: <좌전굴 />,
  },
  중량런: {
    icon: <중량런 />,
  },
  체전굴: {
    icon: <체전굴 />,
  },
  체조: {
    icon: <체조 />,
  },
  축구: {
    icon: <축구 />,
  },
  핸드볼공던지기: {
    icon: <핸드볼공던지기 />,
  },
  허들: {
    icon: <허들 />,
  },
};

const ExerciseIcon = (props: Props) => {
  const exercise = exerciseProps[props.type] || null;
  return (
    <Tooltip hasArrow label={props.type} bg="#fff" color="#353644" borderRadius="16px" padding="16px">
      <ExerciseIconWrapper>{exercise.icon}</ExerciseIconWrapper>
    </Tooltip>
  );
};

export default ExerciseIcon;

const ExerciseIconWrapper = styled.div`
  color: ${props => props.theme.colors.blue};
`;
