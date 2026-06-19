import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />

      <footer className="py-12">
        <div
          name="Footer"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20"
        >
          <div className=" flex  flex-col items-center justify-center ">
            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/bittu.obray/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-blue-600 hover:text-white hover:scale-110 transition duration-300"
              >
                <FaFacebook size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/yadav_bittu2631/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-pink-500 hover:text-white hover:scale-110 transition duration-300"
              >
                <FaInstagram size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bittu-kumar-308995288/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-blue-700 hover:text-white hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full shadow-md hover:bg-sky-500 hover:text-white hover:scale-110 transition duration-300"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2026 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Bittu</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
