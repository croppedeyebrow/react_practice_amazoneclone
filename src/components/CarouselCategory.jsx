import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselCategory = () => {
  return (
    <div className="bg-white m-3 ">
      <div className="text-2xl font-semibold p-3">Shop by Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img src={"/images/category_0.jpg"} alt="카테고리00" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/category_1.jpg"} alt="카테고리01" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/category_2.jpg"} alt="카테고리02" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/category_3.jpg"} alt="카테고리03" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/category_4.jpg"} alt="카테고리04" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/category_5.jpg"} alt="카테고리05" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
