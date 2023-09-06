import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Aspect } from "../constants";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-5 absolute top-0 bottom-0 right-0 pt-20 z-10 h-full  hidden md:block w-[170px] lg:w-[250px] shadow-sm border-l  bg-[#ffffff]">
      <button
        className="flex items-center justify-between w-full  text-left"
        onClick={toggleAccordion}
      >
        <span className=" font-medium">Aspect Ratio</span>
        <span
          className={`transform ${
            isOpen ? "rotate-90" : "rotate-0"
          } transition-transform duration-300 ml-2`}
        >
          <div className="hover:bg-slate-100 p-2 rounded-md">
            <IoIosArrowForward />
          </div>
        </span>
      </button>
      {isOpen && (
        <div>
          <ul className="flex items-center flex-wrap mt-3 gap-3">
            {Aspect.map((ratio, index) => (
              <li key={ratio.id}>
                <button
                  onClick={handleClick}
                  className={`text-black text-sm p-1 text-center w-10 h-8 rounded-xl ${
                    isClicked == index
                      ? "bg-purple-400 text-white border-black border-2"
                      : "bg-gray-300"
                  }`}
                >
                  {ratio.aspect}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="h-[1px] bg-black my-[20px] lg:my-[14px] opacity-10" />
    </div>
  );
};

export default Sidebar;
