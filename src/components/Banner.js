import React from 'react'

const Banner = () => {
  return (
    <div class="w-full bg-center bg-cover mt-10 h-32 bg-cyan-50">
           <div className='container'>
            <div className='flex'>
            <div className='flex-1 flex flex-col items-center justify-center'>
                <h3 className='text-2xl  mt-7'>Let Suppliers <span class="w-fit border-solid text-center w-2/5   
        border-b-4 border-orange-800 text-2xl">Find You</span></h3>
            </div>
            <div className='flex-1 flex flex-col items-center justify-center'>
            <button class="bg-orange-500 flex-1 rounded-md hover:bg-green-700 text-white  py-4 mt-5 w-52 px-4 rounded">
              Get Verified
              </button>
            </div>
            </div>
            </div>      
    </div>
  )
}

export default Banner
