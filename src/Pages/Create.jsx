import { Button, InputField } from "../Components";
import Leftbar from "../Components/Leftbar";
import Sidebar from "../Components/Sidebar";
import Toolbar from "../Components/Toolbar";
import { preview } from "../assets";
const Create = () => {
  return (
    <div>
      <Leftbar />
      <Toolbar />
      <div>
        <Sidebar />
      </div>
      <div className=" bg-[#f6f6f6] flex flex-col justify-center  h-screen">
        <div className="flex justify-center items-center ">
          <img
            className="text-lg w-80 lg:w-96 text-black "
            src={preview}
            alt="logo"
          />
        </div>

        <div className="absolute pb-8 w-full bottom-0 ">
          <div className="relative mx-auto w-[95%] md:w-[55%]  lg:w-1/2  ">
            <InputField
              style="w-full p-4 pl-2 md:pl-5 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-[1.2px]"
              type="text"
              placeholder="Generate Your Games Artwork"
            />
            <Button
              name="Generate"
              style="text-white absolute right-2.5 bottom-2 bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
