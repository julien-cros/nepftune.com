'use client'

import React from 'react'
import InputPhoto from './InputPhoto'

type CreateNewProps = {
	type: string
}

const CreateNew = ({ type }: CreateNewProps) => {

	const handleSubmit = async () => {
		
	}

	const newForm = {
		type: type,
		title: '',
		description: '',
		photo: ''
	}

	return (
		<div>
			<form className="flex flex-col items-center justify-center"
			action={handleSubmit}
			>
				<h2 className='marcellus text-xl text-brown-dark pt-20'>Title</h2>
				<input type="text" name="title" placeholder='title:' required={true} className='h-10 w-56 mt-4 text-lg marcellus bg-yellow-light border-b-[1px] border-brown focus:outline-none' />
				<h2 className='marcellus text-xl text-brown-dark pt-20  '>Description</h2>
				<textarea name="description" placeholder='The descrition of the project:' required={true} className='h-20 w-1/3 mt-4 text-lg marcellus bg-yellow-light border-b-[1px] border-brown focus:outline-none' />
				<InputPhoto type={type}/>
			</form>
		</div>
	)
}

export default CreateNew