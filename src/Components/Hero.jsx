import Aiartgallary from "./Aiartgallary";
import Button from "./Button";
import InputField from "./InputField";
import SlidingCarousel from "./slidingCarousel";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center text-white text-center pt-32">
        <h1 className="px-2 font-semibold text-7xl lg:text-[100px] md:text-[60px] sm:text-[50px] text-[30px] lg:leading-[110px] md:leading-[80px] sm:leading-[60px] leading-[40px]">
          Create Stunning
          <br />
          <span>Games Artwork with AI</span>
        </h1>
        <p className="my-5 px-2 break-words ">
          Create production-quality artwork for your work. Enter a prompt,
          choose a style.
        </p>
      </div>
      <div className="mx-4 mt-4">
        <div className="relative mx-auto max-w-3xl">
          <InputField
            style="w-full p-4 pl-2 md:pl-5 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-[1.2px]"
            type="text"
            placeholder="Generate Your Games Artwork"
          />
          <Button
            type="submit"
            name="Generate"
            style="text-white absolute right-2.5 bottom-2 bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
          ></Button>
        </div>
        <Aiartgallary />
      </div>
      <SlidingCarousel />
    </div>
  );
};

export default Home;
