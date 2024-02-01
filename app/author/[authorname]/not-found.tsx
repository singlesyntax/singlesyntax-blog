import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";

export default function Notfound() {
  return (
    <main className="h-[80vh] w-full flex justify-center items-center">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-lg">Page not Found</p>
          <h2 className="text-7xl font-semibold">404</h2>
        </div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/support"
            className="bg-gray-100  px-4 py-2 rounded-lg text-lg flex items-center gap-1"
          >
            Contact
            <IoIosArrowForward />
          </Link>
          <Link
            href="/"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-lg flex items-center gap-1"
          >
            Home <IoHome />
          </Link>
        </div>
      </section>
    </main>
  );
}
