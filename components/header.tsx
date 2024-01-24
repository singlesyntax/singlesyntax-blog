"use client";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isNav, setisNav] = useState(false);
  return (
    <div className="bg-white border-b shadow">
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <div className="px-3 flex gap-1 items-center md:max-w-lg mx-auto lg:max-w-4xl">
              <p className="text-2xl not-p text-gray-800/90 font-semibold">
                SingleSyntax
              </p>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={(e) => setisNav(!isNav)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className={`${isNav ? "" : "hidden"} w-full md:block md:w-auto`}>
            <ul className="not-ul font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4 !text-gray-900 rounded md:bg-transparent md:hover:!text-blue-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* <li>
                <a
                  href="https://chmodcalculator.in/"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 !text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:!text-blue-700 md:p-0 "
                >
                  CHMOD Calculator
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
