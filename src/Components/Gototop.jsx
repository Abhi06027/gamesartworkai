import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Gototop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <div
          className="fixed z-[999] bottom-20  md:bottom-24 flex justify-center items-center cursor-pointer right-5 bg-white rounded-full w-[3rem] h-[3rem] text-white  bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium te to-[#b241ff]  "
          onClick={goToBtn}
        >
          <FaArrowUp size={15} className="icon" />
        </div>
      )}
    </div>
  );
};

export default Gototop;
