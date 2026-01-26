"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
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
    const signupData = localStorage.getItem("signupData");

    // ❌ Agar signup hi nahi hua
    if (!signupData) {
      toast.error("Please signup first ❌", { autoClose: 2000 });
      return;
    }

    const savedUser = JSON.parse(signupData);

    // ❌ Email / password mismatch
    if (
      data.email !== savedUser.email ||
      data.password !== savedUser.password
    ) {
      toast.error("Invalid email or password ❌", { autoClose: 2000 });
      return;
    }

    // ✅ Login success
    localStorage.setItem("isLoggedIn", "true");

    toast.success("Login successful 🎉", { autoClose: 1500 });

    setTimeout(() => {
      router.push("/");
    }, 1200);
  };

  return (
    <div>
      <Nav />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex items-center justify-center bg-white p-6"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
                {...register("password", {
                  required: "Password is required",
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-2 cursor-pointer bg-black text-white rounded-lg"
            >
              Login
            </motion.button>
          </form>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-indigo-900 font-medium">
              Register 
            </a>
          </p>

          <ToastContainer position="top-center" />
        </motion.div>
      </motion.div>
    </div>
  );
}
