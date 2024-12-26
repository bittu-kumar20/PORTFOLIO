import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import javascript from "../../public/javascript.png"
import java from "../../public/java.png"
import oracle from "../../public/oracle.png"
import spring from "../../public/spring.png"
import springBoot from "../../public/springBoot.jpg"


function Experiance() {

    const cardItem = [
        {
          id: 1,
          logo: html,
          name: "HTML",
        },
        {
          id: 2,
          logo: css,
          name: "CSS",
        },
        {
          id: 3,
          logo: javascript,
          name: "JAVASCRIPT",
        },
        {
          id: 4,
          logo: java,
          name: "JAVA",
        },
        {
          id: 5,
          logo: spring,
          name: "SPRING",
        },
        {
          id: 6,
          logo: springBoot,
          name: "SPRING BOOT",
        },
        {
            id: 7,
            logo: oracle,
            name: "ORACLE",
          },

      ];
  return (
    <div name="Experiances" className='max-w-screen-2xl container mx-auto px-4 md:mx-20 my-16'>
      
    <div className=''>
        <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
        {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:h-[200px] md:w-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px]   rounded-full "
                alt=""
              />
              <div>
                <div className="">{name}</div>
               
              </div>
             
            </div>
          ))}

        </div>
    </div>
    </div>
  )
}

export default Experiance;
