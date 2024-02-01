"use client";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links = [
  { name: "Front-End", slug: "tag/Frontend" },
  { name: "Back-End", slug: "tag/Backend" },
  { name: "Database", slug: "tag/Database" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="lg:hidden">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger>
          <div
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            // onClick={(e) => setisNav(!isNav)}
          >
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
          </div>
        </Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-slate-500/50 backdrop-blur-[0.2rem]" />

        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Content
                className=" bg-white fixed top-0 right-7 w-[60%] origin-top-right mx-auto mt-16 rounded-md md:w-[30%] md:p-4 "
                asChild
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <ul className="not-ul font-medium flex flex-col gap-3 p-4 md:p-0 border-b border-gray-100 rounded-lg md:gap-5">
                    {links.map((item) => (
                      <li key={item.slug} className="md:last:pb-5">
                        <Link
                          href={`/${item.slug}`}
                          className="block py-2 pl-3 pr-4 !text-gray-900 rounded hover:bg-gray-100 md:bg-transparent md:hover:!text-blue-700 md:p-0"
                          aria-current="page"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <ul className="list-none px-8 py-4 flex gap-[1.15rem] items-center justify-center text-gray-800/90">
                      <li className="text-3xl">
                        <FaSquareXTwitter />
                      </li>
                      <li className="text-3xl">
                        <FaLinkedin />
                      </li>
                      <li className="text-3xl">
                        <FaFacebookSquare />
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </nav>
  );
}
