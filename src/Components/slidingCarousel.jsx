import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Onslides } from "../constants";

const SlidingCarousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-next-prev",
        }}
        pagination={{
          el: ".swiper-custom-pagination",
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[300px] rounded-lg md:w-[650px] lg:w-[950px] xl:w-[1300px]
        m-auto mt-4 md:mt-10 "
      >
        {Onslides.map((slide) => (
          <SwiperSlide className="" key={slide.url}>
            <img className="" src={slide.url} alt={slide.url} />
            <div className="swiper-pagination"></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" flex justify-center items-center lg:mt-4 space-x-4">
        <div className="button-next-prev hidden lg:block cursor-pointer w-20 p-2 text-center text-white bg-blue-600 rounded-md border-none outline-none shadow-md">
          Prev
        </div>
        <div className="button-next-slide hidden lg:block cursor-pointer w-20 p-2 text-center text-white bg-blue-600 rounded-md border-none outline-none shadow-md ">
          Next
        </div>
      </div>
      <div className="swiper-custom-pagination flex justify-center items-center space-x-2 mt-4 " />
    </div>
  );
};

export default SlidingCarousel;
