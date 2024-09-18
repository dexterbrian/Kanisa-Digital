import React from 'react'
import PlayButton from './PlayButton';
import Link from "next/link";

const ContentCard = () => {
  return (
    <div>
        <Link href="/users">Users</Link>
        <PlayButton />
    </div>
  )
}

export default ContentCard