import React from 'react'

const Video = () => {
  return (
    <div className='container bg-sky-950 h-96 pt-6'>
      <div className='flex space-x-4 '> 
        {/* video */}
        <div className='flex-1'>
        <video className="h-full w-full rounded-lg" controls>
      <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        </div>
        {/* content */}
        <div className='flex-1 m-9'>
          <h3 class="w-fit border-solid text-center w-2/5  text-orange-700  
        border-b-4 border-orange-800 text-2xl"> 
        Buyer
         
    </h3>
          <ul className='ms-8 mt-6'>
            <li className='text-white list-disc marker:text-green-800'>Post your requirements.</li>
            <li className='text-white list-disc marker:text-green-800'>Sit back for multiple suppliers to contact you.</li>
            <li className='text-white list-disc marker:text-green-800'>Choose among the suppliers based on the
                ratings and reviews.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Video