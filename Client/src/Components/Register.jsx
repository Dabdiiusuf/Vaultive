import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1750006662856 (1).json";
import { FaCheckCircle } from "react-icons/fa";

const Register = () => {
  const { username, password, setUsername, setPassword, handleForm } =
    useContext(AuthContext);

  const handleButton = (e) => {
    console.log("hello");
  };

  return (
    <div className="w-full h-full bg-gray-900 flex justify-center items-center relative">
      <div className="absolute inset-0 z-10 grid grid-cols-5 grid-rows-5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-t border-purple-500 opacity-10"
          ></div>
        ))}
      </div>
      <div className="w-[70%] h-[80%] relative z-10 shadow-[0_4px_17px_rgba(159,90,253,1)] gap-5 rounded-4xl overflow-hidden">
        <div className="w-[50%] h-full absolute left-0 rounded-l-4xl flex flex-col items-center">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-[100px] w-[100px] absolute top-0 left-[40%]"
          />
          <div className="flex h-full gap-5 flex-col justify-center items-center">
            <p className="text-white text-2xl w-[80%] font-normal mt-10">
              What’s included when you sign up:
            </p>
            <div className="flex gap-3 w-[80%]">
              <FaCheckCircle className="h-[30px] w-[30px] text-purple-700 " />
              <p className="text-white text-lg text-left font-thin">
                No credit card needed – ever
              </p>
            </div>
            <div className="flex gap-3 w-[80%]">
              <FaCheckCircle className="h-[30px] w-[30px] text-purple-700 " />
              <p className="text-white text-lg text-left font-thin">
                Fresh stock tips, daily
              </p>
            </div>
            <div className="flex gap-3 w-[80%]">
              <FaCheckCircle className="h-[30px] w-[30px] text-purple-700 " />
              <p className="text-white text-lg text-left font-thin">
                Access to community chat and discussions
              </p>
            </div>
            <div className="flex gap-3 w-[80%]">
              <FaCheckCircle className="h-[30px] w-[30px] text-purple-700 " />
              <p className="text-white text-lg text-left font-thin">
                Your personal watchlist and saved insights
              </p>
            </div>
            <p className="text-white text-lg text-left w-[80%] font-thin">
              Join the Vaultive community – get fresh stock tips, chat with
              other investors, and stay ahead of the market. Let’s get you set
              up!
            </p>
          </div>
        </div>
        <div className="w-[50%] h-full absolute right-0 bg-gray-200 rounded-r-4xl">
          <div className="mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold text-gray-700 mb-1">
              Welcome: "{username}"
            </h1>
            <p className="text-sm">Register your account:</p>
          </div>
          <div className="w-full flex flex-col items-center mt-10 gap-5">
            <div className="relative flex flex-col w-full items-center">
              <label className="absolute left-13 text-sm" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-[80%] h-[40px] mt-6 p-4 border-1 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="relative flex flex-col w-full items-center">
              <label className="absolute left-13 text-sm" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                autoComplete="off"
                placeholder="Password"
                className="w-[80%] h-[40px] mt-6  p-4 border-1 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="w-[80%] flex gap-3 justify-start">
              <input type="checkbox" className="mb-3" />
              <p className=" text-xs">
                By creating an account, you agree to Vaultive’s Terms &
                Conditions and Privacy Policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center h-full mt-15">
            <button
              onClick={handleButton}
              className="px-4 py-1 w-[80%] rounded-sm bg-blue-300 hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300"
            >
              Register
            </button>
            <div className="w-full flex flex-col items-center mt-10 gap-1">
              <p>Already have an account?</p>
              <button
                onClick={handleForm}
                className="bg-gray-800 w-[80%] text-white px-4 py-1 rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
