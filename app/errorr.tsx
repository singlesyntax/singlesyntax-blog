"use client";
import Link from "next/link";
import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("Error is", error);
  return (
    <main className="flex flex-col justify-center items-center h-[70vh] w-full -mt-[4rem] ">
      <div className="text-center py-10">
        <h1 className="text-gray-800 text-xl font-medium mb-6">
          {error.name}:
        </h1>
        <h1 className="text-gray-800 text-[1.4rem] font-semibold">
          {error.message}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="bg-gray-100 text-gray-800 px-8 py-2 block rounded-md"
        >
          Home
        </Link>
        <button
          onClick={reset}
          className="bg-gray-800 text-white px-5 py-2 rounded-md"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
