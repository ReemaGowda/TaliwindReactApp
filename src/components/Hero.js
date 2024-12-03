import React from 'react'
import background from '../assest/hero.webp'
import { LuMailSearch } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
    <header class="my-2">
    <div class="w-full bg-center bg-cover"
      style={{background:`url(${background})`}}>
      <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
        <div class="text-center">
          <div class="container px-4 mx-auto">
            <div class="max-w-4xl mx-auto text-center">
              {/* <span class="text-gray-200 font-semibold uppercase tracking-widest">New feature</span> */}
              <h3 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Are You a Supplier?</h3>
              <p class="mt-8 mb-6 text-4xl lg:text-5xl  text-gray-100">Explore Matching Opportunities.</p>
            </div>
            <div className="flex flex-row content-between gap-4">
            <div className='relative flex items-center'>
            <LuMailSearch size='25' color='orange' className='absolute ml-2.5' />
            <input type='text' name='name' placeholder='Search your required service here' className=' pl-10 h-[48px] w-80 rounded-[8px] text-grey ring-blue ring-2 focus:outline-none'/>
            </div>
            <div className='relative flex items-center'>
            <FaLocationDot size='25' color='orange' className='absolute ml-2.5' />
            <input type='text' name='name' placeholder='Search your desired location here' className=' pl-10 h-[48px] w-80 rounded-[8px] text-grey ring-blue ring-2 focus:outline-none'/>
            </div>
                
                <button className='h-[48px] w-32 rounded-[8px] bg-green-600 text-white'>Search</button>
               
            </div>
            <p class="mt-8 mb-6 text-sm text-gray-100">Are you a buyer? <a>Click here if you are looking to post a requirements</a></p>
          </div>
        </div>
      </div>
      
    </div>
    
  </header>
  </div>
  )
}

export default Hero
