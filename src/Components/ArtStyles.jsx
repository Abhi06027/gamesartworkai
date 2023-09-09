import { IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

import SwitchButton from "./SwitchButton";
const ArtStyles = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <p className="text-sm font-medium">Art Styles</p>
      <div className=" bg-[#f6f6f6] border w-full h-9 px-2 my-2 rounded-[12px] flex items-center justify-between ">
        <button
          onClick={toggleAccordion}
          className=" flex items-center justify-between w-full "
        >
          <p className=" text-sm text-black  text-opacity-90 ">Add Style</p>

          <span
            className={`transform ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-300 ml-2`}
          >
            <div className="flex justify-center items-center ">
              <IoIosArrowForward />
            </div>
          </span>
        </button>
      </div>
      <SwitchButton />
    </div>
  );
};

export default ArtStyles;
