import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1750006662856 (1).json";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Login = () => {
  const {
    username,
    password,
    csrfToken,
    error,
    success,
    authToken,
    isLoading,
    setPassword,
    setUsername,
    setCsrfToken,
    setError,
    setDecodedJwt,
    setAuthToken,
    setIsLoading,
    setSuccess,
  } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleRegister = () => {
    navigate("/Register");
  };

  useEffect(() => {
    fetch("https://chatify-api.up.railway.app/csrf", {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched csrf token:", data.csrfToken);
        setCsrfToken(data.csrfToken);
      })
      .catch((err) => console.error("CSRF fetch failed", err));
  }, []);

  const handleLogin = async (e) => {
    const resToken = await fetch(
      "https://chatify-api.up.railway.app/auth/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, csrfToken }),
      }
    );

    if (!resToken.ok) {
      console.log("Token fetched failed");
      setError("Invalid credentials");
      return;
    }

    setIsLoading(true);
    const data = await resToken.json();
    const token = data.token;
    localStorage.setItem("jwt", token);
    setAuthToken(token);
    setSuccess("Log in Successful");

    const decodedJwt = JSON.parse(
      decodeURIComponent(
        atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      )
    );
    setDecodedJwt(decodedJwt);
    localStorage.setItem("decodedJwt", JSON.stringify(decodedJwt));
    console.log(token);
    console.log(decodedJwt);

    setTimeout(() => {
      navigate("/Chat");
      setIsLoading(false);
    }, 2000);

    setError("");
    setUsername("");
    setPassword("");
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
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="w-[350px] h-[200px] bg-gray-800 rounded-2xl shadow-[0_4px_17px_rgba(159,90,253,1)] text-white text-lg flex items-center justify-center gap-3">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="h-[80px] w-[80px]"
            />
            <div className="flex flex-col">
              {success}
              <p>Redirecting to Login page</p>
            </div>
          </div>
        </div>
      )}
      <div className="w-[70%] h-[80%] relative z-10 shadow-[0_4px_17px_rgba(159,90,253,1)] gap-5 rounded-4xl overflow-hidden">
        <div className="w-[50%] h-full absolute left-0 rounded-l-4xl flex flex-col items-center">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-[100px] w-[100px] absolute top-0 left-[40%] mt-10"
          />
          <div className="flex w-[100%] ml-20 h-full gap-5 justify-center flex-col">
            <div className="items-center flex-col">
              <p className="text-white text-2xl w-full font-normal mt-10">
                Welcome back to Vaultive
              </p>
              <p className="text-white text-lg text-left w-[80%] font-thin">
                Sign in to access the latest stock tips, your saved insights,
                and real-time chat with other investors.
              </p>
            </div>
            <Link
              to="/"
              className="flex w-[140px] gap-2 border-2 items-center border-purple-800 text-white rounded-3xl pl-3 py-2 hover:bg-purple-700"
            >
              Learn more
              <MdArrowOutward className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
        <div className="w-[50%] h-full absolute right-0 bg-gray-200 rounded-r-4xl">
          <div className="mx-auto mt-10 text-center">
            {username && username.length > 0 && (
              <h1 className="text-3xl font-bold text-gray-700 mb-1">
                Welcome: "{username}"
              </h1>
            )}
            <p className="text-sm">Sign in to your account:</p>
            <p className="text-lg text-red-600">{error}</p>
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
              <input type="checkbox" className="mb-2" />
              <p className=" text-xs">Remember me</p>
            </div>
          </div>
          <div className="flex flex-col items-center h-full mt-15">
            <button
              onClick={handleLogin}
              className="px-4 py-1 w-[80%] rounded-sm bg-blue-300 hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300"
            >
              Sign in
            </button>
            <div className="w-full flex flex-col items-center mt-10 gap-1">
              <p>Don't have an account?</p>
              <button
                onClick={handleRegister}
                className="bg-gray-800 w-[80%] text-white px-4 py-1 rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
