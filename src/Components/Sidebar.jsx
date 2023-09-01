import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { Aspect } from "../constants";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
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
          <ul className="flex items-center flex-wrap mt-3 gap-2">
            {Aspect.map((ratio) => (
              <li key={ratio.id}>
                <button
                  onClick={handleClick}
                  style={{ backgroundColor: active ? "#d5d5f9" : "white" }}
                  className="text-black text-sm p-1 text-center w-10 h-8 border-2 border-purple-600  rounded-xl cursor-pointer"
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