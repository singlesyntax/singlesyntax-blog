import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Page() {
  return (
    <main className="article px-6 py-10 mt-2 lg:max-w-7xl mx-auto lg:px-8">
      <h1 className="text-2xl font-semibold">Get in touch 👋</h1>
      <p className="max-w-2xl">
        {`We're more than happy to answer any questions you have! Feel free to
        reach out to us directly or use the contact form on this page.`}
      </p>

      <div className="flex flex-col gap-2 ">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg !no-underline !text-gray-700/80"
        >
          <MdOutlineMailOutline className="text-xl" />
          <span className="block">support@singlesyntax.com</span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 text-lg !no-underline !text-gray-700/80"
        >
          <FaXTwitter className="text-xl" />
          <span className="block">@singlesyntax</span>
        </Link>

        <p>Looking forward to hearing from you!</p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center py-4">
          <Image
            src="/faruk-sardar.jpeg"
            alt="author | faruk sardar"
            title="faruk sardar"
            width={500}
            height={500}
            className="w-16 not-img rounded-full aspect-square  object-cover -mr-2 border-[3px] border-white"
          />
          <Image
            src="/faruk-sardar.jpeg"
            alt="author | faruk sardar"
            title="faruk sardar"
            width={500}
            height={500}
            className="w-16 not-img rounded-full aspect-square  object-cover -ml-2 border-[3px] border-white"
          />
        </div>
        <p className="!text-xl">Faruk & Faruk</p>
      </div>
    </main>
  );
}
