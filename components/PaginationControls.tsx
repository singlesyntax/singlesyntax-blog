"use client";

import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function PaginationControls({
  totalpost,
}: {
  totalpost: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const perPage = 6;
  const totalPages = Math.ceil(Number(totalpost) / perPage);

  return (
    <section className="flex items-center justify-center gap-3 mt-6">
      <button
        disabled={page <= 1}
        onClick={() => router.push(`/?page=${page - 1}`)}
        className="p-3 bg-gray-800 text-white text-2xl rounded-md border border-transparent inline-block
        active:border
        active:border-gray-500
        hover:border-gray-500
        focus:border-yellow-500
        disabled:bg-gray-50 disabled:text-gray-500
        disabled:cursor-not-allowed

        "
      >
        <IoIosArrowBack />
      </button>
      <p className="text-xl">
        {page}/{totalPages}
      </p>

      <button
        disabled={page >= totalPages}
        onClick={() => router.push(`/?page=${page + 1}`)}
        className="p-3 bg-gray-800 text-white text-2xl rounded-md inline-block disabled:bg-gray-50 disabled:text-gray-500 border border-transparent
        active:border-gray-500
        hover:border-gray-500
        focus:border-yellow-500
        disabled:cursor-not-allowed
        "
      >
        <IoIosArrowForward />
      </button>
    </section>
  );
}
