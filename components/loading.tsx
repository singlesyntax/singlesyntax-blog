import React from "react";

export default function Loading() {
  return (
    <div className="md:inline-block md:w-1/2 lg:w-1/3">
      <div className="px-3 my-4 flex flex-col gap-2 animate-pulse">
        <div className="bg-gray-300 w-full h-60 rounded-md" />
        <div className="flex items-center gap-3">
          <div className="bg-gray-300 w-14 h-14 rounded-full shrink-0" />
          <div className="flex flex-col gap-2 w-full">
            <div className="bg-gray-300 w-full h-4 rounded-md" />
            <div className="bg-gray-300 w-2/3 h-4 rounded-md" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-full h-3 rounded-md" />
          <div className="bg-gray-300 w-2/3 h-3 rounded-md" />
        </div>
      </div>
    </div>
  );
}
