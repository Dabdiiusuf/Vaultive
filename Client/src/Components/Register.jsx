import { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";

const Register = () => {
  const { username, password, setUsername, setPassword, handleForm } =
    useContext(AuthContext);

  const handleButton = (e) => {
    console.log("hello");
  };

  return (
    <div className="w-full h-full bg-gray-900 flex justify-center items-center">
      <div className="w-[400px] h-[500px] bg-gray-100 shadow-[0_9px_14px_rgba(173,216,230,1),_0_-9px_14px_rgba(173,216,230,1)] flex flex-col gap-5 rounded-4xl">
        <div className="mx-auto mt-10 text-center">
          <h1 className="text-3xl font-bold text-gray-700 mb-1">
            Welcome: "{username}"
          </h1>
          <p className="text-sm">Register your account:</p>
        </div>
        <div className="w-full flex flex-col items-center mt-5 gap-5">
          <div className="relative flex flex-col w-full items-center">
            <label className="absolute left-11 text-sm" htmlFor="username">
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
            <label className="absolute left-11 text-sm" htmlFor="password">
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
        </div>
        <div className="flex flex-col items-center h-full">
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
  );
};

export default Register;
