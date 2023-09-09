import { IoIosArrowForward } from "react-icons/io";
import { Aspect } from "../constants";
import ArtStyles from "./ArtStyles";

import Accordion from "./AccordionButton";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-5 absolute top-0 bottom-0 right-0 pt-20 z-10 h-screen overflow-hidden  hidden md:block w-[170px] lg:w-[250px] shadow-sm border-l  bg-[#ffffff]">
      <div>
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={toggleAccordion}
        >
          <p className=" text-sm  font-medium">Aspect Ratio</p>
          <span
            className={`transform ${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-transform duration-300 ml-2`}
          >
            <div className="hover:bg-slate-100 w-8 h-8 flex justify-center items-center rounded-md">
              <IoIosArrowForward />
            </div>
          </span>
        </button>
        {isOpen && (
          <ul className="flex items-center flex-wrap mt-3 gap-3">
            {Aspect.map((ratio, index) => (
              <Accordion key={ratio.id} index={index} ratio={ratio.aspect} />
            ))}
          </ul>
        )}
      </div>

      <div className="h-[1px] bg-black my-[20px] lg:my-[14px]  opacity-10" />
      <ArtStyles />
    </div>
  );
};

export default Sidebar;
