import React from 'react'
import { MdPostAdd } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";

const productData = [
    {
        id: 1,
        description:'Select Your Role and Sign Up',
        icon:<IoPersonAdd size={40}/>,
        delay:0.3,
        
    },
    {
        id: 2,
        description:'Buyers Post Your Requirements',
        icon:<MdPostAdd size={40}/>,
        delay:0.6,
    }, 
    {
        id: 3,
        description:'Review, Select, and Contact the Best Suppliers',
        icon:<MdImageSearch size={40}/>,
        delay:0.9,
    } ,
    {
        id: 4,
        description:'Suppliers Complete your profile and get notified for opportunities',
        icon:<ImProfile size={40}/>,
        delay:0.3,
    },
    {
        id: 5,
        description:'Contact to Buyers and Share your Quote for the service',
        icon:<MdContactPhone size={40}/>,
        delay:0.6,
    }, 
    {
        id: 6,
        description:'Both the Parties can Connect and Make Business Leave a Feedback',
        icon:<FaRegHandshake size={40}/>,
        delay:0.9,
    } 
    
]

const Works = () => {
  return (
    <div>
        <div className='container py-24'>
            <h1 className='font-bold flex justify-center items-center text-2xl'>How it works?</h1>
            <p className='flex justify-center items-center text-center mt-8 '>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
               potential buyers, and build successful business relationships, sharing valuable feedback.</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-8 md:grid-cols-3 gap-6 font-playfair'>
                {
                    productData.map((item)=> {
                     return   <div className='space-y-3 p-6 bg-cyan-50 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_0_rgb(0,0,0,0.15)]'>
                            <div className='flex justify-center items-center space-x-1.5 p-1.5 '>{item.icon}</div>
                            <p className='text-gray-500 text-sm mt-4 text-center text-gray-500'>{item.description}</p>
                        </div>
                    })
                }
            </div>

        </div>
      
    </div>
  )
}

export default Works
