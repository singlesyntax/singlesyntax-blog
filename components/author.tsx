import axios from "axios";
import Link from "next/link";

export const getAuthor = async (authorID: number | null) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/users/${authorID}`
  );
  const data = await res.data;
  return data;
};
export default async function Author({ children }: { children: string }) {
  const author = await getAuthor(parseInt(children));
  return (
    <Link
      key={author.id}
      href={`/author/${author.name.toLowerCase().replace(" ", "-")}`}
      className="text-gray-800/80"
    >
      {author.name}
    </Link>
  );
}
