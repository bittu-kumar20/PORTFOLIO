import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/broogdla", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact us"
        className="max-w-screen-2xl container mx-auto px-4  md:px-20 my-4"
      >
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Contact <span className="text-purple-600">Me</span>
          </h1>
          <p className="text-gray-500 mt-3">
            Feel free to reach out by filling the form below 👇
          </p>
          <div className="w-24 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/broogdla"
            // method='POST'
            className="max-w-md lg:w-96 bg-gray-200 px-8 py-6 sm:mx-50 shadow-2xl rounded-2xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message </h1>
            <div className="flex flex-col mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor=""
              >
                FullName
              </label>
              <input
                className="shadow rounded-lg appearance-none  border  py-2 px-3 text-gray-700 leading-tight focus:outline"
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="name"
                placeholder=" Enter Your fullname"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor=""
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none  border   py-2 px-3 text-gray-700 leading-tight focus:outline"
                type="text"
                name="email"
                id="name"
                placeholder=" Enter Your email"
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className=" text-gray-700 font-semibold mb-2" htmlFor="">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none  border  py-2 px-3 text-gray-700 leading-tight focus: outline"
                type="text"
                name="message"
                id="name"
                placeholder=" Enter Your message here"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
