"use client";

import { resetPassword } from "@/lib/action";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormState } from "./LogInFrom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export type FormResetState = {
	// TODO: delete email it's just for test
	email: string;
  password: string;
  confirmPassword: string;
};

const ResetPassword = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passordMatch, setPassordMatch] = useState(true);

  const verifyPassword = (password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setPassordMatch(false);
    } else {
      setPassordMatch(true);
    }
  };

  const handleFormSubmit = async () => {
		
    const responce = await resetPassword(form);
    if (responce === true) {
    	// return router.push('/login');
    }
    else {
    	alert('Something went wrong');
    	return router.push('/');
    }
    verifyPassword(form.password, form.confirmPassword);
  };

	// TODO: delete email it's just for test
  const [form] = useState<FormResetState>({
		email: "test.juliencros@gmail.com",
    password: "",
    confirmPassword: "",
  });

  const handleStateChange = (
    fieldName: keyof FormResetState,
    value: string
  ) => {
    form[fieldName] = value;
  };

  return (
    <form
      className="flex flex-col items-center justify-center gap-12"
      action={handleFormSubmit}
      onSubmit={() => {
        handleFormSubmit();
      }}
    >
      <div className="flex">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="password"
          className="bg-light-yellow border-b-[1px] border-brown-light focus:outline-none"
          onChange={(e) => handleStateChange("password", e.target.value)}
        />
        {showPassword ? (
          <EyeIcon
            className="h-6 w-6 text-brown"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeSlashIcon
            className="h-6 w-6 text-brown"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>

      <div className="flex">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="confirm password"
          className="bg-light-yellow border-b-[1px] border-brown-light focus:outline-none"
          onChange={(e) => handleStateChange("confirmPassword", e.target.value)}
        />
        {showConfirmPassword ? (
          <EyeIcon
            className="h-6 w-6 text-brown"
            onClick={() => setShowConfirmPassword(false)}
          />
        ) : (
          <EyeSlashIcon
            className="h-6 w-6 text-brown"
            onClick={() => setShowConfirmPassword(true)}
          />
        )}
      </div>
      <button type="submit" className="text-brown-dark text-lg font-extrabold">
        Reset Password
      </button>
      {!passordMatch && (
        <p className="w-64 h-auto description bg-red-100 text-red-600 p-4 rounded-md">
          passwords do not match
        </p>
      )}
    </form>
  );
};

export default ResetPassword;
