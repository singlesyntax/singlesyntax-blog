import Link from "next/link";
import React, { Suspense } from "react";
import FeaturedImg from "./featuredImg";
import Image from "next/image";
import Author from "./author";
import { format } from "date-fns";
import Loading from "./loading";
import PaginationControls from "./PaginationControls";

export default function Postlists({
  posts,
  totalpost,
}: {
  posts: any;
  totalpost?: string;
}) {
  return (
    <section className="px-3 py-4 mt-2 w-full lg:max-w-7xl mx-auto">
      <div className=" bg-white ">
        {posts.map((post: any) => (
          <Suspense key={post.id} fallback={<Loading />}>
            <article
              key={post.id}
              className="inline-block md:w-1/2 md:px-4 lg:w-1/3 lg:group-[.related]:w-1/2"
            >
              <div className="border-b py-1">
                <Link href={`/${post.slug}`}>
                  <FeaturedImg>{post.featured_media}</FeaturedImg>
                  <div className="flex items-start gap-2 mt-3">
                    <div className="shrink-0">
                      <Image
                        src="/faruk-sardar.jpeg"
                        alt="author | faruk sardar"
                        title="faruk sardar"
                        width={500}
                        height={500}
                        className="w-9 rounded-full aspect-square  object-cover my-2"
                      />
                    </div>
                    <h2
                      className="not-h2 text-[1.3rem] font-semibold text-gray-800/90 line-clamp-2"
                      title={post.title.rendered}
                    >
                      {post.title.rendered}
                    </h2>
                  </div>
                  <p className="leading-7 text-gray-700/80 my-3 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse, tempora rem dolorem repudiandae cumque quos corporis.
                  </p>
                </Link>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Author>{post.author}</Author>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <p className="text-gray-800/90">
                      {format(new Date(post.modified), "MMM d")}
                    </p>
                    <span className="text-gray-800">·</span>
                    <p className="text-gray-800/90">14 min read</p>
                  </div>
                </div>
              </div>
            </article>
          </Suspense>
        ))}
      </div>
      {totalpost && <PaginationControls totalpost={totalpost} />}
    </section>
  );
}
