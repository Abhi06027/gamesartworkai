import { useState } from "react";
import { NavlinksData } from "../constants";
import { Link } from "react-router-dom";

import Button from "./Button";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const CustomLinks = ({ to, title }) => {
  return (
    <Link to={to} className={"relative hidden lg:block group"}>
      {title}
      <span
        className={
          "h-[1px] w-0 inline-block absolute bg-white left-0 -bottom-1 group-hover:w-full transition-[width] ease duration-300"
        }
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNav = () => {
    setOpen(!open);
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <header className="w-full h-[80px] sm:px-8 px-4 py-2 border-b flex justify-between fixed top-0 bottom-0 lg:static z-[99] bg-gradient-to-r from-[#10112a] via-[#1b0d22] to-[#0c1e3c] border-b-[#243449]">
      <nav className="flex gap-3 items-center">
        <div
          onClick={() => handleNav(!open)}
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
          font-medium text-xl bg-black opacity-90 top-0 duration-300 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <ul>
            {NavlinksData.map((item) => (
              <li className="py-2" key={item.name}>
                <Link to={item.link}>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
    </header>
  );
};

export default Header;
