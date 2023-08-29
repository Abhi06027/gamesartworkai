import { useState } from "react";
import { NavlinksData } from "../constants";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full h-[80px] sm:px-8 px-4 py-2 border-b flex justify-between fixed top-0 bottom-0 lg:static z-[99] bg-gradient-to-r from-[#10112a] via-[#1b0d22] to-[#0c1e3c] border-b-[#243449]">
      <nav className="flex items-center">
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] lg:hidden ${open ? "text-black" : "text-white"} `}
        >
          {open ? (
            <IoCloseSharp size="25px" onClick={() => setOpen(false)} />
          ) : (
            <RxHamburgerMenu size="25px" onClick={() => setOpen(true)} />
          )}
        </div>
        <div
          className={`fixed lg:hidden flex justify-center text-center items-center text-black z-50 w-full h-full
          font-medium text-xl bg-white top-0 duration-300 ${
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
          <Logo style="w-[70px] h-[70px] object-contain" />
          <h2 className="font-bold text-white text-[24px]">GAG</h2>
        </Link>
      </nav>
      <div className="flex items-center">
        <ul className="flex text-white text-lg font-medium space-x-5">
          {NavlinksData.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>
                <p className="hidden hover:text-gray-300  lg:block">
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <Link to="Sign-in">
          <Button
            name={"Sign In"}
            style="bg-gradient-to-r from-[#2f96fb] shadow-lg font-medium text-white to-[#b241ff] px-4 py-2 rounded-md"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
