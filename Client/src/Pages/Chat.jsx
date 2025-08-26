import { useContext, useEffect, useRef } from "react";
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { AuthContext } from "../Providers/AuthContext";

const Chat = () => {
  const {
    jwt,
    error,
    handleGetMessage,
    handlePostMessage,
    inputValue,
    setInputValue,
    setGetMessages,
    setPostMessage,
    postMessage,
    getMessages,
    handleDelete,
    autoMessages,
    index,
    setIndex,
    storedAutoMessage,
    setStoredAutoMessage,
  } = useContext(AuthContext);

  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    handleGetMessage();
  }, []);

  useEffect(() => {
    if (postMessage) {
      setGetMessages([...getMessages, postMessage]);

      setTimeout(() => {
        const nextAnswer = autoMessages[index];
        setStoredAutoMessage((prev) => [...prev, nextAnswer]);
        setIndex((prev) => prev + 1);
      }, 1000);
    }
  }, [postMessage]);

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
          {jwt && (
            <div className="flex items-center gap-5 ml-4 mt-6">
              <img
                src={jwt.avatar}
                className="rounded-[50%] w-[80px] h-[80px]"
              ></img>
              {jwt.user}
            </div>
          )}
        </div>

        <div className="text-white w-[80%] flex flex-col items-center">
          <div className="h-[80%] w-full flex justify-around overflow-scroll py-5">
            <div className="flex flex-col gap-5">
              {postMessage &&
                storedAutoMessage.map((auto, index) => (
                  <div key={index}>
                    <div className="relative inline-block max-w-max max-h-max bg-gray-800 rounded-2xl text-white p-5 shadow-[0_2px_13px_rgba(159,90,253,1)]">
                      {auto}
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-5">
              {getMessages &&
                getMessages.map((message, index) => (
                  <div key={index}>
                    <div className="relative inline-block max-w-max max-h-max bg-gray-800 rounded-2xl text-white p-5 shadow-[0_2px_13px_rgba(159,90,253,1)]">
                      <div>{message.text}</div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 duration-150">
                        <MdOutlineClose
                          onClick={() => handleDelete(message.id)}
                          className="absolute top-1 right-1 cursor-pointer hover:scale-120 hover:text-purple-400"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="relative flex h-[20%] w-[650px] justify-center items-center border-t border-gray-600">
            {error && <div>{error}</div>}
            <input
              value={inputValue}
              ref={inputRef}
              placeholder="Type a message..."
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && inputValue.length > 0)
                  handlePostMessage();
              }}
              type="text"
              className="w-[500px] h-[50px] bg-gray-800 rounded-2xl text-white text-lg outline-none pl-4 pr-12 shadow-[0_2px_13px_rgba(159,90,253,1)]"
            />
            <IoSendSharp
              onClick={() => {
                handlePostMessage();
                handleFocus();
              }}
              className="absolute text-white text-2xl top-1/2 -translate-y-1/2 left-135 cursor-pointer hover:scale-120 duration-200 hover:text-purple-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
