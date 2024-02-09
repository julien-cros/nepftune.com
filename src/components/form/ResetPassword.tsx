'use client'

import { resetPassword } from '@/lib/action';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormState } from './LogInFrom';


export type FormResetState = {
	email: string;
	password: string;
	confirmPassword: string;
}

const ResetPassword = () => {
	const router = useRouter();

	const handleFormSubmit = async () => {
		const responce = await resetPassword(form);
		if (responce === true) {
			return router.push('/dashboard');
		}
		else {
			alert('Something went wrong');
			return router.push('/');
		}
	}

	const [form] = useState<FormResetState>({
		email: "",
		password: "",
		confirmPassword: "",
	})

	const handleStateChange = (
		fieldName: keyof FormResetState,
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
				className='text-brown-dark text-lg font-extrabold'
			>
				Reset Password
			</button>

		</form>
	)
}

export default ResetPassword