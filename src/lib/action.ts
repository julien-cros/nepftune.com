'use server'

import { FormState } from "@/components/form/LogInFrom";
import { db } from "./db";


const isProduction = process.env.NODE_ENV === "production";

export const logIn = async (data: FormState) => {
	const responce = await db.user.findFirstOrThrow({
		where: {
			email: data.email,
			password: data.password
		}
	});
	if (!responce) {
		return false;
	}
	console.log(responce);
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
			password: data.password,
		}
	});
	if (!newPassword) {
		return false;
	}
	return true;
}