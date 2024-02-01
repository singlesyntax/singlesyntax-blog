import axios from "axios";
import React from "react";
import Postlists from "./postlists";

const getPosts = async (page: string, perPage: string) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?per_page=${perPage}&page=${page}`
    // ?per_page=100
  );
  const data = await res.data;
  let totalpost = res.headers["x-wp-total"];
  return { data, totalpost };
};

export default async function Home({
  page,
  perPage,
}: {
  page: string;
  perPage: string;
}) {
  const { data: posts, totalpost } = await getPosts(page, perPage);

  return <Postlists posts={posts} totalpost={totalpost} />;
}
