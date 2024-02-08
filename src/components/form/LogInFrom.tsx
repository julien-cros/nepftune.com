'use client'

import { logIn } from '@/lib/action';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


export type FormState = {
	email: string;
	password: string;
};

const LogInFrom = () => {
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
					placeholder='password'
					className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none description'
					onChange={(e) => handleStateChange('password', e.target.value)}
					/>
			</div>
			<div>
				<button className='text-brown-dark text-lg font-extrabold'
					type='submit'

				>login</button>
			</div>
			<div className='absolute bottom-10 right-10'>
				<button className='text-lg text-brown-dark'>forgot your password</button>
			</div>
		</form>
	)
}

export default LogInFrom