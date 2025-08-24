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
        <div className="text-white text-4xl w-[20%] border-r border-transparent shadow-[8px_0_12px_-2px_rgba(159,90,253,0.6)]">
          Sidenav
        </div>

        <div className="text-white w-[80%] flex flex-col items-center">
          <div className="h-[80%] w-full flex justify-around">
            <div className="inline-block max-h-max bg-gray-800 rounded-2xl text-white p-4 shadow-[0_2px_13px_rgba(159,90,253,1)]">
              hello
            </div>
            <div className="inline-block max-h-max bg-gray-800 rounded-2xl text-white p-4 shadow-[0_2px_13px_rgba(159,90,253,1)]">
              hi
            </div>
          </div>
          <div className="relative flex h-[20%] w-[650px] justify-center items-center border-t border-gray-600">
            <input
              type="text"
              className="w-[500px] h-[50px] bg-gray-800 rounded-2xl text-white text-lg outline-none pl-4 pr-12 shadow-[0_2px_13px_rgba(159,90,253,1)]"
            />
            <IoSendSharp className="absolute text-white text-2xl top-1/2 -translate-y-1/2 left-135 cursor-pointer hover:scale-110 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
