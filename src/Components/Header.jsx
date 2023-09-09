import { useState } from "react";
import { NavlinksData } from "../constants";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import CustomLinks from "./CustomHeaderLinks";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView={"show"}
      className="w-full h-[80px] sm:px-8 px-4 py-2 border-b flex justify-between items-center sticky top-0 bottom-0  z-[999]  bg-gradient-to-r from-[#10112a] via-[#1b0d22] to-[#0c1e3c]  lg:bg-gradient-to-r lg:from-[#10112a]/25 lg:via-[#1b0d22]/25 lg:to-[#0c1e3c]/25  lg:backdrop-blur-sm border-b-[#243449]"
    >
      {/* Mobile screen Nav */}
      <nav className="flex gap-3 items-center">
        <div
          onClick={() => handleclick(!open)}
          className="z-[999] lg:hidden text-white"
        >
          {open ? (
            <IoCloseSharp size="25px" onClick={() => setOpen(false)} />
          ) : (
            <RxHamburgerMenu size="25px" onClick={() => setOpen(true)} />
          )}
        </div>
        <div
          className={`fixed lg:hidden flex justify-center text-center items-center text-white z-50 w-full h-full
          font-medium text-xl bg-black opacity-[95%] top-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            {NavlinksData.map((item) => (
              <li className="py-2" key={item.name}>
                <Link onClick={handleclick} to={item.link}>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
            <div className="flex space-x-2 mt-2 items-center">
              <Link to="create">
                <Button
                  type="submit"
                  name={"Create"}
                  style="bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
                />
              </Link>

              <Link to="Sign-in">
                <Button
                  type="submit"
                  name={"Sign In"}
                  style="bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
                />
              </Link>
            </div>
          </ul>
        </div>
        {/* Large screen Nav */}
        <Link to="/" className="flex items-center">
          <Logo style="w-[70px] h-[70px] hidden lg:block object-contain" />
          <h2 className="font-bold text-white text-[24px]">GAG</h2>
        </Link>
      </nav>
      <div className="flex items-center">
        <ul className="flex text-white text-lg font-medium space-x-3">
          {NavlinksData.map((item) => (
            <li key={item.name}>
              <CustomLinks to={item.link} title={item.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-2 items-center">
        <Link to="create">
          <Button
            type="submit"
            name={"Create"}
            style="bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
          />
        </Link>

        <Link to="Sign-in">
          <Button
            type="submit"
            name={"Sign In"}
            style="bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
          />
        </Link>
      </div>
    </motion.nav>
  );
};

export default Header;
