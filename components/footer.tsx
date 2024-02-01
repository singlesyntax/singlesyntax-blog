import React from "react";
import H2comp from "./h2comp";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center px-8 mt-4 bg-slate-900 text-white py-12 text-center w-full">
      <div className="lg:max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-md flex-col  justify-between lg:mx-0 lg:max-w-lg lg:text-left">
          <h2 className=" text-xl font-semibold text-center">
            Join the Build UI newsletter
          </h2>
          <p className="mt-3 text-sm text-center">
            Stay up to date with our code recipes, free videos, and premium
            courses. Sent every other Wednesday. download them to watch offline
            at any time.
          </p>
          <div className="flex justify-center items-center my-6">
            <form className="bg-slate-800 flex items-center gap-2 pl-3 rounded-xl border md:!w-full">
              <MdOutlineMailOutline className="text-xl" />
              <input
                type="text"
                disabled
                placeholder="Available soon"
                className="bg-slate-800 !w-full focus:outline-none"
              />
              <button
                disabled
                className="bg-slate-700 px-3 py-2 rounded-r-xl text-sm border-l block whitespace-nowrap"
              >
                Sign up
              </button>
            </form>
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact">Contact us</Link>
            <p className="text-center my-2 text-sm">
              {" "}
              &copy; 2024 Build UI Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
