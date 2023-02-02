import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-white shadow-lg rounded-lg p-8'>
      <div className='text-xl font-semibold pb-4 border-b-2'>
        Categories
      </div>
      <div className='pt-8' >
        {categories.map(category=>(
          <div key={category.name} >
            <Link href={`/category/${category.slug}`} >
             <span className='block mb-3 pb-3'>
              {category.name}
             </span>
             
            </Link>
              
          </div>
        ))}
      </div>


    </div>
  )
}

export default Categories