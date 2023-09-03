import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import require module
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import require module

// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { RxDotFilled } from "react-icons/rx";
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
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper text-black rounded-md  w-[300px]  md:w-[650px] md:h-[400px] lg:w-[950px] lg:h-[600px] xl:w-[1300px] xl:h-[800px]   m-auto mt-4 md:mt-10  relative"
      >
        {Onslides.map((slide) => (
          <SwiperSlide key={slide.url}>
            <img src={slide.url} alt={slide.url} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlidingCarousel;
