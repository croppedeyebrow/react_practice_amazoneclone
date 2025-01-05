import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CarouselProduct = () => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i}>
            <img src={`/images/product_${i}_small.jpg`} alt="product" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
