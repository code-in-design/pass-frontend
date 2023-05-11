import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import PopularItem from './PopularItem';
import 'swiper/css';
import 'swiper/css/scrollbar';
// import './popular.module.css';

const defaultProps = [
  {
    img: 'hanyang',
    name: '한양대학교',
    major: '스포츠사이언스학과',
    number: 1,
  },
  {
    img: 'hanyang',
    name: '한양대학교',
    major: '스포츠사이언스학과',
    number: 2,
  },
  {
    img: 'hanyang',
    name: '한양대학교',
    major: '스포츠사이언스학과',
    number: 3,
  },
  {
    img: 'hanyang',
    name: '한양대학교',
    major: '스포츠사이언스학과',
    number: 4,
  },
  {
    img: 'hanyang',
    name: '한양대학교',
    major: '스포츠사이언스학과',
    number: 5,
  },
];

const PopularUniversity = () => {
  return (
    <Container>
      <Title>실시간 인기 대학 · 학과</Title>
      <CustomSwiper slidesPerView={'auto'} scrollbar={{ draggable: true }} spaceBetween={8} modules={[Scrollbar]}>
        {defaultProps.map(item => (
          <SwiperSlide key={`pupularUniv-${item.number}`}>
            <PopularItem img={item.img} name={item.name} major={item.major} number={item.number} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </Container>
  );
};

export default PopularUniversity;

const Container = styled.div`
  width: 492px;
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

const CustomSwiper = styled(Swiper)`
  width: 492px;
  height: 152px;
  padding: 13px 16px 16px;
  background-color: #fff;
  border-radius: 16px;
  .swiper {
    position: relative !important;
  }
  .swiper-wrapper {
    width: 520px !important;
  }
  .swiper-wrapper .swiper-slide {
    width: calc(100% / 5) !important;
  }
`;
