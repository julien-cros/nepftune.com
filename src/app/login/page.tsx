'use client'

import LogInFrom from '@/components/form/LogInFrom'
import Link from 'next/link'
import React from 'react'

const login = () => {
	return (
		<div className='flex flex-col items-center  min-h-screen w-full justify-center gap-10'>
			<LogInFrom />
			<div className='absolute bottom-10 right-10'>
				<Link className='text-lg text-brown-dark' href='/reset'
				>forgot your passwor</Link>
			</div>
		</div>
	)
}

export default login