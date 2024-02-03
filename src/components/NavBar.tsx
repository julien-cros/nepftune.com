'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import { useState } from 'react';

const NavBar = () => {

	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={`
		${isOpen ? 'w-96' : 'w-20'}
		absolute top-0 left-0 duration-300 bg-white shadow-md`}
		onClick={() => setIsOpen(!isOpen)}
		>
			<div className='flex justify-start pt-10 pl-6'>
				<p className='text-3xl text-brown border-b-[1px] border-brown'>N</p>
				<p className={`${isOpen ? "opacity-0 duration-300" : "block duration-300"} text-3xl text-brown border-b-[1px] border-brown`}>p.</p>
				<p className={`${isOpen ? "block duration-300" : "opacity-0 duration-300"} text-3xl text-brown`}>epftune</p>
			</div>
				<div className='flex flex-col justify-center pl-8 items-start text-brown text-xl pt-20 gap-10 pb-5'>
				<Link href={"/galerie"} className='flex flex-row'>
					<p>G</p>
					<p className={`${isOpen ? "block duration-300" : "opacity-0 duration-300"}`}>alerie</p>
				</Link>
				<Link href={"/about"}
					className='flex flex-row'
				>
					<p>A</p>
					<p className={`${isOpen ? "block duration-300" : "opacity-0 duration-300"}`}>bout</p>
				</Link>
				<Link href={"/contact"}
					className='flex flex-row'
				>
					<p>C</p>
					<p className={`${isOpen ? "block duration-300" : "opacity-0 duration-300"}`}>ontact</p>
				</Link>
				</div>
		</div>
	)
}

export default NavBar