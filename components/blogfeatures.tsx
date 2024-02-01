import React from "react";
import H2comp from "./h2comp";
import Image from "next/image";
import {
  FaDatabase,
  FaLinkedin,
  FaSquareXTwitter,
  FaWind,
} from "react-icons/fa6";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { MdWeb } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { ImSvg } from "react-icons/im";
import { AiTwotoneDatabase } from "react-icons/ai";

const socialMedia = [
  {
    title: "Basic Web Development",
    description:
      "Watch every lesson on Build UI, or download them to watch directly on Build UI, or download them to watch offline at any time.",
    icon: IoCodeSlash,
  },
  {
    title: "Frontend",
    description:
      "Watch every lesson directly on Build UI, on Build UI, or download them to watch watch offline at any time.",
    icon: MdWeb,
  },
  {
    title: "Backend",
    description:
      "Watch every lesson directly on Build UI, or download them to watch  directly on Build UI, or download them to watch offline at any time.",
    icon: FaDatabase,
  },
  {
    title: "Animations",
    description:
      "Watch every lesson directly on Build UI,  directly on Build UI, or download them to or download them to time.",
    icon: FaWind,
  },
  {
    title: "Database",
    description:
      "Watch every lesson directly on Build UI, or download them to directly on Build UI, or download them to directly on Build UI, or download them to watch offline at any time.",
    icon: AiTwotoneDatabase,
  },
  {
    title: "D3.js",
    description:
      "Watch every lesson directly on Build UI, or download them to watch offline at any time.",
    icon: ImSvg,
  },
];

const socialDetails = [
  {
    icon: FaSquareXTwitter,
    name: "Faruk' Twitter",
    link: "https://twitter.com/",
    platform: "twitter.com",
    id: 1,
  },
  {
    icon: FaLinkedin,
    name: "Faruk' Twitter",
    link: "https://twitter.com/",
    platform: "linkedin.com",
    id: 2,
  },
  {
    icon: FaSquareXTwitter,
    name: "Faruk' Twitter",
    link: "https://twitter.com/",
    platform: "twitter.com",
    id: 3,
  },
  {
    icon: FaLinkedin,
    name: "Faruk' Twitter",
    link: "https://twitter.com/",
    platform: "linkedin.com",
    id: 4,
  },
];

export default function Blogfeatures() {
  return (
    <section className="px-4 py-2 mt-4">
      <h2 className="text-gray-800 text-xl font-semibold text-center mt-8 mb-4">
        What you will Learn
      </h2>
      <div className="py-5 flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {socialMedia.map((feature) => (
          <div
            key={feature.title}
            className="bg-slate-50 p-4 border rounded-md "
          >
            <h3 className="text-gray-800/90 text-lg font-semibold my-2 flex gap-2 items-center">
              <feature.icon />
              {feature.title}
            </h3>
            <p className="text-gray-800/80 mt-3">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 pt-10">
        <H2comp>Meet the team</H2comp>
        <div className="flex flex-col sm:mt-8 sm:flex-row lg:mt-0">
          <div className="max-w-xl sm:pr-8 lg:max-w-none lg:pr-0">
            <p className="text-gray-800/80 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              tempora rem dolorem repudiandae cumque consectetur adipisicing
              dolorem repudiandae cumque quos
            </p>
            <p className="text-gray-800/80 my-3">
              Adipisicing elit. Esse, tempora rem dolorem repudiandae cumque
              quos
            </p>
          </div>

          <div className="-order-1 mx-auto my-12 flex max-w-[250px] justify-center sm:order-1 sm:my-0 sm:w-1/3 sm:flex-shrink-0 sm:items-start md:max-w-none ">
            <Image
              src="/faruk-sardar.jpeg"
              alt="author | faruk sardar"
              title="faruk sardar"
              width={500}
              height={500}
              className="w-32 rounded-full aspect-square  object-cover -mr-4 border-[3px] border-white"
            />
            <Image
              src="/faruk-sardar.jpeg"
              alt="author | faruk sardar"
              title="faruk sardar"
              width={500}
              height={500}
              className="w-32 rounded-full aspect-square  object-cover -ml-4 border-[3px] border-white"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2">
        {socialDetails.map((user) => (
          <div key={user.id} className="flex items-center gap-2">
            <user.icon className="text-7xl md:text-8xl" />
            <div>
              <p className="text-lg">{user.name}</p>
              <Link href={user.link} className="flex items-center gap-1">
                {user.platform} <FiExternalLink />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
