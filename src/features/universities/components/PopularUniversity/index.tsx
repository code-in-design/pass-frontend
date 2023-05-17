import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import PopularItem from './PopularItem';
import 'swiper/css';
import 'swiper/css/scrollbar';

interface PopularlProps {
  img: string;
  name: string;
  major: string;
  number: number;
}

interface Props {
  data: Array<PopularlProps>;
}

const PopularUniversity = (props: Props) => {
  return (
    <Container>
      <Title>실시간 인기 대학 · 학과</Title>
      <SwiperWrapper>
        <CustomSwiper slidesPerView={'auto'} scrollbar={{ draggable: true }} spaceBetween={8} modules={[Scrollbar]}>
          {props.data.map((item, index) => (
            <SwiperSlide key={`pupularUniv-${item.number}`}>
              <PopularItem img={item.img} name={item.name} major={item.major} number={item.number} index={index + 1} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </SwiperWrapper>
    </Container>
  );
};

export default PopularUniversity;

PopularUniversity.defaultProps = {
  data: [
    {
      img: '/images/icons/univ/hanyang.svg',
      name: '한양대학교',
      major: '스포츠사이언스학과',
      number: 1,
    },
    {
      img: '/images/icons/univ/hanyang.svg',
      name: '한양대학교',
      major: '스포츠사이언스학과',
      number: 2,
    },
    {
      img: '/images/icons/univ/hanyang.svg',
      name: '한양대학교',
      major: '스포츠사이언스학과',
      number: 3,
    },
    {
      img: '/images/icons/univ/hanyang.svg',
      name: '한양대학교',
      major: '스포츠사이언스학과',
      number: 4,
    },
    {
      img: '/images/icons/univ/hanyang.svg',
      name: '한양대학교',
      major: '스포츠사이언스학과',
      number: 5,
    },
  ],
};

const Container = styled.div`
  min-width: 492px;
  width: 100%;
  margin-top: 32px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.04em;
  color: #353644;
  margin-bottom: 12px;
`;

const SwiperWrapper = styled.div`
  padding: 13px 16px 6px;
  background-color: #fff;
  border-radius: 16px;
  height: 152px;
`;

const CustomSwiper = styled(Swiper)`
  min-width: 492px;
  width: 100%;
  height: 100%;
  .swiper {
    position: relative !important;
  }
  .swiper-wrapper {
    width: 520px !important;
  }
  .swiper-wrapper .swiper-slide {
    width: calc(100% / 5) !important;
    height: 123px !important;
  }
  .swiper-scrollbar {
    position: absolute !important;
    bottom: 0 !important;
    background: transparent !important;
  }
  .swiper-scrollbar-drag {
    background: rgba(98, 100, 116, 0.2) !important;
  }
`;
