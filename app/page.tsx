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
  content: Array<Content>
}

export default function Home() {
  
  const sampleContentData: Array<Content> = [
    {
      id: 1,
      title: 'Content title 1'        
    },
    {
      id: 2,
      title: 'Content title 2s'        
    }
  ];

  const sampleCategoryData: Array<Category> = [
    {
      id: 1,
      name: 'Category 1',
      description: 'Category 1 description',
      content: [
        {
          id: 1,
          title: 'Content title 1'        
        },
        {
          id: 2,
          title: 'Content title 2'        
        }
      ]
    },
    {
      id: 2,
      name: 'Category 2',
      description: 'Category 2 description',
      content: [
        {
          id: 3,
          title: 'Content title 3'        
        },
        {
          id: 4,
          title: 'Content title 4'        
        }
      ]
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
