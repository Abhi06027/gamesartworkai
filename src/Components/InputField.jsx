import Button from "./Button";

const InputField = ({ style, type, placeholder }) => {
  return (
    <form>
      <div>
        <input type={type} placeholder={placeholder} className={style} />
      </div>
    </form>
  );
};

export default InputField;
