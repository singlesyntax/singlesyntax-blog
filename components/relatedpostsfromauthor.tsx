import axios from "axios";
import Image from "next/image";
import React from "react";
import Author from "./author";
import { format } from "date-fns";
import FeaturedImg from "./featuredImg";
import Link from "next/link";
import Postlists from "./postlists";
const getPosts = async (authorID: number) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?per_page=100`,
    {
      params: {
        author: authorID,
        per_page: 6,
      },
    }
  );
  const data = await res.data;
  return data;
};

export default async function Relatedpostsfromauthor({
  children,
}: {
  children: string;
}) {
  const posts = await getPosts(parseInt(children));

  return (
    <section className="pt-6 group related">
      <h3 className=" text-gray-800 text-lg font-semibold px-5">
        More From <Author>{posts[0].author}</Author>
      </h3>

      <Postlists posts={posts} />
    </section>
  );
}
