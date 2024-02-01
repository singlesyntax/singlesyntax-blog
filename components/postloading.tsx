import React from "react";

export default function PostLoading() {
  return (
    <main className="px-3 my-4 flex flex-col gap-2 animate-pulse w-full lg:flex lg:justify-center lg:max-w-7xl mx-auto">
      <div className="w-2/3">
        <div className="bg-gray-300 w-full h-10 rounded-md mb-3" />
        <div className="bg-gray-300 w-2/3 h-10 rounded-md" />
        <div className="flex items-center gap-3 mt-2">
          <div className="bg-gray-300 w-14 h-14 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 w-full">
            <div className="bg-gray-300 w-full h-4 rounded-md" />
            <div className="bg-gray-300 w-2/3 h-4 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="bg-gray-300 w-full h-56 mt-3 rounded-md mb-4" />
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-2/3 h-3 rounded-md" />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-[80%] h-3 rounded-md" />
          <div className="bg-gray-300 w-1/3 h-3 rounded-md" />
        </div>
        <div className="flex flex-col gap-3 mb-6">
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-[80%] h-3 rounded-md" />
          <div className="bg-gray-300 w-2/3 h-3 rounded-md" />
        </div>
      </div>
      <div className="w-1/3"></div>
    </main>
  );
}
