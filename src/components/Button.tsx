import React from "react";
import { ArrowLongDownIcon } from "@heroicons/react/24/solid";


// TODO: create thin arrow
const Button = () => {
  return (
    <div className="w-40 h-40 border-[1px] border-brown rounded-full">
      <ArrowLongDownIcon className='w-20 h-20 mt-20 mx-10 text-brown' />
      {/* <div className=" grid grid-cols-3">
       		<div className="w-20 h-0 border-[1px]  border-brown flex- flex-grow" />
        	<div className="h-20 w-0 border-[1px] border-brown flex items-end justify-end"/>
       		<div className="w-20 h-0 border-[1px] rotate-45 border-brown flex justify-end items-end" />
      </div> */}
    </div>
  );
};

export default Button;
