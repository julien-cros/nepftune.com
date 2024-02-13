'use client'

import { logIn } from '@/lib/action';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";


export type FormState = {
	email: string;
	password: string;
};

const LogInFrom = () => {
	const router = useRouter();

	const [showPassword, setShowPassword] = useState(false);

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

// TODO: create alert component and message error password or email
	const handleFormSubmit = async () => {

try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      if (!response.ok)
			router.push('/login')
			;

      const { token } = await response.json();
      document.cookie = `token=${token}; path=/`;
      router.push("/dashboard");
} catch (error) {
			alert('login failed');
    }
	}

	

	return (
		<form className="flex flex-col justify-center items-center gap-10"
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
			<div className='flex flex-row pl-6'>
				<input
					type={showPassword ? 'text' : 'password'}
					placeholder='password'
					className='bg-light-yellow border-b-[1px] border-brown-light focus:outline-none description'
					onChange={(e) => handleStateChange('password', e.target.value)}
					/>
					<div className=''>
						{ showPassword ?
							<EyeIcon
								className='w-6 h-6'
								type='button'
								onClick={() => setShowPassword(!showPassword)}
							/>
							:
							<EyeSlashIcon
								className='w-6 h-6'
								type='button'
								onClick={() => setShowPassword(!showPassword)}
							/>

						}
						</div>
			</div>
			<div>
				<button className='text-brown-dark text-lg font-extrabold'
					type='submit'
				>login</button>
			</div>
		</form>
	)
}

export default LogInFrom