import React from 'react'
import { HiMiniShieldExclamation } from "react-icons/hi2";
import { BsStack } from "react-icons/bs";
import { integration_data } from './data.js/Project_data';
const Integrations = () => {
  return (
    <div className='p-1 mt-[8rem]'>
      <h1 className='text-[2rem] p-2 font-bold'>Integrations</h1>
      <article className='flex'>
         <button className='capitalize text-center p-2 rounded-md border font-semibold  m-2 bg-black text-white'>Integrations console</button>
      <button className='capitalize text-center p-2 rounded-md border font-semibold  m-2'>browse marketplace</button>
      </article>
      <hr className='w-full mt-5' />
      <article className='border p-4 m-4 rounded-md'>
<article className='w-12 h-12 p-4 rounded-md border bg-white m-auto mt-4 shadow-md  '>
<HiMiniShieldExclamation />
</article>
<p className='text-center mt-4'>No Integrations installed</p>
<p className='text-center mt-4'>You don't have a any Integration installed</p>

<button className='capitalize text-center p-2 rounded-md border font-semibold m-2'>browse marketplace</button>
      </article>
      <article className='border p-4 m-4 rounded-md'>
<article className='w-12 h-12 p-4 rounded-md border bg-white m-auto mt-4 shadow-md'>
  <BsStack />
</article>
<h1 className='text-center p-4'>Lastest Integrations</h1>
<p>Explore more Integrations to expand your vercel development experience.</p>
<article>
  <article className="w-full p-3 space-y-4">
  {integration_data.map(({ id, title, description, img, category }) => {
    return (
      <div
        key={id}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border rounded-xl hover:shadow-md transition"
      >
        {/* LEFT SIDE */}
        <div className="flex items-start gap-3">
          <img
            src={img}
            alt="img"
            className="w-8 h-8 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-pink-500 text-sm sm:text-base">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              {description}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-md w-fit">
          {category}
        </div>
      </div>
    );
  })}
</article>
  
</article>
      </article>
    </div>
  )
}

export default Integrations