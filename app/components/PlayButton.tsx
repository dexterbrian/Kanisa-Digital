'use client';

import React from 'react'

const PlayButton = () => {
  return (
    <div>
        <button className='btn btn-accent' onClick={() => console.log('add to cart')}>Add to Cart</button>
    </div>
  )
}

export default PlayButton