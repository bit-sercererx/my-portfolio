import website from "../../assets/imgs/website.jpg";
import { motion } from "framer-motion";
import { PiGithubLogoFill } from "react-icons/pi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";

import car from "../../assets/imgs/car.png";
import space from "../../assets/imgs/space.png";
import pokemon from "../../assets/imgs/pokemon.png";
import blog from "../../assets/imgs/blog.png";
import mint from "../../assets/imgs/mint.png";
function Project() {
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
        exit={{ insetInline: 1 }}
        className="flex justify-center w-svw flex-wrap gap-24 mt-[10%] ml-[2%] pb-5 px-10 "
      >
        <div class="relative flex w-[70%] md:w-80 flex-col rounded-xl bg-orange bg-clip-border text-gray-700 shadow-md ">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={blog} />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              blog{" "}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased overflow-auto h-20 ">
              Here is an example of a website for a blog built with React and
              Tailwind CSS for the front end, and Node.js, Express, and MongoDB
              for the back end, along with various other libraries.
            </p>
          </div>
          <div class="p-6 pt-0">
            <a href="https://github.com/bit-sercererx/blog-frontend">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none dark:text-white text-black  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Front End{" "}
              </button>
            </a>
            <a href="https://github.com/bit-sercererx/blog-backend">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none  ml-2 dark:text-white text-black  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Back End{" "}
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex w-[70%] md:w-80 flex-col rounded-xl bg-orange bg-clip-border text-gray-700 shadow-md ">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={mint} />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Mint "نعناع"
            </h5>
            <p class="block h-20 font-sans text-base font-light leading-relaxed text-inherit antialiased overflow-auto ">
              Here’s a website specialized for doctors and pharmacies for
              booking appointments, locating services, and providing medical
              articles. The front end is built with React and Tailwind CSS, and
              the back end is built with Node.js, Express, and MongoDB, along
              with various other libraries.
            </p>
          </div>
          <div class="p-6 pt-0">
            <a href="https://github.com/mehdi22256/mint-frontend">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none dark:text-white text-black  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Front End{" "}
              </button>
            </a>
            <a href="https://github.com/mehdi22256/mint">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none  ml-2 dark:text-white text-black  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Back End{" "}
              </button>
            </a>
          </div>
        </div>

        <div class="relative flex w-[70%] md:w-80 flex-col rounded-xl bg-orange bg-clip-border text-gray-700 shadow-md ">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={car} />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              86 Store{" "}
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-20">
              This simple website was made by html and css
              ......................
            </p>
          </div>
          <div class="p-6 pt-0 ">
            <a href="https://github.com/bit-sercererx/shopping-web-site-86-">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none   dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <TbBrandGithubFilled className=" dark:text-white text-black " />
              </button>
            </a>
            <a href="https://shopping-web-site-86.netlify.app/">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none ml-3 dark:bg-black bg-white rounded-lg bg-blue-500 py-[9px] px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <div className="flex">
                  {" "}
                  <span className="text-[10px]  dark:text-white text-black ">
                    View the website
                  </span>
                  <IoIosArrowRoundForward className="text-[18px] dark:text-white text-black " />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex w-[70%] md:w-80 flex-col rounded-xl bg-orange bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={space} />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              our space
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-20">
              This simple website was made by html and css.................
            </p>
          </div>
          <div class="p-6 pt-0">
            <a href="https://github.com/bit-sercererx/our-space">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <TbBrandGithubFilled className=" dark:text-white text-black " />
              </button>
            </a>
            <a href="https://our-space-01.netlify.app/">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none ml-3 dark:bg-black bg-white rounded-lg bg-blue-500 py-[9px] px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <div className="flex">
                  {" "}
                  <span className="text-[10px]  dark:text-white text-black ">
                    View the website
                  </span>
                  <IoIosArrowRoundForward className="text-[18px] dark:text-white text-black " />
                </div>
              </button>
            </a>
          </div>
        </div>
        <div class="relative flex w-[70%] md:w-80 flex-col rounded-xl bg-orange bg-clip-border text-gray-700 shadow-md">
          <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-white bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src={pokemon} />
          </div>
          <div class="p-6">
            <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Pokemon My Stique
            </h5>
            <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased h-20">
              This simple website was made by html and css and js
            </p>
          </div>
          <div class="p-6 pt-0">
            <a href="https://github.com/bit-sercererx/JS-Pokemon_API_Project">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none  dark:bg-black bg-white rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <TbBrandGithubFilled className=" dark:text-white text-black " />
              </button>
            </a>
            <a href="https://pokemon-api-detils.netlify.app/">
              <button
                data-ripple-light="true"
                type="button"
                class="select-none ml-3 dark:bg-black bg-white rounded-lg bg-blue-500 py-[9px] px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <div className="flex">
                  {" "}
                  <span className="text-[10px]  dark:text-white text-black ">
                    View the website
                  </span>
                  <IoIosArrowRoundForward className="text-[18px] dark:text-white text-black " />
                </div>
              </button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Project;
