import React from 'react'
import { CiGlobe } from "react-icons/ci";
const Cdn = () => {
  return (
    <div className='w-full mt-[4rem] p-2'>
   <div className='grid  items-center justify-center'>
     <article className=' w-8  h-8 m-auto bg-pink-50 p-2 text-center border rounded-md mb-4'>
<CiGlobe />
     </article>
     <p className='font-bold text-center mt-4'>continue to CDN</p>
     <p className='text-sm text-center mt-4'>choose a project to continue or <span className='text-blue-700'>deploy a CDN templat</span></p>
     <input type="text" placeholder='Find project....'  className='border rounded-md p-2 mt-8'/>
     
   </div>
       </div>
  )
}

export default Cdn
