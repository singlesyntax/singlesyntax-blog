import Postlists from "@/components/postlists";
import axios from "axios";
import React from "react";

type CategoriesType = {
  [key: string]: number;
};

const getCategories = async (id: number) => {
  const res = await axios.get(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts?categories=${id}&per_page=3`
  );
  const data = res.data;
  let totalpost = res.headers["x-wp-total"];
  return { data, totalpost };
};

export default async function Categorypost({
  category,
  Categories,
}: {
  category: string;
  Categories: CategoriesType;
}) {
  const categoryID = Categories[category];
  const { data: posts, totalpost } = await getCategories(categoryID);

  return (
    <main>
      <Postlists posts={posts} totalpost={totalpost} />
    </main>
  );
}
