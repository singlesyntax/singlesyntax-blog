import React from "react";

export default function Loading() {
  return (
    <section className="flex fixed top-0 left-0 h-screen w-full justify-center items-center">
      <div className="animate-spin h-5 w-5 rounded-full border-b-2 border-gray-600 bg-white"></div>
    </section>
  );
}
