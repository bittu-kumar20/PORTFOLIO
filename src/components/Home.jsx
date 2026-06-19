import img from "../../public/bittu.jpeg";
// import {pic} from "/public/photo.avif";
import { ReactTyped } from "react-typed";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNode } from "react-icons/fa";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-8 order-2 md:order-1">
            <span>Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, Im a </h1>
              {/* <span className="text-red-700 font-semibold">Developer</span> */}
              <ReactTyped
                className="text-red-700  font-semibold"
                strings={["Developer", "Coder", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <div>
              <h1>Hi Im Bittu Kumar</h1>

              <p className="text-sm md:text-lg text-justify">
                I am a Frontend developer based in ahmedabad, India. I am a
                Computer Engineering undergraduate Persuing from Silver Oak
                University. I am very passionate about improving my coding
                skills & developing applications & websites. I build WebApps and
                Websites using Reactjs. Working for myself to improve my skills.
                Love to build clones.
              </p>
            </div>
            <br />
            {/* social media */}
            <div className="flex flex-col md:flex-row  items-center space-y-6 md:space-y-0  justify-between">
              <div className="space-y-2">
                <h1 className="font-bold">Available On </h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/bittu.obray"
                      target="_blank"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/bittu-kumar-308995288"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/yadav_bittu2631/"
                      target="_blank"
                    >
                      <BsInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="space-y-2
            "
              >
                <h1 className="font-bold">Currently Working On</h1>
                <ul className="flex space-x-5">
                  <li>
                    {" "}
                    <BiLogoMongodb className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <SiExpress className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <IoLogoReact className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <FaNode className="text-2xl  md:text-3xl hover:scale-110  duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 ">
            <img
              src={img}
              className="rounded-2xl md:h[450px] md:w[450px]"
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </>
  );
}

export default Home;
