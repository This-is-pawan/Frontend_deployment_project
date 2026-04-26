import React, { useState } from 'react'
import { GoSidebarCollapse } from "react-icons/go";
import { useGlobalContext } from '../context/ContextApi';
import { IoIosArrowUp, IoIosArrowDown, IoIosArrowBack, IoIosArrowForward ,} from "react-icons/io";
import { CiSearch, CiSettings } from "react-icons/ci";
import { profile_data, sideBar } from './pages/data.js/Project_data';
import { Link } from 'react-router-dom';
import { RxDotsVertical } from "react-icons/rx";
import { MdNotificationsNone } from "react-icons/md";
const SideBar = () => {
   const { sidebar, setSidebar } = useGlobalContext();
   const [profile,setProfile]=useState(true);
  return (
    <div 
  className={`w-full  max-w-60 mt-[0.1rem] p-1 border shadow-md bg-pink-50  absolute z-50 top-0 left-0
  transform transition-transform duration-300 ease-in-out
  ${sidebar ? 'translate-x-0' : '-translate-x-full'}`}
>
  <div className="w-full border-b pb-6">
    <article className='w-full flex justify-around items-center capitalize'>
     <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="tech" className='w-8 h-8 rounded-full border p-1 ' />
     <p className='text-xs p-1'>user's projects</p>
     <span className='text-xs pt-0.5 pb-0.5 pl-2 pr-2 bg-pink-200  rounded-lg'>Hobby</span>
     <article className='text-[0.7rem] pl-2 cursor-pointer'>
         <IoIosArrowUp className=''/>
         <IoIosArrowDown className=''/>
      </article>
      
    </article>
    {/*input  */}
    <article className='relative '>
<input type="text" placeholder='Find...' className='w-full h-8 rounded mt-4 pl-8 text-sm font-thin ' />
<CiSearch className='absolute top-6 left-2 text-pink-400'/>
    </article>
    {/* backsidebar */}
    <article className='w-full flex border justify-end relative' onClick={(prev)=>setSidebar(!prev)}>
<IoIosArrowBack className={`cursor-pointer absolute top-[0rem] right-[-0.4rem] shadow-md `}/>
    </article>

  </div>
<div className="w-full">
  <ul className="w-full h-[76vh] overflow-y-auto scrol">
    {sideBar.map(({ id, links, icons: Icon, path }) => {
      return (
        <li
          key={id}
          className="flex items-center gap-3 p-2 capitalize cursor-pointer hover:bg-white rounded-md "
        >
          <Icon />
          <Link to={path || "/"}>{links}</Link>
        </li>
      );
    })}
  </ul>
</div>
{/* footer */}
  <div className='w-full pt-4 m-2 text-[1rem] border-t'>
<article className='w-full flex justify-around items-center capitalize relative'>
     <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="tech" className='w-8 h-8 rounded-full border p-1 ' />
     <p className='text-xs p-1'>This-is-user</p>
<p className='w-2 h-2 border bg-blue-800 rounded-full absolute right-[3.6rem] top-2'> 
</p>
<MdNotificationsNone className='text-lg' />
     <article className=' flex  justify-center items-center w-6 h-6   cursor-pointer border rounded-full bg-pink-200 '>
         <RxDotsVertical className='text-center text-[.7rem] '  onClick={()=>setProfile(!profile)}/>
      </article>
      
    </article>
  </div>
  {/*  */}
  <div className='w-full relative shadow-md rounded-md '>

  <div className={`${profile?'hidden':'block'} w-72 absolute bg-white shadow-lg rounded-md bottom-[4rem] left-10 pt-2 pb-2 `}>
<article className='flex justify-around items-center border-b m-1 '>
<p className='p-2 underline'>This-is-user</p>
 <span>example@gmail.com</span>
<CiSettings className='text-[1rem]'/>

</article>
<article >
  {
    profile_data.map(({id,icon:Icon,title,path})=>{
return (
  <ul key={id} className='w-full cursor-pointer capitalize'>
    <li className='w-full  hover:bg-pink-50 flex justify-between items-center p-2.5'> 
<Icon />
  <Link to={path || "/"} className=''>{title}</Link>
    </li>
</ul>
)
    })
  }

</article>
  </div>
  </div>
</div>
  )
}

export default SideBar
