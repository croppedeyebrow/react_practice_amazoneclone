import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        spaceBetween={0}
        className="h-[50%]"
      >
        <SwiperSlide>
          {/* 2025.0105 : public 폴더의 파일을 참조할 때는 상대 경로(../../public/)를 사용하지 않습니다. */}
          <img src={"/images/carousel_1.jpg"} alt="캐러셀 이미지 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/carousel_2.jpg"} alt="캐러셀 이미지 2" />
        </SwiperSlide>

        <SwiperSlide className="bg-black">
          <video controls muted="muted">
            <source
              src={"/images/carousel_vid.mp4"}
              type="video/mp4"
              alt="캐러셀 영상"
            />
          </video>
        </SwiperSlide>
        {/* controls 속성은 HTML5 비디오 플레이어의 기본 컨트롤러를 표시하는 기능.
            1. 재생/일시정지 버튼  2.볼륨조절버튼 3.전체화면전환버튼 4.진행시간표시 5.재생진행바 */}

        <SwiperSlide>
          <img src={"/images/carousel_4.jpg"} alt="캐러셀 이미지 4" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={"/images/carousel_5.jpg"} alt="캐러셀 이미지 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
