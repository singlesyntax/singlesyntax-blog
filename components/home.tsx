import axios from "axios";
import React from "react";
import Author from "./author";
import FeaturedImg from "./featuredImg";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";
const getPosts = async () => {
  const res = await axios(
    "https://data.singlesyntax.com/wp-json/wp/v2/posts/?per_page=15"
    // ?per_page=100
  );
  const data = await res.data;
  return { data };
};

export default async function Home() {
  const { data: posts } = await getPosts();

  return (
    <section className="px-3 py-2 mt-5">
      <div className=" rounded-3xl bg-white shadow">
        {posts.map((post: any) => (
          <article key={post.id} className="px-2 ">
            <div className=" border-b px-3 py-1">
              <Link href={post.slug}>
                <FeaturedImg>{post.featured_media}</FeaturedImg>
                <h2 className="text-[1.3rem] font-semibold text-gray-800/90 my-2">
                  {post.title.rendered}
                </h2>
                <p className="leading-7 text-gray-800/80 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Esse, tempora rem dolorem repudiandae cumque quos corporis.
                </p>
              </Link>
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-3 my-2">
                  <Image
                    src="/faruk-sardar.jpeg"
                    alt="author | faruk sardar"
                    title="faruk sardar"
                    width={500}
                    height={500}
                    className="w-8 rounded-full aspect-square  object-cover"
                  />
                  <Author>{post.author}</Author>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <p className="text-gray-800/80">
                    {format(new Date(post.modified), "MMM d")}
                  </p>
                  <span className="text-gray-700/80">·</span>
                  <p className="text-gray-700/80">14 min read</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
