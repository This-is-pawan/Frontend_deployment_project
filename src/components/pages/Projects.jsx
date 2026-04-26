import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { RiGitRepositoryFill } from "react-icons/ri";
import { CiBoxList } from "react-icons/ci";
import { LuLayoutGrid } from "react-icons/lu";
import { BsFront } from "react-icons/bs";
import { TbEyeSearch } from "react-icons/tb";
import { IoMdRefreshCircle } from "react-icons/io";
import { IoIosArrowUp, IoIosArrowDown ,} from "react-icons/io";
import { RxDotsVertical } from "react-icons/rx";
import { BsGraphUpArrow,BsCheckAll  } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import {data} from  '../pages/data.js/Project_data.js'
import {project_data} from '../pages/data.js/Project_data.js'
import img from '../../assets/vite.svg'
import { useGlobalContext } from "../../context/ContextApi.jsx";





const Projects = () => {
  const [add,setAdd]=useState(true);
  const [filter,setFilter]=useState(true);
  const [recents,setRecents]=useState(true);
  const [usage,setUsage]=useState(false);
  const [alerts,setAlerts]=useState(false);
const [showAll, setShowAll] = useState(false);

const visibleData = showAll ? data : data.slice(0, 5);
const {sideBar,setSidebar}=useGlobalContext()
  return (
    <div className="w-full mt-[4rem] p-4  border" onClick={()=>setSidebar(!sideBar)}>
      <div className="w-full flex items-center justify-center ">
        {/* search */}
        <article className="w-full ">
          <input
            type="text"
            className="w-full p-2 rounded-md border"
            placeholder="Search Projects..."
          />
        </article>
        {/* filter */}
        <article className=" border p-3 cursor-pointer rounded-md hover:bg-pink-50 m-2 relative " onClick={()=>setFilter(!filter)}>
          <MdFilterList  />
          <article className={`w-60 absolute top-[3rem] right-[0rem]   z-10   `}>
            <ul className={`${filter?'hidden ':'block ' } border border-pink-50 shadow-sm shadow-pink-100  bg-white transition-all duration-300 `}>
              <p className=" p-2 text-pink-400 border-b border-pink-50">
                filter by
              </p>
              <li className=" p-2 flex items-center cursor-pointer hover:bg-pink-50 transition-all duration-300">
                <RiGitRepositoryFill className="mr-2 text-sm capitalize" />
                Repository
              </li>
              <li className=" p-2 flex items-center hover:bg-pink-50 transition-all duration-300">
                <BsFront className="mr-2 text-sm capitalize" />
                Microfrontend
              </li>
              <p className=" p-2 text-pink-400 border-b border-pink-50">
                sort by
              </p>
              <li className=" p-2 hover:bg-pink-50 transition-all duration-300">Activity</li>
              <li className=" p-2 hover:bg-pink-50 transition-all duration-300">Name</li>
              <p className=" p-2 text-pink-400 border-b border-pink-50">view</p>
              <li className=" p-2 hover:bg-pink-50 transition-all duration-300 flex items-center">
                <LuLayoutGrid className="mr-2 text-sm capitalize" />
                Grid view
              </li>
              <li className=" p-2 hover:bg-pink-50 transition-all duration-300 flex items-center">
                {" "}
                <CiBoxList className="mr-2 text-sm capitalize" /> list view
              </li>
            </ul>
          </article>
        </article>
        <article className="w-48 relative m-2 text-center">
          <p className="p-2 rounded-md bg-black text-white cursor-pointer" onClick={()=>setAdd(!add)}>Add New </p>
          <ul className={`${add?'hidden transition-all duration-300':'block transition-all duration-300'} w-full border border-pink-50 shadow-sm shadow-pink-100  absolute top-[2.8rem]  z-10 bg-white `}>
            <li className="p-2 hover:bg-pink-50 transition-all duration-300 cursor-pointer">Project</li>
            <li className="p-2 hover:bg-pink-50 transition-all duration-300 cursor-pointer">Domain</li>
            <li className="p-2 hover:bg-pink-50 transition-all duration-300 cursor-pointer">Store</li>
            <li className="p-2 hover:bg-pink-50 transition-all duration-300 cursor-pointer">Integration</li>
            <li className="p-2 hover:bg-pink-50 transition-all duration-300 cursor-pointer">Team member</li>
          </ul>
        </article>
      </div>
      {/*Preview deployments that you have recently visited or created will appear here  */}
      <div className="w-full  shadow-[0_0_8px_2px_rgba(100,104,182,0.1)] p-4 mt-4 bg-white rounded-md " >
 <article className="w-full border rounded-md p-1 flex justify-around transition-all duration-200">
<p className={`${recents?'bg-pink-50':'bg-white'} w-40 text-center rounded-md  p-1  cursor-pointer `}onClick={()=>{
  setRecents(!recents)
  setUsage(false)
  setAlerts(false)
  }}>Recents</p>

<p className={`${usage?'bg-pink-50':'bg-white'} w-40 text-center rounded-md cursor-pointer 0 p-1 `} onClick={()=>{
  setUsage(!usage)
  setRecents(false)
  setAlerts(false)
  }}>Usage</p>  
<p className={`${alerts?'bg-pink-50':'bg-white'} w-40 text-center rounded-md cursor-pointer  p-1 `} onClick={()=>{
  setAlerts(!alerts)
setUsage(false)
setRecents(false)
  }}>Alerts</p>

 </article>
 {/* recents */}
<div className={`${usage || alerts ?'hidden':'block' } bg-white p-4 text-center m-4`}>
  <div className="w-8 h-8 flex items-center justify-center border rounded-md mx-auto">
    <TbEyeSearch />
  </div>
  <p className="mt-2">
    Preview deployments that you have recently visited or created will appear here
  </p>
</div>
 

{/*usage  */}
<div className={`${usage?'block':'hidden'} relative`}>
  <article className="flex justify-between">
  <p className="m-4 capitalize text-sm">last 30 days</p>
  <p className="w-20 text-xs text-center capitalize  bg-black text-white p-1 rounded-md m-4 h">upgrade</p>
   
  </article>

  {visibleData.map(({ id, condition, icon_1: Icon_1, icon_2: Icon_2, stroage }) => {
  return (
    <article
      key={id}
      className="w-full flex justify-around text-xs cursor-pointer rounded-md 
even:bg-pink-50  "
    >
      <p className="w-full flex justify-start   items-center gap-2 p-2 ">
        <Icon_1 />
        {condition}
      </p>
      <p className="w-full flex justify-end items-center gap-2 p-2">
        <Icon_2 />
        {stroage}
      </p>
      
     
    </article>
    
  );
})}

</div>
{/* alerts */}
<div className={`${alerts ?'block':'hidden'} bg-white mt-20 text-center `}>
<p className="text-sm font-bold ">Get alerted for anomalles</p>
<p className="text-sm ">Automatically monitor your projects for anomalies and get notified.</p>
 <button className="w- border  text-sm text-center capitalize   hover:bg-pink-50 transition-all duration-300 p-2 rounded-md m-4 cursor-pointer ">upgrade to pro</button>  
</div>
<div className={`${usage?'block':'hidden'} flex justify-center `}>
<button onClick={()=> setShowAll(!showAll)} className="p-0.5 shadow-md  rounded-full  mt-2    border ">
    {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </button>
</div>
    </div>
    {/* projects */}
    
  {project_data.map(({ id, title, updates_text, links, github_title, dates }) => {
    return (
      <div className="border p-2 mt-4 rounded-md ">
      <>
        <div key={id} className="flex borde items-center p-2 justify-between ">
          <article className="flex items-center justify-center">
            <img
              src={img}
              className="w-6 h-6 border rounded-full p-0.5 m-2"
              alt="vite "
            />
            <p className="text-xs font-bold">{title}</p>
          </article>

          <p className="text-xs hover:text-blue-900 cursor-pointer underline ">
            {links}
          </p>

          <article className=" p-2 rounded-full text-sm border-[4px]">
            <BsGraphUpArrow />
          </article>

          <article className="p-3 hover:bg-pink-50 rounded-full cursor-pointer">
            <RxDotsVertical />
          </article>
        </div>

        <article className="p-3">
          <p className="flex items-center bg-slate-800 text-white max-w-52 justify-center rounded-lg text-sm p-1">
            <FaGithub className="mr-2 " />
            {github_title}
          </p>

          <span className="block m-2 capitalize ">
            {updates_text}
          </span>

          <span className="w-full max-w-[10rem] flex items-center justify-between text-sm p-1">
            {dates}
            <BiGitRepoForked /> master
          </span>
        </article>
      </>
</div>
    );
  })}
    </div>
  );
};

export default Projects;
