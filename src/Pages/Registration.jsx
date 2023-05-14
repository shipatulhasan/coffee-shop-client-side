/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import hero from "../assets/images/hero-img-3-1.jpeg";
import banner from "../assets/images/bg-2.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Components/Shared/Loader";
import { AuthContext } from "../Providers/AuthProvider";

const Registration = () => {
  const { createUser, updateUserData, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = (event) => {
    setError("");
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const url = form.url.value;
    console.log(name, email, password);

    if (password.length < 6) {
      return setError("Password should have at least six character");
    }
    createUser(email, password)
      .then((result) => {
        const from = location.state?.from?.pathname || "/";
        const createUser = result.user;
        navigate(from, { replace: true });
        console.log(createUser);
        updateUserData(result.user, name);
        setError("");
        form.reset();
        toast.success("Successfully Registered");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleGoogleLogin = () => {
    const from = location.state?.from?.pathname || "/";
    googleLogin()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div
        className="relative py-20 flex flex-col justify-center min-h-screen bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="grid lg:grid-cols-2 justify-items-center lg:justify-items-end ">
          {/* form */}

          <div className="w-full max-w-md p-8 space-y-3 bg-black border-[1px] border-[#C7A17A] dark:bg-gray-900 dark:text-gray-100 bg-opacity-40">
            <h1 className="text-4xl font-bold text-center text-khaki uppercase">
              Sign Up
            </h1>

            <p className="text-red-600 font-semibold text-xl py-4">{error}</p>

            {/* google signup */}

            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center mt-4 text-white transition-colors duration-300 transform  w-full bg-slate-100 bg-opacity-20  tracking-widest"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold uppercase text-center text-xs md:text-base">
                Sign up with Google
              </span>
            </button>
            <form
              onSubmit={handleRegister}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-base mt-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 bg-slate-200 bg-opacity-20 focus:outline-none text-slate-100"
                />
              </div>
              <div className="space-y-1 text-base mt-8">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="jhon@gmail.com"
                  required
                  className="w-full px-4 py-3 bg-slate-200 bg-opacity-20 focus:outline-none text-slate-100"
                />
              </div>

              <div className="space-y-1 text-base">
                <div className="relative flex items-center justify-center">
                  <input
                    type={isOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-slate-100"
                  />
                  <div
                    className="absolute right-0 mt-1 mr-3 cursor-pointer text-slate-100 text-sm"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
                <div className="flex justify-end text-sm text-slate-100">
                  <p>Forgot Password?</p>
                </div>
              </div>
              {/* <div className="space-y-1 text-base mt-8">
                <input
                  type="text"
                  name="url"
                  id="url"
                  placeholder="Your photo url"
                  className="w-full px-4 py-3 bg-slate-200 bg-opacity-20 focus:outline-none text-slate-100"
                />
              </div> */}

              <button
                type="submit"
                className="border border-khaki py-3 text-white font-bold tracking-widest uppercase  mt-6 bg-slate-100 bg-opacity-20 hover:bg-khaki w-full text-xs md:text-base"
              >
                {loading ? <Loader disabled /> : "Sign up"}{" "}
              </button>
            </form>

            <p className="text-sm text-center sm:px-6 text-slate-200">
              {`Already have an account? Please`}
              <Link
                rel="noopener noreferrer"
                to="/signup"
                className="underline text-slate-100 hover:text-khaki"
              >
                {" "}
                Sign in
              </Link>
            </p>
          </div>
          {/* <img src='' alt="" /> */}

          {/* form */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
