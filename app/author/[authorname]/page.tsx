import Relatedpostsfromauthor from "@/components/relatedpostsfromauthor";
import { AuthorIDs } from "@/lib/data";
import axios from "axios";
import Image from "next/image";

type paramsType = {
  params: {
    authorname: string;
  };
};

const getAuthor = async (authorID: number | null) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/users/${authorID}`
  );
  const data = await res.data;
  return data;
};

export default async function Page({ params: { authorname } }: paramsType) {
  const authorID = AuthorIDs[authorname];
  const author = await getAuthor(authorID);

  return (
    <main className="mx-6">
      <div className="flex flex-col gap-3 justify-center items-center py-6">
        <Image
          src={author.avatar_urls["96"]}
          height={500}
          width={500}
          alt={author.name}
          title={author.name}
          className="aspect-square w-32 rounded-full border-2 border-gray-200"
        />
        <h2 className="text-gray-800/80 text-2xl font-semibold">
          {author.name}
        </h2>

        <p className="leading-7 text-gray-700/80 my-3 text-center">
          {author.description ||
            "Hi, I'm Faruk, a Full-Stack Developer with 5 years of experience. I enjoy building websites that work smoothly and look awesome. Always learning to stay on top of the tech game!"}
        </p>
      </div>
      <Relatedpostsfromauthor>{author.id}</Relatedpostsfromauthor>
    </main>
  );
}
