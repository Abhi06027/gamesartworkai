import Logo from "./Logo";
import { socials } from "../constants";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sm:p-6 xs:p-8 px-6 py-2">
      <div className="max-w-7xl w-full mx-auto container">
        <div className="h-[2px] bg-white my-[20px] lg:my-[15px] opacity-10" />
        <div className="flex justify-between items-center flex-wrap">
          <Link to="/">
            <Logo style="w-[80px] h-[80px] object-contain" />
          </Link>
          <div className=" flex justify-center items-center space-x-5">
            {socials.map((social) => (
              <div key={social.name}>
                <Link to={social.link}>
                  <div className="bg-white flex items-center justify-center w-8 h-8 rounded-full">
                    <img
                      className="w-5 h-5"
                      src={social.url}
                      alt={social.logo}
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
