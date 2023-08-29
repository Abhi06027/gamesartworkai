import { Link } from "react-router-dom";
import { Googlelogo, applelogo } from "../assets";
import { InputField, LogoBlue } from "../Components";
import Button from "../Components/Button";

const SignupForm = () => {
  return (
    <div className="bg-white w-full">
      <Link to="/" className=" p-2 flex items-center">
        <LogoBlue style="w-[70px] h-[70px] object-contain" />
        <h2 className="font-bold text-[#130f27] text-[24px]">GAG</h2>
      </Link>
      <div className="bg-white flex h-screen md:justify-center md:items-center">
        <div className=" bg-white md:shadow-md lg:border mx-auto rounded-lg md:px-8 py-6">
          <div className="flex justify-center items-center">
            <LogoBlue style="w-[55px] h-[55px] object-contain" />
          </div>
          <p className="text-xl pb-3 font-medium text-center">
            Sign in to your account
          </p>
          <div className="mx-auto container">
            <div>
              <InputField
                style="w-full h-[55px] my-1 pl-5 font-medium text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <InputField
                style="w-full h-[55px] p-4 my-2 pl-5 font-medium text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="text-xs text-[#1a73e8] font-medium flex justify-between my-2">
            <p className="cursor-pointer">Create Account</p>
            <p className="cursor-pointer">Forgot Password?</p>
          </div>
          <div className="flex justify-center my-3">
            <div>
              <Button
                name="Sign in"
                style="bg-[#1a73e8] p-2 text-center w-80 text-white rounded-md cursor-pointer"
              />
            </div>
          </div>
          <div className="w-full flex items-center py-4 justify-center">
            <div className=" w-full h-[1px] opacity-20 bg-black "></div>
            <p className="absolute px-2 bg-white text-lg">or</p>
          </div>
          <div className="p-3 shadow-md border my-2 flex justify-center items-center gap-2 border-black font-normal  text-black rounded-md cursor-pointer">
            <img className="w-6 h-6" src={Googlelogo} alt="Googlelogo" />
            Continue with Google
          </div>
          <div className="p-3 shadow-md border flex justify-center items-center gap-2 border-black font-normal  text-black rounded-md cursor-pointer">
            <img className="w-6 h-6" src={applelogo} alt="applelogo" />
            Sign in with Apple
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
