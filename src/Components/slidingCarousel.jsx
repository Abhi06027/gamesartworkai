import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { RxDotFilled } from "react-icons/rx";
import { Onslides } from "../constants";

export const SlidingCarousel = ({
  autoSlide = true,
  autoSlideInterval = 10000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((curr) => (curr === 0 ? Onslides.length - 1 : curr - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((curr) => (curr === Onslides.length - 1 ? 0 : curr + 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className=" max-w-[350px] h-[350px] md:max-w-[700px] md:h-[800px] lg:max-w-[1350px] lg:h-[1000px] p-8 w-full m-auto md:mt-5 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${Onslides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl  first-letter:bg-center bg-cover duration-500"
      ></div>

      <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
        <IoIosArrowBack className="  text-[30px] " onClick={prevSlide} />
      </div>

      <div className="absolute top-[50%]  -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
        <IoIosArrowForward className="text-[30px]" onClick={nextSlide} />
      </div>

      <div className="flex top-4 justify-center py-2">
        {Onslides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`"text-2xl text-white cursor-pointer  ${
              currentIndex === slideIndex ? "" : "text-opacity-20"
            } "`}
          >
            <RxDotFilled size={25} />
          </div>
        ))}
      </div>
    </div>
  );
};
