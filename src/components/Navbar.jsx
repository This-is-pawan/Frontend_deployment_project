import React, { useState } from 'react'
import img from '../assets/hero.png'
import { IoIosArrowUp, IoIosArrowDown ,} from "react-icons/io";
import { LuSmilePlus } from "react-icons/lu";
import { GoSidebarCollapse } from "react-icons/go";
import { RxDotsVertical } from "react-icons/rx";
import { useGlobalContext } from '../context/ContextApi';
import SideBar from './SideBar';
export const Navbar = () => {
   const { sidebar, setSidebar } = useGlobalContext();
   
   const [feedback,setFeedback]=useState(true);
  return (
    <div className='w-full fixed top-0 right-0 left-0 shadow shadow-pink-100 p-2 z-50 bg-white '>
      <div className='w-full border-pink-100 flex  items-center justify-between '>
        <article className="w-full max-w-44 flex items-center justify-between  max-[600px]:max-w-[60%]  " >
          <article className='hover:bg-pink-50 cursor-pointer p-2 mr-1 rounded-md max-[600px]:hidden'  onClick={()=>setSidebar(!sidebar)}>
<GoSidebarCollapse className='text-lg   '/>
          </article>
<p className='w-4 h-4 border-l-2 max-[600px]:border-none'></p>
  <article className='flex items-center hover:bg-pink-50 cursor-pointer transition-all  duration-300 pl-1 pr-1 rounded-md  '>
<p className='capitalize text-sm  items-center p-2  font-poppins max-[600px]:hidden border-none'>All projects  
    </p>
    <p className='w-full capitalize text-sm   p-2  font-poppins min-[600px]:hidden border-none flex items-center  '> 
    <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="tech" className='w-6 h-6 rounded-full border p-1 min-[600px]:hidden mr-2' />
    user name
    </p>
  <article className='text-[0.7rem] '>
    <IoIosArrowUp className='p-0.5px'/>
    <IoIosArrowDown className=''/>
 </article>
  </article>
  </article>
  <article className='hidden'>
    <input type="text" placeholder='Find Project...' />
    <p className='border p-4'>Esc</p>
  </article>

  <article>
    <p className='max-[600px]:hidden'>Vulnerable Projects</p>
  </article>
  <article>
    <article className='cursor-pointer mr-4  p-2 rounded-md hover:bg-pink-50 text-sm' onClick={()=>{setFeedback(!feedback)}}>
    <RxDotsVertical />
    </article>
    {/* feedback */}
    <article className={`${feedback ? 'hidden':'block'} w-52 absolute top-14 capitalize  right-2 rounded-lg bg-white p-4 shadow-md flex justify-around items-center`}>

<p>give feedback</p>
<LuSmilePlus/>
    </article>
    {/*  */}
  </article>
      </div>
      <SideBar/>
    </div>
  )
}
