import React, { useState } from 'react'
import {  FaCalendarCheck, FaSearch } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown ,} from "react-icons/io";
import {useGlobalContext} from '../../context/ContextApi'
import { deployment_data, deployment_project_data } from './data.js/Project_data';
import Calendar from './Calender';


const Deployments = () => {
const { sidebar, setSidebar } = useGlobalContext();
  const [arrow_show,setArrow_show]=useState(true);
  const [status,setStatus]=useState(true);
  const [showCalender,setShowCalender]=useState(true);
  return (
    <div className='w-full mt-[4rem] p-2' onClick={()=>setSidebar(false)}>
    
<div className='border p-4'>
  {/* 1 */}
<article className='w-52 m-2 border p-2 flex justify-around items-center cursor-pointer hover:bg-pink-50 rounded-md' onClick={()=>setShowCalender(!showCalender)}>
  <FaCalendarCheck/>
  <p className='capitalize'>select date range</p>
</article>
{/*  */}
<article className={`${showCalender ?'hidden':'block'}`}>
  <Calendar/>
</article>
{/*  2*/}
<article className='w-full m-2 border p-2 flex justify-around  items-center cursor-pointer hover:bg-pink-50 rounded-md' onClick={()=>{setArrow_show(!arrow_show)}}>
  <article className='w-full max-w-40 items-center flex justify-around '>
  <FaSearch className="text-xs text-gray-500"/>
  <p className='capitalize text-gray-500 text-start'>AllAuthors...</p>
  </article>
  <p>
 {arrow_show ?<IoIosArrowDown className='text-gray-500'/>:<IoIosArrowUp className='text-gray-500'/>}
  </p>
</article>
{/*  */}
<article className={`${arrow_show?'hidden':'block'} w-full m-2 border p-2 flex justify-around  items-center cursor-pointer  rounded-md bg-pink-300 capitalize`}>
  <article className='w-full flex border rounded-md p-1'>
 <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="tech" className='w-6 h-6 rounded-full border p-1' />
 <p>This-is-user</p>
  </article>
</article>
{/*  3*/}
<article className='w-52 m-2 border p-2 flex justify-around items-center cursor-pointer hover:bg-pink-50 rounded-md'>
 
  <p className='capitalize'>All-Environment</p>
</article>
{/*  */}
<article
  className='w-full m-2 border p-2 flex justify-around items-center cursor-pointer hover:bg-pink-50 rounded-md relative z-20'
  onClick={() => setStatus(!status)}
>
  {/* Color dots */}
  <article className='flex items-center gap-1'>
    <p className='w-4 h-4 rounded-full bg-red-500'></p>
    <p className='w-4 h-4 rounded-full bg-black'></p>
    <p className='w-4 h-4 rounded-full bg-yellow-300'></p>
    <p className='w-4 h-4 rounded-full bg-pink-500'></p>
    <p className='w-4 h-4 rounded-full bg-gray-200'></p>
    <p className='w-4 h-4 rounded-full bg-blue-800'></p>
  </article>

  {/* Dropdown */}
  <article
    className={`${status ? "hidden" : "block"} w-full max-w-52 bg-white shadow-md absolute top-12 left-0 p-2 text-center`}
    onClick={(e) => e.stopPropagation()}  
  >
    <ul className='w-full flex flex-col'>
      {deployment_data.map(({ id, title, checkbox_color }) => {
        return (
          <li key={id} className='p-1 flex items-center gap-2'>
            <input
              type="checkbox"
              className={checkbox_color}
              onClick={(e) => e.stopPropagation()}  
            />
            {title}
          </li>
        );
      })}
    </ul>
  </article>

  {/* Status text */}
  <p className='capitalize text-gray-500'>
    status
    <span className='bg-pink-300 p-1 text-sm rounded-lg text-black ml-1'>
      5/6
    </span>
  </p>

  {/* Arrow */}
  <p>
    <IoIosArrowDown className='text-gray-500' />
  </p>
</article>
</div>
{/* deploy projects */}
<div className="w-full shadow-md ">

      {deployment_project_data.map(
        ({
          id,
          title_id,
          production,
          situation,
          situation_icon: Situation_Icon,
          status,
          time,
          project,
          master,
          master_icon: Master_Icon,
          commit,
          commit_icon: Commit_Icon,
          user_img,
          project_date,
        }) => {
          return (
            <article key={id} className="w-full border p-3 mb-2 rounded-md hover:bg-gray-50 transition flex justify-between ">

              {/* Top Section */}
              <div className="">
                <p className="text-sm ">{title_id}</p>

                <span className="w-40 items-center m-2 text-xs text-gray-500 capitalize flex justify-around">
                  {production}

                <p className="w-20 rounded-lg text-xs justify-center flex items-center bg-purple-200">
                  {Situation_Icon && <Situation_Icon />}
                  {situation}
                </p>
                </span>
              </div>

              {/* Status */}
              <div className="">
                <p className='w-3 h-3 bg-pink-200 rounded-full'></p>
                <p>{status}</p>
                <p>{time}</p>
              </div>

              {/* Project */}
              <div className="text-sm ">
                <article className=''>
                <p>{project}</p>
                <article className='flex items-center justify-center'>

                <p className="flex">
                  {Master_Icon && <Master_Icon />}
                  {master}
                </p>
                </article>
                </article>
<article className='flex'>
                <p className="">
                  {Commit_Icon && <Commit_Icon />}
                 </p>
                 <p> {commit}</p>
</article>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-center ">
                <p className="text-xs text-gray-400 mr-2">{project_date}</p>

                <img
                  src={user_img}
                  alt="user"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </div>

            </article>
          );
        }
      )}

    </div>

    </div>
  )
}

export default Deployments
