import H2comp from "@/components/h2comp";
import Postlists from "@/components/postlists";
import axios from "axios";
import React from "react";

type searchParamsType = {
  searchParams: { q: string; page: string; per_page: string };
};

const getPosts = async (query: string, page: string, perPage: string) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?search=${query}&per_page=3&page=1`
    // ?per_page=100
  );
  const data = await res.data;
  let totalpost = res.headers["x-wp-total"];
  return { data, totalpost };
};

export default async function Page({ searchParams }: searchParamsType) {
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "3";

  const { q } = searchParams;
  const { data: posts, totalpost } = await getPosts(q, page, perPage);

  return (
    <main className="lg:max-w-7xl mx-auto">
      <p className="px-5 pt-6 text-lg lg:px-8">
        Search for: <span className="font-semibold">{q}</span>
      </p>

      {!posts.length ? (
        <h2 className="text-gray-800 text-xl font-semibold px-5 my-6">
          No posts found for your search.
        </h2>
      ) : (
        <Postlists posts={posts} totalpost={totalpost} />
      )}
    </main>
  );
}
