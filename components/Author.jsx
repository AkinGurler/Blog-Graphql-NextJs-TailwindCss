import React from 'react'
import Image from "next/image"

const Author = ({ author }) => {
 
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded lg bg-black bg-opacity-30 rounded-lg'>

      <div className='absolute  left-0 right-2 -top-14' >
        <Image className='align-middle rounded-full'
          unoptimized
          src={author.photo.url} alt={author.name} height="100px" width="100px" />
      </div>

      <h3 className='text-white my-4 text-xl font-bold' >
        {author.name}
      </h3 >

      <p className='text-white text-lg'>
        {author.bio}
      </p>

    </div>
  )
}

export default Author