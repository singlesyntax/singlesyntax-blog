import Author from "@/components/author";
import axios from "axios";
import Image from "next/image";
import React, { Suspense } from "react";
import { format } from "date-fns";
import Authorforpost from "@/components/authorforpost";
import Relatedpostsfromauthor from "@/components/relatedpostsfromauthor";
import Categories from "@/components/categories";
import { notFound } from "next/navigation";
import Sharepost from "@/components/sharepost";
import PrismLoader from "@/components/prism-loader";
import Link from "next/link";
import PostLoading from "@/components/postloading";

type paramsType = {
  slug: string;
};

type CategoryType = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[]; // Adjust the type based on your actual data structure
  _links: any; // Adjust the type based on your actual data structure
};

type ParentCategoryType = {
  // Define the properties of your parent category data
  name: string;
  // Add other properties as needed
};

type ResponseType = {
  category: CategoryType;
  parent: ParentCategoryType | null;
};

const getParentCategories = async (id: number): Promise<ParentCategoryType> => {
  const res = await axios.get(
    `https://data.singlesyntax.com/wp-json/wp/v2/categories/${id}/?per_page=100`
  );
  const data: ParentCategoryType = res.data;
  return data;
};

const getCategeries = async (ids: number[]): Promise<ResponseType[]> => {
  try {
    const responses = await Promise.all(
      ids.map(async (id) => {
        const categoryRes = await axios.get(
          `https://data.singlesyntax.com/wp-json/wp/v2/categories/${id}/?per_page=100`
        );
        const categoryData: CategoryType = categoryRes.data;

        // Fetch parent category
        let parent: ParentCategoryType | null = null;
        if (categoryData.parent) {
          parent = await getParentCategories(categoryData.parent);
        }

        return { category: categoryData, parent };
      })
    );

    return responses;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // or handle the error accordingly
  }
};

const getPosts = async (slug: string) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?slug=${slug}`,
    {
      timeout: 10000,
    }
    // ?per_page=100
  );
  const data = await res.data;

  return data[0];
};

const getAllPosts = async () => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/posts/?per_page=100`,
    {
      timeout: 10000,
    }
    // ?per_page=100
  );
  const data = await res.data;

  return data;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: paramsType }) {
  const post = await getPosts(params.slug);
  if (!post) {
    return notFound();
  }

  const responses = await getCategeries(post.categories);

  return (
    <main className="w-full lg:flex lg:justify-center lg:max-w-7xl mx-auto">
      <Suspense fallback={<PostLoading />}>
        <article className="mt-5 lg:w-2/3">
          <div>
            <p className="px-3 my-3">
              <Link
                href="/"
                className=" py-2 px-3 rounded-full text-base hover:bg-gray-100 transition-all"
              >
                Home
              </Link>
              {responses.map(({ category, parent }) => (
                <React.Fragment key={category.name}>
                  /
                  <Link
                    href={`/tag${
                      parent && parent.name ? `/${parent.name}` : ""
                    }/${category.name}`}
                    className="py-2 px-3 rounded-full text-base hover:bg-gray-100 transition-all"
                  >
                    {category.name}
                  </Link>
                </React.Fragment>
              ))}
            </p>
            <div className="px-5 py-3">
              <h1 className="text-3xl font-semibold text-gray-800/90">
                {post.title.rendered}
              </h1>
              <section className="mt-7">
                <div className="relative flex items-center justify-between">
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
                      <div className="flex items-start gap-2">
                        <Author>{post.author}</Author>
                        <span className="text-gray-700/80">·</span>
                        <p className="text-gray-700/80">14 min read</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <p className="text-gray-800/80">
                          Last updated{" "}
                          {format(new Date(post.modified), "d MMM yyyy")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Sharepost post={post} />
                </div>
              </section>
              <section
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
                className="mt-7 article"
              ></section>
            </div>
            <Categories>{post.categories}</Categories>
            <Authorforpost>{post.author}</Authorforpost>
            <Relatedpostsfromauthor>{post.author}</Relatedpostsfromauthor>
            <PrismLoader />
          </div>
        </article>
        <aside className="hidden lg:block lg:w-1/3">
          <h2>sss</h2>
        </aside>
      </Suspense>
    </main>
  );
}
