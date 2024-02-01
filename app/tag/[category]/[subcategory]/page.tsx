import Categorypost from "@/components/categorypost";
import { SubCategories } from "@/lib/data";

type paramsType = {
  params: {
    category: string;
    subcategory: string;
  };
};

export default function Page({ params }: paramsType) {
  const { subcategory: category } = params;

  return (
    <main>
      <Categorypost category={category} Categories={SubCategories} />
    </main>
  );
}
