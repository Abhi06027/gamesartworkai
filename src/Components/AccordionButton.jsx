import { useState } from "react";

const AccordionButton = ({ ratio, index }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div>
        <button
          onClick={handleClick}
          className={`text-black text-sm p-1 text-center w-10 h-8 rounded-xl ${
            isClicked == index
              ? "bg-purple-400 text-white border-black border-2"
              : "bg-gray-300"
          }`}
        >
          {ratio}
        </button>
      </div>
    </>
  );
};

export default AccordionButton;
