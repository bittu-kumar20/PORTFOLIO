import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";
import toast  from "react-hot-toast";

function Contact() {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit= async (data)=>{
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        };
        try {
            await  axios.post("https://getform.io/f/broogdla",userInfo)
            toast.success("Your message has been sent");
        } catch (error) {
           console.log(error); 
           toast.error("something went wrong");
        }
      };
  return (
    <>
    <div name="Contact us" className='"max-w-screen-2xl container mx-auto px-4 md:px-20 my-4 '>
        <h1 className='text-3xl font-bold'>Contact me</h1>
        <span>Please Fill out of the form below to contact me</span>
        <div className='flex flex-col items-center justify-center mt-5'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
           // action="https://getform.io/f/broogdla"
           // method='POST'
            className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>Send Your Message </h1>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor="">FullName</label>
                    <input 
                    className='shadow rounded-lg appearance-none  border  py-2 px-3 text-gray-700 leading-tight focus:outline'
                    type="text"
                     name='name'
                     {...register("name", { required: true })}
                    id='name'
                    placeholder=' Enter Your fullname'/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor="">Email</label>
                    <input 
                     {...register("email", { required: true })}
                    className='shadow rounded-lg appearance-none  border   py-2 px-3 text-gray-700 leading-tight focus:outline'
                    type="text" 
                    name='email'
                    id='name'
                    placeholder=' Enter Your email'/>
                     {errors.email && <span>This field is required</span>}
                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' htmlFor="">Message</label>
                    < textarea
                     {...register("message", { required: true })}
                    className='shadow rounded-lg appearance-none  border  py-2 px-3 text-gray-700 leading-tight focus: outline'
                    type="text" 
                    name='message'
                    id='name'
                    placeholder=' Enter Your message here'/>
                     {errors.message && <span>This field is required</span>}
                </div>
                <div>
                <button type='submit'  className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'  >
                 Send
                </button>  
                    </div>

            </form>
        </div>

    </div>
      
    </>
  )
}

export default Contact;
