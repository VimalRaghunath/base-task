import React, { useContext, useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import Glogo from "../src/assets/google.png";
import Ellipse from "../src/assets/Ellipse111.png";
import Vector from "../src/assets/Vector7.png";
import { DummyUser } from "./Dummy";
import Upload from "./Upload";
const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9",
};

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    if ("vimalvrk@gmail.com"=== email && 123456 === parseInt(password)) {
      navigate("/layout");
    } else {
      alert("invalid login");
    }
  };

  return (
    
    <>
      <div
        className="flex"
        style={{ backgroundColor: "rgba(248,250,255,255)" }}
      >
        <div
          className="relative w-[45rem] h-[43.4rem] skew-y-50"
          style={{ backgroundColor: "rgba(96,91,255,255)" }}
        >
          <div className="relative m-10">
            <img src={Ellipse} alt="Ellipse" className="w-[6rem] h-auto mr-2" />
            <img
              src={Vector}
              alt="Vector"
              className="w-[6rem] h-auto  absolute bottom-[1.8rem]"
            />
          </div>
          <h1 className="absolute inset-0 text-white flex justify-center items-center font-semibold text-7xl">
            BASE
          </h1>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-4xl font-bold leading-9 tracking-tight text-gray-900">
              {" "}
              Sign In
            </h2>
            <br />
            <p> Sign in to your account </p>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleClick}
            >
              <div>
                <button
                  type="submit"
                  className="flex justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font leading-6 text-gray shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  style={{ backgroundColor: "rgba(255,255,255,255)" }}
                >
                  <img src={Glogo} alt="Glogo" className="w-5 h-auto mr-2" />
                  Sign in with Google
                </button>
              </div>
              <div
                style={{ backgroundColor: "rgba(255,255,255,255)" }}
                className="p-10 rounded-md"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 p-[0.5rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      style={{ backgroundColor: "rgba(234,234,234,255)" }}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900 mt-2"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 p-[0.5rem] text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      style={{ backgroundColor: "rgba(234,234,234,255)" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />{" "}
                    <br />
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-[0.8rem]"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </a>
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              ></a>
            </p>
          </div>
        </div>
      </div>
    </>

  );
}

export default Signin;
