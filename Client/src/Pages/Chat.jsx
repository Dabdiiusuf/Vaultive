import { IoSendSharp } from "react-icons/io5";

const Chat = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 relative">
      <div className="absolute inset-0 z-0 grid grid-cols-5 grid-rows-5">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="border-r border-t border-purple-500 opacity-10"
          ></div>
        ))}
      </div>
      <div className="h-[600px] w-full flex justify-between z-10 absolute">
        <div className=" text-white text-4xl w-[20%]">Sidenav</div>

        <div className="text-white w-[80%] flex flex-col items-center border-1">
          <div className="h-[80%] w-full flex justify-around">
            <div className="inline-block max-w-max max-h-max bg-amber-200 rounded-2xl p-4">
              djfbksbjkflbdsjk
            </div>
            <div className="inline-block max-w-max max-h-max bg-amber-200 rounded-2xl p-4">
              djfbksbjkflbdsjk
            </div>
          </div>
          <div className="relative flex h-[20%] max-w-max justify-center items-center">
            <input
              type="text"
              className="w-[500px] h-[50px] bg-gray-300 rounded-2xl text-black text-lg outline-none pl-4 pr-12"
            />
            <IoSendSharp className="absolute text-gray-900 text-2xl top-1/2 -translate-y-1/2 left-115 cursor-pointer hover:scale-110 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
