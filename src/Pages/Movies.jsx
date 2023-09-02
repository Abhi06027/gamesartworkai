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
    </div>
  );
};

export default Movies;
