'use server'

import { FormState } from "@/components/form/LogInFrom";
import { db } from "./db";
const bcrypt = require('bcrypt');


const isProduction = process.env.NODE_ENV === "production";

export const logIn = async (data: FormState) => {
	const responce = await db.user.findFirstOrThrow({
		where: {
			email: data.email,
		}
	});
	if (!responce) {
		return false;
	}

	const match = await bcrypt.compare(data.password, responce.password);
	if (!match) {
			console.log('Password does not match');
		return false;
	}
	return true;
};

export const resetPassword = async (data: FormState) => {
	const responce = await db.user.findFirstOrThrow({
		where: {
			email: data.email,
		}
	});
	if (!responce) {
		return false;
	}
	
	const newPassword = await db.user.update({
		where: {
			email: data.email,
		},
		data: {
			password: await bcrypt.hash(data.password, 10),
		}
	});
	if (!newPassword) {
		return false;
	}
	return true;
}