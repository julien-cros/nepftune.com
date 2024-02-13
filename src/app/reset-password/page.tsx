'use client'

import Link from 'next/link'
import { useState } from 'react'
import { db } from '@/lib/db'



const page = () => {

	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	const [email, setEmail] = useState('');
		
	const checkEmail = () => {
		if (email === '' || email.length < 5 || email.length > 50 || email.indexOf('@') === -1 || email.indexOf('.') === -1){
			setError(true);
			setSuccess(false);
			return;
		}
		setError(false);
		setSuccess(true);
	}

	// const sendResetPassword = async () => {
	// 	const user = await db.user.findUnique({
	// 		where: {
	// 			email: email
	// 		}
	// 	});
	// 	if (!user) {
	// 		setError(true);
	// 		setSuccess(false);
	// 		return;
	// 	}
	// 	setError(false);
	// 	setSuccess(true);
	// }
	

	return (
		<div className='flex flex-col items-center  min-h-screen w-full justify-center gap-10'>
			<p className='text-2xl text-brown'>Reset your password</p>
			<input type="text" 
			placeholder='email:'
			className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none description'
			onChange={(e) => setEmail(e.target.value)}
			/>
			<button className='text-brown-dark text-lg font-extrabold' onClick={() => checkEmail()} >Send</button>
		<Link className="absolute bottom-10 right-10 text-lg text-brown-dark" href="/login">
			login
		</Link>
		{success && !error && <p className='w-64 h-auto description bg-green-100 text-green-600 p-4 rounded-md'>email sent! Check your mails, your spam or retry in one minute.</p>}
		{error && !success && <p className='w-64 h-auto description bg-red-100 text-red-600 p-4 rounded-md'>invalid email.</p>}
	</div>
	)
}

export default page