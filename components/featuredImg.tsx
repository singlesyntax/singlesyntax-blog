import axios from "axios";
import Image from "next/image";
import React from "react";

type ImageData = {
  media_details: {
    file: string;
  };
  alt_text: string;
  slug: string;
  id: number;
};

const getFeaturedImg = async (imageID: number) => {
  const res = await axios(
    `https://data.singlesyntax.com/wp-json/wp/v2/media/${imageID}`
  );
  const data: ImageData = await res.data;
  return data;
};
export default async function FeaturedImg({ children }: { children: number }) {
  const image = await getFeaturedImg(children ? children : 156);

  return (
    <Image
      //   src={image.link}
      key={image.id}
      src={`https://data.singlesyntax.com/wp-content/uploads/${image.media_details.file}`}
      alt={image.alt_text || image.slug.replaceAll("-", " ")}
      title={image.alt_text || image.slug.replaceAll("-", " ")}
      width={500}
      height={500}
      className="aspect-video object-cover mt-4 rounded"
    />
  );
}
