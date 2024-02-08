'use client'

import { logIn } from '@/lib/action';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormState } from './LogInFrom';


const ResetPassword = () => {
	const router = useRouter();

	const handleFormSubmit = async () => {
		console.log(form);
		const responce = await logIn(form);
		if (responce === true) {
			console.log('logged in');
			return router.push('/dashboard');
		}
		else {
			console.log('something went wrong');
			alert('Something went wrong');
			return router.push('/');
		}
	}

	const [form] = useState<FormState>({
		email: "",
		password: "",
	})

	const handleStateChange = (
		fieldName: keyof FormState,
		value: string,
	) => {
		form[fieldName] = value;
	};



	return (
		<form className="flex flex-col items-center justify-center gap-10"
		action={handleFormSubmit}
		onSubmit={() => {
			handleFormSubmit();
		}}
		>
			<div className=''>
					<input
						type="text"
						placeholder='email:'
						className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none'
						onChange={(e) => handleStateChange('email', e.target.value)}
					/>
			</div>
			<div>
				<input
					type='password'
					placeholder='password:'
					className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none'
					onChange={(e) => handleStateChange('password', e.target.value)}
				/>
			</div>
			<div>
				<input
					type='password'
					placeholder='confirm password:'
					className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none'
					onChange={(e) => handleStateChange('password', e.target.value)}
				/>
			</div>
			<button
				type='submit'
				className=' text-brown-dark text-lg font-extrabold'
			>
				Reset Password
			</button>

		</form>
	)
}

export default ResetPassword