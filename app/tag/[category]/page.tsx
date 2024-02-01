import Categorypost from "@/components/categorypost";
import { Categories } from "@/lib/data";

type paramsType = {
  params: {
    category: string;
  };
};

export default function Page({ params }: paramsType) {
  const { category } = params;

  return (
    <>
      <Categorypost category={category} Categories={Categories} />
    </>
  );
}
