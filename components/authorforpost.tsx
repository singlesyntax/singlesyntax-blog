import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
    <section className="bg-gray-50 px-6 py-10">
      <div className="flex items-center justify-between">
        <Image
          src="/faruk-sardar.jpeg"
          alt="author | faruk sardar"
          title="faruk sardar"
          width={500}
          height={500}
          className="w-20 rounded-full aspect-square  object-cover"
        />
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="bg-green-500 text-2xl text-white p-3 rounded-full flex justify-center items-center transition-all hover:bg-green-600"
          >
            <FaTwitter />
          </Link>
          <Link
            href="/"
            className="bg-green-500 text-2xl text-white p-3 rounded-full flex justify-center items-center transition-all hover:bg-green-600"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <h3 className=" text-gray-800 text-2xl font-semibold">
          Written By {author.name}
        </h3>
        <p className="text-gray-800/90 mt-4 text-[1rem]">
          {author.description ||
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste
          vel quidem provident labore harum. Aliquam.`}
        </p>
      </div>
    </section>
  );
}
