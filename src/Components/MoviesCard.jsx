const MoviesCard = ({ title, Imgsrc }) => {
  return (
    <div>
      <div>
        <div className="bg-white shadow-md  rounded-lg  lg:w-[500px] lg:h-[430px] h-[470px] mx-4  ">
          <img
            className="rounded-t-lg w-full h-80 object-cover"
            src={Imgsrc}
            alt=""
          />

          <div className="">
            <h2 className="text-lg p-4 text-center font-medium">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
