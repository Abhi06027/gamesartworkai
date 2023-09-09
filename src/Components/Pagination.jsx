const Pagination = ({
  totalPost,
  postPerPage,
  setcurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  const handleNextClick = () => {
    setcurrentPage(currentPage + 1);
  };
  const handlePreviousClick = () => {
    setcurrentPage(currentPage - 1);
  };

  return (
    <div className="flex justify-center space-x-5 my-8">
      {currentPage > 1 && (
        <button
          className="text-white bg-blue-600  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          onClick={handlePreviousClick}
          // disabled={currentPage == pages[0] ? true : false}
        >
          &larr; Previous
        </button>
      )}
      {pages.map((page, index) => (
        <button
          className={` ${page == currentPage ? " bg-white" : " bg-gray-300 "}
          flex justify-center items-center w-5 h-5 p-5 rounded-md
       `}
          key={index}
          onClick={() => setcurrentPage(page)}
        >
          {page}
        </button>
      ))}

      {currentPage <= pages.length - 1 && (
        <button
          className="bg-blue-600 rounded-md text-white cursor-pointer px-4 hover:bg-blue-700"
          // disabled={currentPage == pages[pages.length - 1] ? true : false}
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
};

export default Pagination;
