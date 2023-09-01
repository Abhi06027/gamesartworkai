const Button = ({ style, name, type }) => {
  return (
    <button type={type} className={style}>
      {name}
    </button>
  );
};

export default Button;
