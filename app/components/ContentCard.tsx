import React from 'react'
import PlayButton from './PlayButton';
import Link from "next/link";
import { Content } from '../page';

interface ContentCardProps {
  content: Content
}

const ContentCard: React.FC<ContentCardProps> = ({ content }) => {
  return (
    <div className='contentCard w-screen mx-0'>
        <h1 className='text-xl font-bold'>{content.title}</h1>
        <PlayButton />
    </div>
  )
}

export default ContentCard