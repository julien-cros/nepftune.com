"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div
      className={`${
        isOpen
          ? "bg-black bg-opacity-30 duration-150 fixed top-0 left-0 w-full h-full z-40"
          : ""
      }`}
    >
      <div
        className={`
		${isOpen ? "w-32 md:w-52" : "w-12 md:w-20"}
		fixed top-0 left-0 duration-300 bg-white shadow-md z-50`}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <Link
          href={"/"}
          className="flex justify-start pt-10 pl-3 md:pl-6"
          onClick={() => setIsOpen(false)}
        >
          <p className="text-2xl md:text-3xl text-brown border-b-[1px] border-brown">
            N
          </p>
          <p
            className={`${
              isOpen ? "opacity-0 duration-150" : "duration-150"
            } left-[22px] md:left-[38px] absolute text-2xl md:text-3xl text-brown border-b-[1px] border-brown`}
          >
            f.
          </p>
          <p
            className={`${
              isOpen ? "duration-150" : "opacity-0 duration-150"
            } absolute left-[22px] md:left-[38px] text-2xl md:text-3xl text-brown border-b-[1px] border-brown`}
          >
            epftune
          </p>
        </Link>
        <div className="flex flex-col justify-center pl-4 md:pl-8 items-start text-brown text-xl pt-20 gap-10 pb-5">
          <Link
            href={"/galerie"}
            className="flex flex-row"
            onClick={() => setIsOpen(false)}
          >
            <p
              className={`${
                pathname === "/galerie"
                  ? "border-b-[1px] border-brown duration-150"
                  : ""
              }`}
            >
              G
            </p>
            <p
              className={`
							${isOpen ? "block duration-150" : "opacity-0 duration-150"}
							${pathname === "/galerie" ? "border-b-[1px] border-brown duration-150" : ""}
					`}
            >
              alerie
            </p>
          </Link>
          <Link
            href={"/about"}
            className="flex flex-row"
            onClick={() => setIsOpen(false)}
          >
            <p
              className={`${
                pathname === "/about"
                  ? "border-b-[1px] border-brown duration-150"
                  : ""
              }`}
            >
              A
            </p>
            <p
              className={`${
                isOpen ? "block duration-150" : "opacity-0 duration-150 "
              }
						${pathname === "/about" ? "border-b-[1px] border-brown duration-150" : ""}
						`}
            >
              bout
            </p>
          </Link>
          <Link
            href={"/contact"}
            className="flex flex-row"
            onClick={() => setIsOpen(false)}
          >
            <p
              className={`${
                pathname === "/contact"
                  ? "border-b-[1px] border-brown duration-150"
                  : ""
              }`}
            >
              C
            </p>
            <p
              className={`
							${isOpen ? "block duration-150" : "opacity-0 duration-150"}
							${pathname === "/contact" ? "border-b-[1px] border-brown duration-150" : ""}
							`}
            >
              ontact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
