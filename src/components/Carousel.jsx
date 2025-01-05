import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        navigation={true}
        spaceBetween={0}
        className="6-[50%]"
      >
        <SwiperSlide>
          {/* 2025.0105 : public 폴더의 파일을 참조할 때는 상대 경로(../../public/)를 사용하지 않습니다. */}
          <img src={"/images/carousel_1.jpg"} alt="캐러셀 이미지 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/carousel_2.jpg"} alt="캐러셀 이미지 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
