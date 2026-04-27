import React, { useState } from "react";
import { MdFilterList } from "react-icons/md";
import { TbEyeSearch } from "react-icons/tb";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { RxDotsVertical } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { BiGitRepoForked } from "react-icons/bi";
import img from "../../assets/vite.svg";
import { data, project_data } from "../pages/data.js/Project_data.js";

const Projects = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 5);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 mt-[4rem]">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-between mb-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search Projects..."
          className="w-full md:w-1/2 p-2 border rounded-md"
        />

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="p-2 border rounded-md hover:bg-pink-50 relative"
          >
            <MdFilterList />

            {filterOpen && (
              <div className="absolute right-0 top-10 w-52 bg-white shadow-md border rounded-md z-10">
                <p className="p-2 text-pink-400 border-b">Filter</p>
                <p className="p-2 hover:bg-pink-50 cursor-pointer">Repository</p>
                <p className="p-2 hover:bg-pink-50 cursor-pointer">Frontend</p>
              </div>
            )}
          </button>

          <button className="px-4 py-2 bg-black text-white rounded-md">
            Add New
          </button>
        </div>
      </div>

      {/* USAGE / EMPTY STATE */}
      <div className="bg-white rounded-md p-4 shadow-sm mb-4">

        {visibleData.length === 0 ? (
          <div className="text-center">
            <div className="w-8 h-8 mx-auto border flex items-center justify-center rounded-md">
              <TbEyeSearch />
            </div>
            <p className="mt-2 text-sm">
              No recent activity found
            </p>
          </div>
        ) : (
          <>
            {visibleData.map(({ id, condition, icon_1: Icon1, icon_2: Icon2, stroage }) => (
              <div
                key={id}
                className="flex justify-between text-sm p-2 rounded-md even:bg-pink-50"
              >
                <p className="flex items-center gap-2">
                  <Icon1 />
                  {condition}
                </p>
                <p className="flex items-center gap-2">
                  <Icon2 />
                  {stroage}
                </p>
              </div>
            ))}

            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border rounded-full p-1"
              >
                {showAll ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
          </>
        )}
      </div>

      {/* PROJECT GRID */}
      <div className="grid gap-4 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4">

        {project_data.map(({ id, title, updates_text, links, github_title, dates }) => (
          <div
            key={id}
            className="bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all"
          >
            {/* TOP */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  src={img}
                  className="w-6 h-6 border rounded-full"
                  alt=""
                />
                <p className="text-sm font-semibold">{title}</p>
              </div>

              <RxDotsVertical className="cursor-pointer hover:bg-pink-50 rounded-full p-1" />
            </div>

            {/* LINK */}
            <p className="text-xs text-blue-600 underline mt-1 cursor-pointer">
              {links}
            </p>

            {/* GITHUB */}
            <div className="flex items-center gap-2 bg-black text-white text-xs px-2 py-1 rounded-md w-fit mt-2">
              <FaGithub />
              {github_title}
            </div>

            {/* TEXT */}
            <p className="text-xs mt-2">{updates_text}</p>

            {/* FOOTER */}
            <div className="flex justify-between items-center text-xs mt-3">
              <span>{dates}</span>
              <span className="flex items-center gap-1">
                <BiGitRepoForked /> master
              </span>
            </div>

            {/* STATUS */}
            <div className="flex justify-end mt-2">
              <BsGraphUpArrow className="text-sm border-2 rounded-full p-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;