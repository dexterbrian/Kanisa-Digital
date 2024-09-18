import React from 'react'
import ContentCard from './ContentCard'
import NavBar from "./NavBar";
import { Category } from '../page';

interface CategoryCardProps {
    category: Category
}

const CategoryCard: React.FC<CategoryCardProps> = ({category}) => {
  return (
    <div className='categoryCard h-screen m-3'>
        {category.id === 1 ? <NavBar /> : null}
        <h1 className='text-3xl font-bold'>{category.name}</h1>
        <div className='flex flex-row'>
            {
                category.content.map(content => <ContentCard key={content.id} content={content} />)
            }
        </div>
    </div>
  )
}

export default CategoryCard