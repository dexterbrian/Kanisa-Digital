import React from 'react'
import ContentCard from './ContentCard'
import NavBar from "./NavBar";
import { Category } from '../page';
import { Content } from '../page';

const sampleContentData: Array<Content> = [
    {
      id: 1,
      title: 'Content title 1',
      categoryId: 1
    },
    {
      id: 2,
      title: 'Content title 2',
      categoryId: 1
    },
    {
      id: 3,
      title: 'Content title 3',
      categoryId: 2
    },
    {
      id: 4,
      title: 'Content title 4',
      categoryId: 2
    }
  ];

interface CategoryCardProps {
    category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
    let contents = sampleContentData.filter(content => content.categoryId === category.id);

  return (
    <div className='categoryCard'>
        <div className="carousel w-full">
            {
                contents.map(content => <ContentCard content={content} category={category} numberOfContent={contents.length}/>)
            }
        </div>
    </div>
  )
}

export default CategoryCard