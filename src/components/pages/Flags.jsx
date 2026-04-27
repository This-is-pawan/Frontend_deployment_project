import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbCircuitPushbutton } from "react-icons/tb";
import { RiShareBoxLine } from "react-icons/ri";
const Flags = () => {
  return (
    <div  className='p-2 mt-[4rem]'>
      <article className=' flex justify-around items-center p-2 cursor-pointer'>
<input type="text" name="" id="" placeholder='search flags....' className='border rounded-md p-2 capitalize' />
<article className='flex rounded-md p-2 border items-center justify-center cursor-pointer'>
  <p>all types</p>
<IoIosArrowDown />
</article>
<article className='w-28 border p-2 rounded-md flex items-center justify-around bg-black text-white'>
  <p>+</p>
  <p>create flag</p>
</article>
      </article>
      <article className='border rounded-md m-4 p-4'>
        <article className='w-16 border p-2 m-auto rounded-md'>
        <TbCircuitPushbutton className='text-[3rem]' />
        </article>
        <h1 className='text-center p-2'>No flags found</h1>
        <p className='text-center p-2'>create flags to mange feature releases
          <span className='flex items-center text-blue-600 justify-center mt-4 text-sm capitalize cursor-pointer'>learn more <RiShareBoxLine className='ml-1'/></span>
        </p>
        <article className=' w-28 border p-2 rounded-md flex items-center justify-around m-auto mt-4'>
  <p>+</p>
  <p>create flag</p>
</article>
      </article>

      </div>
  )
}

export default Flags