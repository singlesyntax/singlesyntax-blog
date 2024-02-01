"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "./menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    router.push(`/search?q=${data.query}&per_page=3&page=1`);
    setOpen(false);
  };

  return (
    <header className="bg-white border-b shadow relative">
      <div className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <div className="flex gap-1 items-center md:max-w-lg mx-auto lg:max-w-4xl">
              <p className="text-2xl not-p text-gray-800/90 font-semibold">
                SingleSyntax
              </p>
            </div>
          </Link>

          <div className="flex items-center">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger className="text-2xl lg:pr-8">
                <IoIosSearch />
              </Dialog.Trigger>

              <Dialog.Overlay className="fixed inset-0 bg-slate-500/50 backdrop-blur-[0.2rem]" />
              <AnimatePresence>
                {open && (
                  <Dialog.Portal forceMount>
                    <Dialog.Content
                      className="bg-white fixed top-1/3 h-screen w-full rounded-t-lg origin-bottom md:h-[40vh] md:w-2/3 md:!left-1/2 md:!-translate-x-1/2 md:rounded-lg"
                      asChild
                    >
                      <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        <input
                          {...register("query", {
                            required: "Please ",
                          })}
                          type="text"
                          placeholder="Search tutorials"
                          className="py-3 px-5 text-lg w-full focus:outline-none my-3 border-b focus:border-gray-700/90 transition text-800"
                        />
                      </motion.form>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
            <Menu />
            <div className={`hidden w-full lg:block md:w-auto`}>
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
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 !text-gray-900 rounded md:bg-transparent md:hover:!text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Frontend
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 pl-3 pr-4 !text-gray-900 rounded md:bg-transparent md:hover:!text-blue-700 md:p-0"
                    aria-current="page"
                  >
                    Backend
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
