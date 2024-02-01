import Blogfeatures from "@/components/blogfeatures";
import Home from "@/components/home";
import React from "react";

type seachParamsType = {
  searchParams: { page: string; per_page: string };
};

export default function Page({ searchParams }: seachParamsType) {
  const page = searchParams["page"] ?? "1";
  const perPage = searchParams["per_page"] ?? "6";

  return (
    <main className="w-full lg:max-w-7xl mx-auto">
      <Home page={page} perPage={perPage} />
      <Blogfeatures />
    </main>
  );
}
