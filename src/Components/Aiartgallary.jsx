import { aiartgallary } from "../constants";
import Card from "./Card";

const Aiartgallary = () => {
  return (
    <div>
      <div className="text-white flex items-center justify-center text-lg md:text-3xl font-medium lg:pt-18 md:pt-14 pt-8">
        <h1>Games Artwork Generated by AI</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 py-2 ">
          {aiartgallary.map((ai) => (
            <Card key={ai.id} url={ai.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aiartgallary;
