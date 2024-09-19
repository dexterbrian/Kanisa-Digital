import React from 'react'
import PlayButton from './PlayButton';
import Link from "next/link";
import { Content, Category } from '../page';
import NavBar from './NavBar';

interface ContentCardProps {
  content: Content,
  category: Category,
  numberOfContent: number
}

const ContentCard: React.FC<ContentCardProps> = ({ content, category, numberOfContent }) => {
  return (
    <div id={`slide${content.id}`} className="carousel-item relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp)' }}>
      <div className='flex flex-col'>
          {content.categoryId === 1 ? <NavBar /> : null} 
          <h1 className='text-3xl font-bold'>{category.name}</h1>
      </div>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      {
        content.id !== 1 ? (
          <a href={`#slide${content.id - 1}`} className="btn btn-circle">❮</a>
        ) : <a href={`#slide${content.id}`} className="btn btn-circle" style={{pointerEvents: 'none'}}>❮</a>
      }

      {
        content.id !== numberOfContent ? (
            <a href={`#slide${content.id + 1}`} className="btn btn-circle">❯</a>
          ) : <a href={`#slide${content.id}`} className="btn btn-circle" style={{pointerEvents: 'none'}}>❯</a>
      }  
      </div>
  </div>
  )
}

export default ContentCard