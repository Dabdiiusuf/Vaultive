import { useContext } from "react";
import Lottie from "lottie-react";
import animationData from "../Assets/Animation - 1750006662856 (1).json";
import { MdArrowOutward } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiStockLine } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { GlobalContext } from "../Providers/GlobalContextontext";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    isFirstOpen,
    isSecondOpen,
    isThirdOpen,
    isFourthOpen,
    isFifthOpen,
    setIsFirstOpen,
    setIsSecondOpen,
    setIsThirdOpen,
    setIsFourthOpen,
    setIsFifthOpen,
  } = useContext(GlobalContext);

  // const handleQuestions = () => {
  //   setIsFirstOpen(...!isFirstOpen);
  // };

  return (
    <div className="w-full bg-gray-900">
      <div className="relative flex flex-col justify-center min-h-screen items-center">
        <div className="absolute inset-0 z-0 grid grid-cols-5 grid-rows-5">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-t border-purple-500 opacity-10"
            ></div>
          ))}
        </div>
        <div className="w-[80%] flex justify-between items-center mb-10">
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
            <Link
              to="/Register"
              className="flex w-[140px] gap-2 border-2 z-10 items-center border-purple-800 text-white rounded-3xl pl-3 py-2 hover:bg-purple-700"
            >
              Get started
              <MdArrowOutward className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
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
        <div className="w-[80%] mt-50">
          <h1 className="text-white text-5xl font-light font-[Montserrat]">
            How it Works
          </h1>
          <p className="w-[70%] text-white text-lg font-thin mt-5">
            A simple, smart, and secure way to discover stock tips and connect
            with others – in just a few steps:
          </p>
        </div>
        <div className="w-[80%] flex gap-10 mt-8 mb-8">
          <div className="h-[350px] w-[50%] block border-r border-transparent shadow-[8px_0_3px_-2px_rgba(159,90,253,0.6)] p-5">
            <p className="text-white font-thin text-md mt-4">Step 1</p>
            <h1 className="text-white font-normal text-2xl mt-6">
              Create your account
            </h1>
            <p className="text-white font-thin text-md mt-2">
              Sign up easily and secure your profile in just a few steps.
            </p>
            <div className="flex justify-start mt-10">
              <CgProfile className="text-purple-800 w-[100px] h-[100px]" />
            </div>
          </div>
          <div className="h-[350px] w-[50%] block border-r border-transparent shadow-[8px_0_3px_-2px_rgba(159,90,253,0.6)] p-5">
            <p className="text-white font-thin text-md mt-4">Step 2</p>
            <h1 className="text-white font-normal text-2xl mt-6">
              Browse Stock Tips
            </h1>
            <p className="text-white font-thin text-md mt-2">
              Instantly access curated stock insights and expert
              recommendations, updated daily.
            </p>
            <div className="flex justify-start mt-10">
              <RiStockLine className="text-purple-800 w-[100px] h-[100px]" />
            </div>
          </div>
          <div className="h-[350px] w-[50%] block p-5">
            <p className="text-white font-thin text-md mt-4">Step 3</p>
            <h1 className="text-white font-normal text-2xl mt-6">
              Join the Conversation
            </h1>
            <p className="text-white font-thin text-md mt-2">
              Chat with fellow investors, share thoughts, and stay informed in
              real-time.
            </p>
            <div className="flex justify-start mt-10">
              <RiTeamFill className="text-purple-800 w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
        <div className="w-[80%] mt-50">
          <h1 className="text-white text-5xl font-light font-[Montserrat]">
            Your Questions, Answered
          </h1>
          <p className="w-[70%] text-white text-lg font-thin mt-5">
            Everything you need to know about Vaultive – from account setup to
            stock insights and chat features.
          </p>
        </div>
        <div
          onClick={() => setIsFirstOpen(!isFirstOpen)}
          // onClick={handleQuestions}
          className={`w-[80%] border-t border-b mt-5 border-purple-900 block overflow-hidden transition-all duration-300 ${
            !isFirstOpen ? "h-[60px]" : "h-[150px]"
          } p-4 cursor-pointer `}
        >
          <div className="flex justify-between">
            <p className="text-white font-light text-2xl items-center">
              What is Vaultive?
            </p>
            <FaPlus
              className={`text-white h-[25px] w-[25px] font-thin transition-all duration-300 ${
                !isFirstOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </div>
          <p className="text-white text-lg font-thin mt-5">
            Vaultive is a platform where users can discover curated stock tips
            and connect with other investors through a real-time chat. It’s
            designed to be a fast, simple, and secure way to stay ahead in the
            market.
          </p>
        </div>
        <div
          onClick={() => setIsSecondOpen(!isSecondOpen)}
          // onClick={handleQuestions}
          className={`w-[80%] border-t border-b mt-5 border-purple-900 block overflow-hidden ${
            !isSecondOpen ? "h-[60px]" : "h-[150px]"
          } p-4 cursor-pointer transition-all duration-300`}
        >
          <div className="flex justify-between">
            <p className="text-white font-light text-2xl items-center">
              Is Vaultive free to use?
            </p>
            <FaPlus
              className={`text-white h-[25px] w-[25px] font-thin transition-all duration-300 ${
                !isSecondOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </div>
          <p className="text-white text-lg font-thin mt-5">
            Yes! Creating an account and accessing stock tips and the chat
            feature are currently free. We may offer premium features in the
            future, but the core experience is free for all users.
          </p>
        </div>
        <div
          onClick={() => setIsThirdOpen(!isThirdOpen)}
          // onClick={handleQuestions}
          className={`w-[80%] border-t border-b mt-5 border-purple-900 block overflow-hidden ${
            !isThirdOpen ? "h-[60px]" : "h-[150px]"
          } p-4 cursor-pointer transition-all duration-300`}
        >
          <div className="flex justify-between">
            <p className="text-white font-light text-2xl items-center">
              Where do the stock tips come from?
            </p>
            <FaPlus
              className={`text-white h-[25px] w-[25px] font-thin transition-all duration-300 ${
                !isThirdOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </div>
          <p className="text-white text-lg font-thin mt-5">
            Our stock tips are sourced from a combination of financial data,
            market trends, and expert insights. While we aim to provide
            high-quality information, users should always do their own research
            before making investment decisions.
          </p>
        </div>
        <div
          onClick={() => setIsFourthOpen(!isFourthOpen)}
          // onClick={handleQuestions}
          className={`w-[80%] border-t border-b mt-5 border-purple-900 block overflow-hidden ${
            !isFourthOpen ? "h-[60px]" : "h-[150px]"
          } p-4 cursor-pointer transition-all duration-300`}
        >
          <div className="flex justify-between">
            <p className="text-white font-light text-2xl items-center">
              Is the chat moderated?
            </p>
            <FaPlus
              className={`text-white h-[25px] w-[25px] font-thin transition-all duration-300 ${
                !isFourthOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </div>
          <p className="text-white text-lg font-thin mt-5">
            Yes, Vaultive’s chat is monitored to ensure respectful and
            constructive conversations. Spam, financial scams, or abusive
            behavior are not tolerated.
          </p>
        </div>
        <div
          onClick={() => setIsFifthOpen(!isFifthOpen)}
          // onClick={handleQuestions}
          className={`w-[80%] border-t border-b mt-5 mb-20 border-purple-900 block transition-all duration-300 overflow-hidden ${
            !isFifthOpen ? "h-[60px]" : "h-[150px]"
          } p-4 cursor-pointer`}
        >
          <div className="flex justify-between">
            <p className="text-white font-light text-2xl">
              How is my data protected?
            </p>
            <FaPlus
              className={`text-white h-[25px] w-[25px] font-thin transition-all duration-300 ${
                !isFifthOpen ? "rotate-0" : "rotate-45"
              }`}
            />
          </div>
          <p className="text-white text-lg font-thin mt-5">
            We take your privacy seriously. Vaultive uses secure encryption
            protocols and never shares your personal data with third parties
            without your consent. You can learn more in our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
