import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { projects } from '../assets/assets'

const Projects = () => {



 
    


 
    

  return (
    <div className='w-[98%] flex flex-col items-center justify-start gap-4'>
        <p className='text-2xl font-semibold text-start w-full'>Projects</p>
       {
        projects.map((items, index)=>(
            <div key={index} className='border p-5 rounded-lg shadow-xl mt-5 w-full'>
                <div className=' h-[300px] m-2 flex items-end justify-center rounded-lg'>
                    {/* {console.log(items.image)
                    } */}
                    <img className='h-[300px] w-full  rounded-xl' src={items.image? items.image : 'unavailable.svg'} alt="" />
                </div>
                <div className='mx-3'>
                    <h1 className='text-lg font-medium'>{items.title}</h1>
                    <p className='text-xs mt-2 text-gray-500'>{items.des}</p>
                    <div className='flex gap-5 mt-5'>
                        <a href={items.link1} target='_blank' className='px-6 py-2  rounded-full bg-black text-white text-sm font-semibold hover:scale-[1.05] duration-300 transition-all'>Linkedin</a> 
                        <a href={items.link2} target='_blank' className='px-6 py-2  rounded-full bg-black text-white text-sm font-semibold hover:scale-[1.05] duration-300 transition-all'>Github</a>
                    </div>
                </div>
        </div>
        ))
       }
       
    </div>
  )
}

export default Projects