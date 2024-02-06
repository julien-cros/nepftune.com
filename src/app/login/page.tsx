import React from 'react'

const login = () => {
	return (
		<div className='flex flex-col items-center  min-h-screen w-full justify-center gap-10'>
			<div className=''>
					<input type="text" placeholder='email:' className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none' />
			</div>
			<div>
				<input type='password' placeholder='password' className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none description'/>
			</div>
			<div>
				<button className='text-brown-dark text-lg'>login</button>
			</div>
		</div>
	)
}

export default login