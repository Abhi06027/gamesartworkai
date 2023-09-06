const Card = ({ url }) => {
  return (
    <div className="mt-2  md:mt-4 lg:mt-8 shadow-md rounded-lg w-[300px]">
      <img
        className="rounded-t-lg w-full h-[400px] hover:scale-105 transition duration-100 cursor-pointer rounded-lg object-top object-cover"
        src={url}
        alt="ai-images"
      />
    </div>
  );
};

export default Card;
