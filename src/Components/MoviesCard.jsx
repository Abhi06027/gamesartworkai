const MoviesCard = ({ title, Imgsrc }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg w-[300px] h-[400px] ">
        <img
          className="rounded-t-lg w-full h-52 object-cover"
          src={Imgsrc}
          alt=""
        />

        <div className="p-4">
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
