import React from "react";
import pic from "../../public/photo.avif";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";

function Home() {
  return (
    <>
      <div name="Home" 
       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span>Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
            <h1>Hello, I'm a </h1>
            {/* <span className="text-red-700 font-semibold">Developer</span> */}
            <ReactTyped
          className="text-red-700 font-semibold"
          strings={["Developer","Coder","Programmer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              vel corrupti totam sit quam quaerat velit quibusdam, voluptatem
              eveniet ratione tenetur, aut illo? Distinctio eum expedita dolorem
              praesentium ea perspiciatis!
            </p>
            <br />
            {/* social media */}
           <div className="flex flex-col md:flex-row  items-center space-y-6 md:space-y-0  justify-between">
           <div className="space-y-2">
                <h1 className="font-bold">Available On </h1>
                <ul className="flex space-x-5">
                    <li>
                       <a href="https://www.facebook.com/"
                      target="_blank">
                        
                        <FaSquareFacebook className="text-2xl cursor-pointer"/>
                        </a>
                     </li>
                     <li>
                     <a href="https://www.linkedin.com/"
                      target="_blank">
                        
                        <FaLinkedin className="text-2xl cursor-pointer"/>
                        </a>     
                    </li>
                    <li>
                    
                    <a href="https://www.youtube.com/"
                      target="_blank">
                        
                        <FaYoutube className="text-2xl cursor-pointer"/>
                        </a>   
                     
                       
                    </li>
                    <li>
                    
                    <a href="https://www.telegram.com/"
                      target="_blank">
                        
                        <BsTelegram className="text-2xl cursor-pointer"/>
                        </a>   
                       
                    </li>
                    
                </ul>
            
            </div>
            <div className="space-y-2
            ">
            <h1 className="font-bold">Currently Working On</h1>
                <ul className="flex space-x-5">
                    <li>
                        {" "}
                        
                        < BiLogoMongodb className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]"/>
                    
                     </li>
                     <li>
                        {" "}
                        
                        < SiExpress  className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]"/>
                    </li>
                    <li>
                        {" "}
                        
                        <  IoLogoReact className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]"/>
                    </li>
                    <li>
                        {" "}
                        
                        <  FaNode className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]"/>
                    </li>
                    
                </ul>
            </div>
          </div>
           </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
          <img src={pic} className="rounded-full md:h[450px] md:w[450px]" alt="" />
          </div>
        </div>
        <br />
      <hr />
      </div>
      
    </>
  );
}

export default Home;
