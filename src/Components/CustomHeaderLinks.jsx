import { Link } from "react-router-dom";

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
export default CustomLinks;
