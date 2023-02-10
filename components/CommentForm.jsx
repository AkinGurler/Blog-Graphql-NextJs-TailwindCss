import React, { useRef, useState } from 'react'

const CommentForm = ({slug}) => {
 
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMesage, setShowSuccessMesage] = useState(false);
  /*  dont keep to inputs  just want to send grahpcms thats why using useREf */
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission=()=>{

  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Comments Form
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder='Comment'
          name='comment' />
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input type="text" ref={nameEl}
          className="py-2 px-4 outline-none rounded-lg w-full focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder='name'
          name='name'
        />
        <input type="text" ref={emailEl}
          className="py-2 px-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder='Email'
          name='email'
        />
      </div>
      {error && <p className='text-xs text-red-500'>All field are required</p>}
      <button type='button' 
      onClick={handleCommentSubmission}
      className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer" >
        Send
      </button>
    {showSuccessMesage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}

    </div>
  )
}


export default CommentForm