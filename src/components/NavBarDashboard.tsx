"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/solid";

const NavBarDashboard = () => {
  const router = useRouter();
  const [searchclick, setSearchClick] = useState(false);

  return (
    <div className="w-screeen ml-32 m-10 flex flex-grow bg-yellow-semi-light rounded-xl justify-between items-center p-2">
      <div className="grid grid-cols-2 gap-2 text-sm lg:text-base px-2 text-brown ">
        <p className="">021/post</p>
        <p className="">003/albums</p>
      </div>
      <div className="flex pr-10 items-center gap-4">
        <div className="flex justify-center items-center px-2 py-1 border-[1px] border-brown rounded-full">
          <input
            type="text"
            className={`${
              searchclick ? "block" : "hidden"
            } bg-yellow-semi-light text-brown-dark border-none duration-150  focus:outline-none`}
          />
          <MagnifyingGlassIcon
            onClick={() => setSearchClick(!searchclick)}
            className="w-5 h-5 text-brown"
          />
        </div>
        <button
          className="bg-brown text-yellow-light py-2 px-4 rounded-lg text-sm flex items-center gap-2 marcellus"
          onClick={() => router.push("/createPostAlbum/post")}
        >
          <div className="flex justify-center items-center px-1	 py-1 border-[1px] border-l rounded-full">
            <PlusIcon className="w-3 h-3 text-yellow-light" />
          </div>
          New Post
        </button>
        <button
          className="text-brown bg-ligh-yellow border-[1px] border-brown py-2 px-4 rounded-lg text-sm flex items-center gap-2 marcellus"
          onClick={() => router.push("/createPostAlbum/album")}
        >
          <div className="flex justify-center items-center px-1	 py-1 border-[1px] border-brown rounded-full">
            <PlusIcon className="w-3 h-3 text-brown" />
          </div>
          New Album
        </button>
      </div>
    </div>
  );
};

export default NavBarDashboard;
