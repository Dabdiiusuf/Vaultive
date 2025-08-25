import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthContext";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1750006662856 (1).json";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const {
    username,
    password,
    email,
    csrfToken,
    success,
    avatar,
    error,
    isLoading,
    setUsername,
    setPassword,
    setEmail,
    setAvatar,
    setCsrfToken,
    setError,
    setSuccess,
    setIsLoading,
  } = useContext(AuthContext);

  const handleAvatar = (e) => {
    e.preventDefault();
    if (!username) {
      setError("Username needed");
    } else {
      setAvatar(`https://i.pravatar.cc/200?u=${username}-${Date.now()}`);
      setError("");
    }
  };

  const handleSignIn = () => {
    navigate("/Login");
    setUsername("");
    setPassword("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (email || username || password === "") {
    //   setError("Email, username and password can not be empty!");
    //   return;
    // }

    try {
      const res = await fetch(
        "https://chatify-api.up.railway.app/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            avatar: avatar,
            csrfToken: csrfToken,
          }),
        }
      );

      if (res.status === 400) {
        setError("Username or email already exists.");
        return;
      }

      if (res.status === 500) {
        setError("Internal Server Error, please try again later.");
        return;
      }

      if (res.status === 201) {
        setSuccess("Registered successfully!");
        setIsLoading(true);

        setTimeout(() => {
          navigate("/Login");
          setIsLoading(false);
        }, 2000);

        setUsername("");
        setPassword("");
        setEmail("");
        setError("");
        setSuccess("");

        return;
      }
    } catch (err) {
      setError("Something went wrong");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center relative">
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
      <div className="w-[1000px] h-[650px] relative z-10 shadow-[0_4px_17px_rgba(159,90,253,1)] gap-5 rounded-4xl overflow-hidden">
        <div className="w-[50%] h-full absolute left-0 rounded-l-4xl flex flex-col items-center">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="h-[100px] w-[100px] absolute top-0 left-[40%] mt-10"
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
            <p className="text-lg text-green-600">{success}</p>
            <p className="text-lg text-red-600">{error}</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <div className="relative flex flex-col w-full items-center mt-7">
              <label className="absolute left-13 text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                autoComplete="off"
                placeholder="Email"
                className="w-[80%] h-[40px] mt-6  p-4 border-1 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-[80%] flex mt-5 justify-between gap-4">
              <div className="relative flex flex-col w-2/3">
                <label className="absolute left-0 text-sm" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-[40px] mt-6 p-4 border-1 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="relative flex flex-col w-2/3 items-center">
                <label className="absolute left-1 text-sm" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  placeholder="Password"
                  className="w-full h-[40px] mt-6  p-4 border-1 rounded-lg focus:outline-none focus:border-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-[80%] flex mt-5 justify-center gap-4 items-center">
              {/* <input type="hidden" value={avatar} name="avatar" /> */}
              <img
                src={avatar || "https://i.pravatar.cc/200?u=default"}
                alt=""
                className="w-[80px] h-[80px] rounded-[50%]"
              />
              <button
                onClick={handleAvatar}
                className="max-w-max bg-blue-300 rounded-sm p-3 max-h-max hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300"
              >
                Refresh Avatar
              </button>
            </div>
            <div className="w-[80%] flex gap-3 mt-5 justify-start">
              <input type="checkbox" className="mb-3" />
              <p className=" text-xs">
                By creating an account, you agree to Vaultive’s Terms &
                Conditions and Privacy Policy.
              </p>
            </div>
            <button className="px-4 py-1 w-[80%] mt-10 rounded-sm bg-blue-300 hover:cursor-pointer hover:scale-105 hover:bg-blue-800 hover:text-white duration-300">
              Register
            </button>
          </form>

          <div className="flex flex-col items-center h-full">
            <div className="w-full flex flex-col items-center mt-10 gap-1">
              <p>Already have an account?</p>
              <button
                onClick={handleSignIn}
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
