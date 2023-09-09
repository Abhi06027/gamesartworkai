import { useEffect, useState } from "react";
import MoviesCard from "../Components/MoviesCard";
import axios from "axios";
import Pagination from "../Components/Pagination";

const Movies = () => {
  const [users, serUsers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postPerPage, setpostPerPage] = useState(10);

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

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = users.slice(firstPostIndex, lastPostIndex);
  const handleLoadMore = () => {
    setpostPerPage(postPerPage + 2);
  };

  return (
    <div>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-medium text-white font-dm my-5 lg:my-10">
        News-Top Headlines
      </h1>
      <div className=" flex justify-center  mx-5">
        <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {currentPosts.map((curElem, index) => {
            return (
              <div key={index}>
                <MoviesCard
                  title={curElem.title}
                  description={curElem.description}
                  Imgsrc={curElem.urlToImage}
                  url={curElem.url}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Pagination
        totalPost={users.length}
        postPerPage={postPerPage}
        setcurrentPage={setcurrentPage}
        currentPage={currentPage}
      />
      <div className="flex justify-center items-center">
        <button
          className="bg-white w-28 h-10 rounded-sm bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff]   "
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Movies;
