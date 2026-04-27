import React from 'react'
import { MdDomainAdd } from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
const Domains = () => {
  return (
    <div className='p-1 mt-[6rem]'>
<div className='grid  items-center justify-center'>
     <article className=' w-12  h-12 m-auto bg-pink-50 p-4 text-center border rounded-md mb-4'>
<MdDomainAdd/>
     </article>
     <p className='font-bold text-center mt-4'>Add a domain</p>
     <p className='text-sm text-center mt-4'>Add a domain that can connect to your team's projects </p>
     <article className='mt-10 '>
      <button className='capitalize text-center p-2 rounded-md border bg-black text-white font-semibold m-2'>buy domain</button>
      <button className='capitalize text-center p-2 rounded-md border font-semibold  m-2'>add existing domain</button>
      <button className='capitalize text-center p-2 rounded-md border font-semibold  m-2'>tansfer in domain</button>
      <p className='flex items-center text-blue-600 justify-center mt-4 text-sm capitalize'>learn more <RiShareBoxLine className='ml-1'/></p>
     </article>
     
   </div>
    </div>
  )
}

export default Domains