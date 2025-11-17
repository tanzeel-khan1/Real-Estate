"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../component/Nav";

interface LoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const router = useRouter();

  const onSubmit = (data: LoginForm) => {
    localStorage.setItem("loginData", JSON.stringify(data));
    toast.success(" Local Demo Was Submitted!");

    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
   <div>
    <Nav/>
     <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black cursor-pointer text-white rounded-lg hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <ToastContainer position="top-center" />
      </div>
    </div>
   </div>
  );
}
