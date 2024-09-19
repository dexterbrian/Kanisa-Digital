import Image from "next/image";
import CategoryCard from "./components/CategoryCard";
import ContentCard from "./components/ContentCard";

export interface Content {
  id: number,
  title: string
}

export interface Category {
  id: number,
  name: string,
  description: string
}

export default function Home() {

  const sampleCategoryData: Array<Category> = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Category 1 description'
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Category 2 description'
    }
  ];

  return (
    <main>
      {
        sampleCategoryData.map(category => <CategoryCard category={category}/>)
      }
    </main>
  );
}
