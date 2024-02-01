import axios from "axios";
import Link from "next/link";
import React from "react";

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

export default async function Categories({ children }: { children: number[] }) {
  const responses = await getCategeries(children);

  return (
    <div className="flex items-center gap-3 mx-5 mb-8">
      {responses.map(({ category, parent }) => (
        <React.Fragment key={category.name}>
          <Link
            href={`/tag${parent && parent.name ? `/${parent.name}` : ""}/${
              category.name
            }`}
            className="bg-gray-200/80 py-2 px-3 rounded-full text-base hover:bg-gray-100 transition-all"
          >
            {category.name}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
