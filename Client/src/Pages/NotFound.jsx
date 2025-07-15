import React from "react";

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      <div className="relative flex flex-col justify-center items-center min-h-screen">
        <div className="absolute inset-0 z-0 grid grid-cols-5 grid-rows-5">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-t border-purple-500 opacity-10"
            ></div>
          ))}
        </div>
        <h1 className="text-white text-6xl">404 - NOT FOUND</h1>
      </div>
    </div>
  );
};

export default NotFound;
