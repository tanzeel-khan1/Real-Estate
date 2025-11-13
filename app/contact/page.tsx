"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem("contactFormData", JSON.stringify(data));

    toast.success("Your demo submitted 🎉", {
      position: "top-right",
      autoClose: 3000,
    });

    reset();
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-8 bg-gray-900">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-2xl rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700">
        <div className="w-full lg:w-2/5 p-10 bg-gray-900/90 text-white">
          <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
          <p className="text-sm text-gray-400 mb-8">
            Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  minLength: { value: 10, message: "Must be at least 10 digits" },
                })}
                type="tel"
                placeholder="Your phone"
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Your message"
                rows={6}
                className="w-full p-3 rounded bg-gray-800 border border-gray-700 text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send message
            </button>
          </form>
        </div>

        <div
          className="w-full lg:w-3/5 p-10 flex flex-col justify-center text-white bg-cover bg-center"
          style={{
            backgroundImage: `url('https://picsum.photos/1200/800?blur=5')`,
          }}
        >
          <div className="bg-gray-900/40 p-6 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
              Putting a plan to action, <br />
              to assure your satisfaction!
            </h1>
            <p className="text-lg text-gray-300">
              Arcu laoreet malesuada nunc eget. Fermentum ut dui etiam aliquam habitant elit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
