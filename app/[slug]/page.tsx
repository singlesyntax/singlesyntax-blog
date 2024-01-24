import Author from "@/components/author";
import axios from "axios";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import Authorforpost from "@/components/authorforpost";
import Morefromauthor from "@/components/morefromauthor";

type paramsType = {
  slug: string;
};

const getPosts = async (slug: string) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?slug=${slug}`
    // ?per_page=100
  );
  const data = await res.data;
  return data[0];
};

export default async function Page({ params }: { params: paramsType }) {
  const post = await getPosts(params.slug);
  return (
    <article className="mt-5">
      <div className="px-5 py-3">
        <h1 className="text-3xl font-semibold text-gray-800/90">
          {post.title.rendered}
        </h1>

        <section className="mt-7">
          <div className="flex items-center gap-3">
            <Image
              src="/faruk-sardar.jpeg"
              alt="author | faruk sardar"
              title="faruk sardar"
              width={500}
              height={500}
              className="w-12 rounded-full aspect-square  object-cover"
            />
            <div className="flex flex-col gap-1">
              <Author>{post.author}</Author>
              <div className="flex items-center gap-2 text-sm">
                <p className="text-gray-800/80">
                  {format(new Date(post.modified), "MMM d")}
                </p>
                <span className="text-gray-700/80">·</span>
                <p className="text-gray-700/80">14 min read</p>
              </div>
            </div>
          </div>
        </section>

        <section
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          className="mt-7 article"
        ></section>
      </div>
      <Authorforpost>{post.author}</Authorforpost>
      <Morefromauthor>{post.author}</Morefromauthor>
    </article>
  );
}
