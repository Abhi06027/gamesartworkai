import logo from "../assets/logo.png";

const Logo = ({ style }) => {
  return (
    <div>
      <img src={logo} alt="logo" className={style} />
    </div>
  );
};

export default Logo;
