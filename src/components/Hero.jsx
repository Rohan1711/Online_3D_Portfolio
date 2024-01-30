import React from "react";
import { motion } from "framer-motion";
import {moon} from "../assets";
import { fadeIn} from "../varient";
import { TypeAnimation } from 'react-type-animation';
import { styles } from "../styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Hero = () => {
  return (
    <div
      name="Hero"
      className="relative h-screen w-full mx-auto">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-3/6">
          <motion.h2
          variants={fadeIn("right",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rohan</span>
          </motion.h2>
          <motion.div
             variants={fadeIn("right",0.6)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false, amount:0.7}}
             className={`${styles.heroSubText} text-white`}>
            <span className="mr-4">And I'm a</span>
            <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "FullStack Developer",
              2000,
              "Blockchain Developer",
              2000,
            ]}
              speed={50}
              className={`${styles.heroSubText} text-violet-400`}
              wrapper="span"
              repeat={Infinity}
            />
            </motion.div>
            <motion.div
               variants={fadeIn("right", 0.7)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }}
               className="flex items-center gap-x-5 max-w-max lg:mx-0 mt-5 mx-auto">
               <a href="https://github.com/Rohan1711" target="_blank">
                 <FaGithub className="text-4xl hover:bg-gray-500 bg-tertiary p-2 rounded-full shadow" />
               </a>
               <a href="https://www.linkedin.com/in/rohan-kakare-478729184" target="_blank">
                 <FaLinkedin className="text-4xl hover:bg-blue-700 bg-tertiary p-2 rounded-full shadow" />
               </a>
               <a href="mailto:rohankakare@gmail.com" target="_blank">
                 <HiOutlineMail className="text-4xl hover:bg-sky-700 bg-tertiary p-2 rounded-full shadow" />
               </a>
               <a href="/Rohan Resume.pdf" target="_blank">
                 <BsFillPersonLinesFill className="text-4xl hover:bg-violet-500 bg-tertiary p-2 rounded-full shadow" />
               </a>
        </motion.div>
        </div>
        <motion.div
                variants={fadeIn("left",0.5)}
                initial="hidden"
                whileInView={"show"}
                className="flex-1 max=w-[320px] lg:max-w-[440px]"
        >
          <img
            src={moon}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:max-w-lg"
          />
        </motion.div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  );
};
export default Hero;