import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <PuffLoader color="#36D7B7" loading={true} size={30} />
    </div>
  );
};

export default LoadingSpinner;
