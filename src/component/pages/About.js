import aboutimg from "../../assets/imgs/aboutimg.jpg";
import { motion } from "framer-motion";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <div className="">
      <motion.div
        className="w-svw h-svh fixed top-0 bg-orange z-10 "
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 3 }}
      ></motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        exit={{ opacity: 3 }}
      >
        <div className="flex flex-col w-[90%] m-auto   justify-around h-svh md:mt-[8%] mt-[15%]">
          <div className="flex ">
            <img
              src={aboutimg}
              className=" hidden  md:block md:w-[400px] md:h-[400px] md:rounded-md"
            />
            <div className="ml-[5%]  ">
              <h1 className=" ml-[7%] text-6xl text md:text-7xl text-orange ">
                About Me
              </h1>
              <hr className="w-36 my-3 ml-[7%] dark:text-white text-black" />
              <img src={aboutimg} className="w-[80%] ml-[7%] md:hidden mb-4 " />
              <p className="w-[90%] ml-[7%] md:w-auto md:text-2xl text-justify dark:text-white text-black">
                My name is Ameer, and I am a web developer specializing in
                creating exceptional digital experiences. I was born in Iraq in
                1997 and obtained a bachelor's degree in law, but my true
                passion lies in programming. I have mastered full stack
                development, from designing user interfaces to building robust
                server-side architectures. I am proficient in technologies such
                as HTML, CSS, React.js, JavaScript, MongoDB, Figma, and UI/UX
                design. I continuously strive to improve my skills and stay
                updated with the latest developments to deliver innovative and
                impactful web experiences.
              </p>
            </div>
          </div>
          <div className=" flex gap-10 w-[90%] ml-[10%] my-10 justify-around flex-wrap md:flex md:flex-wrap  ">
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#e86229] from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <IoLogoHtml5 className="text-4xl md:text-7xl" />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  HTML
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#3593ce] from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <IoLogoCss3 className="text-4xl md:text-7xl" />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  CSS
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#ebd418] from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <IoLogoJavascript className="text-4xl md:text-7xl hover:rounded-[50%] transition-all " />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  JAVA SCRIPT
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl dark:bg-white bg-black from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <IoLogoReact className="text-4xl md:text-7xl text-[#3593ce] " />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  REACT{" "}
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#13a34e] from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <SiTailwindcss className="text-4xl md:text-7xl text-white" />
                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  MONGODB{" "}
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl dark:bg-white bg-black from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <FaFigma className="text-4xl md:text-7xl text-white dark:text-black " />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  FIGMA{" "}
                </span>
              </button>
            </section>
            <section class="flex justify-center items-center">
              <button
                href="/"
                class="group flex justify-center p-2 rounded-md drop-shadow-xl bg-[#13a34e] from-gray-800 to-black  font-semibold hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
              >
                <SiMongodb className="text-4xl md:text-7xl text-white " />

                <span class="pointer-events-none dark:text-white text-black absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  MONGODB{" "}
                </span>
              </button>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
