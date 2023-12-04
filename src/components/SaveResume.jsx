import React from 'react'

function SaveResume() {
  return (
    <>
    <div className='w-[480px] flex justify-between  h-[100px] shadow-lg shadow-gray-500 items-center px-4 rounded-lg bg-white'>
        <p className='font-bold text-md italic'>save your resume</p>
        <button className='bg-red-700 text-white px-4 py-3 rounded-full font-bold hover:bg-red-600 transition-all duration-300'>Download</button>
    </div>
    </>
  )
}

export default SaveResume