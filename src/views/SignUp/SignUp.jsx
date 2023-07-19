import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (password === confirmPassword && password.length > 5) {
      await dispatch(register({ email, password }));
      navigate("/login")
    } else {
      toast.error("Passwords don't match or the password length is less than 6 characters",{position:'top-center'});
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="min-h-screen flex flex-col items-center mt-10">
      <div className="flex flex-col border border-grey-500 bg-white shadow-lg px-4 sm:px-6 md:px-8 lg:px-10 py-1 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase mt-4 text-gray-800">
          Login to your Account
        </div>
        <div className="mt-10">
          <div className="flex flex-col mb-6">
            <label
              htmlFor="email"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              E-Mail Address:
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="E-Mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Password:
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-2 mr-2 text-gray-500"
                onClick={toggleShowPassword}
              >
                {showPassword ? <p>Hide</p> : <p>Show</p>}
              </button>
              {
                password.length<6&&password.length>0?
                  <p className="text-red-400 text-sm">
                    Password length less than 6
                  </p>
                
              :null}
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="password"
              className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >
              Confirm Password:
            </label>
            <div className="relative">
              <input
                id="password"
                type={showConfirmPassword ? "text" : "password"}
                name="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-2 mr-2 text-gray-500"
                onClick={toggleShowConfirmPassword}
              >
                {showConfirmPassword ? <p>Hide</p> : <p>Show</p>}
              </button>
            </div>
            {/* checking both passowrd and confirmPassword if they are same */}
            {password.length > 0 ? (
              password === confirmPassword ? (
                <p className="text-green-700 font-bold mt-2">Passwords match</p>
              ) : (
                <p className="text-red-600 font-bold mt-2">Passwords don't match!</p>
              )
            ) : null}
          </div>

          <div className="flex w-full">
            <button
              className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in"
              onClick={handleSignUp}
              disabled={password!=confirmPassword||password.length<0}
            >
              <span className="mr-2 uppercase">SignUp</span>
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" /> */}
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div
          onClick={() => navigate("/login")}
          className="flex justify-center items-center mt-6 mb-2 cursor-pointer"
        >
          <a className="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
            <span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </span>
            <span className="ml-2">Already have an account?</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
