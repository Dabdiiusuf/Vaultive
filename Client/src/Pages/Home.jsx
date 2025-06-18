import { useState, useContext, useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1750006662856 (1).json";
import { MdArrowOutward } from "react-icons/md";
import { AuthContext } from "../Providers/AuthContext";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="w-[80%] h-full flex justify-between items-center mb-20">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ height: 400, width: 400 }}
          />
          <div className="text-white w-[60%] flex flex-col gap-4">
            <h1 className="text-5xl font-[Montserrat] font-light">
              Empowering You to Build a Smarter Financial Future
            </h1>
            <div className="font-thin">
              Whether you're saving for tomorrow, investing for growth, or
              planning for retirement, we provide the tools, guidance, and
              expertise to help you make confident financial decisions.{" "}
              <br></br>
              Your goals, our support — every step of the way.
            </div>
            <button className="flex items-center gap-2 text-left bg-purple-700 max-w-max px-3 py-2 rounded-3xl transition-all duration-200 hover:bg-purple-500 cursor-pointer">
              Get started <MdArrowOutward className="w-[20px] h-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="w-[80%]">
          <h1 className="text-white text-5xl font-light font-[Montserrat]">
            Invest Smarter, Grow Faster
          </h1>
          <p className="w-[70%] text-white text-lg font-thin mt-5">
            Whether you're optimizing savings strategies or analyzing dynamic
            markets, Vaultive equips you with the tools to streamline every step
            of your financial advisory process.
          </p>
        </div>
        <div className="w-[80%] flex gap-10 mt-8 mb-8">
          <div className="h-[200px] w-[50%] block rounded-4xl shadow-[0_4px_17px_rgba(159,90,253,1)] p-5">
            <h1 className="text-gray-300 text-lg font-light font-[Montserrat]">
              Who We Are
            </h1>
            <p className="text-white font-thin text-md mt-4">
              At Vaultive, we’re redefining how individuals and advisors
              approach financial growth. Our platform simplifies savings,
              investing, and portfolio management—making it easier to make
              informed decisions in real time.
            </p>
          </div>
          <div className="h-[200px] w-[50%] block rounded-4xl shadow-[0_4px_17px_rgba(159,90,253,1)] p-5">
            <h1 className="text-gray-300 text-lg font-light font-[Montserrat]">
              Our mission
            </h1>
            <p className="text-white font-thin text-md mt-4">
              We believe finance should be clear, confident, and in your
              control. Our mission is to empower smarter investing and advising
              through tools that are easy to use, built for insight, and
              flexible enough to grow with your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
