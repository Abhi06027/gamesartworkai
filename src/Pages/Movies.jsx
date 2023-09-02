import { useEffect, useState } from "react";
import MoviesCard from "../Components/MoviesCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { RxDotFilled } from "react-icons/rx";
const Movies = () => {
  const [users, serUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=7f23846ddb56479f814e843d7a4a309c`
      );
      serUsers(response.data.articles);
      console.log(response);
    };

    getUsers();
  }, []);
  function handleNextClick(e) {
    console.log("Next");
  }
  function handlePreviousClick(e) {
    console.log("Previous");
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li
        className={active ? "text-white" : "text-white opacity-20"}
        onClick={() => onClick()}
      >
        <RxDotFilled size={25} />
      </li>
    );
  };

  return (
    <div className="lg:py-28 md:pt-28 pt-24 mx-6 ">
      <h1 className="text-center text-3xl font-medium text-white font-dm mb-8">
        News-Top Headlines
      </h1>
      <Carousel
        className=" pb-12 "
        autoPlaySpeed={5000}
        transitionDuration={500}
        showDots={true}
        responsive={responsive}
        customDot={<CustomDot />}
      >
        {users.map((curElem) => {
          return (
            <div key={curElem}>
              <MoviesCard
                title={curElem.title}
                description={curElem.description}
                Imgsrc={curElem.urlToImage}
                url={curElem.url}
              />
            </div>
          );
        })}
      </Carousel>
      ;
      <div className="flex justify-around my-5">
        <button
          className="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          disabled
          onClick={handlePreviousClick}
        >
          &larr; Previous
        </button>

        <button
          type="button"
          className="bg-blue-600 rounded-md text-white  px-4 hover:bg-blue-700"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Movies;
