import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import H2comp from "./h2comp";
import Author from "./author";

export const getAuthor = async (authorID: number | null) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/users/${authorID}`
  );
  const data = await res.data;
  return data;
};

export default async function Authorforpost({
  children,
}: {
  children: string;
}) {
  const author = await getAuthor(parseInt(children));
  return (
    <section className="bg-slate-50 px-6 py-10 border-y">
      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Image
            src="/faruk-sardar.jpeg"
            alt="author | faruk sardar"
            title="faruk sardar"
            width={500}
            height={500}
            className="w-20 rounded-full aspect-square  object-cover"
          />
          <div>
            <h2 className="text-gray-800 text-xl font-semibold">
              By <Author>{author.id}</Author>
            </h2>
            <p>Full-Stack Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="bg-gray-200 text-xl text-gray-800 p-3 rounded-full flex justify-center items-center transition-all hover:bg-blue-50"
          >
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className="bg-gray-200 text-xl text-gray-800 p-3 rounded-full flex justify-center items-center transition-all hover:bg-blue-50"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-gray-800/90 mt-4 text-[1rem] lg:max-w-xl">
          {author.description ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste
          vel quidem provident labore harum. Aliquam.`}
        </p>
      </div>
    </section>
  );
}
