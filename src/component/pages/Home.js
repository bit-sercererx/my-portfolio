import { Link } from "react-router-dom";
import myimg from "../../assets/imgs/myimg.png";
import { motion } from "framer-motion";
function Home() {
  return (
    <div>
      <motion.div
        className="w-svw h-[2000px] fixed top-[-200px] bg-orange z-10 "
        initial={{ x: "-100%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 3 }}
      ></motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        exit={{ x: "0%" }}
        className="flex flex-col justify-center items-center  w-screen md:flex md:flex-row lg:ml-[-40px] lg:mt-[px]"
      >
        <div className="md:flex md:flex-row md:justify-around xl:gap-x-36 ">
          <div className="mt-11 md:hidden  ">
            <p className="text-4xl text-orange ">Hi I'm</p>
            <h1 className="text-6xl dark:text-white ">Ameer</h1>
          </div>

          <div className=" rounded-lg md:w-80 md:h-80 w-64 h-72 bg-orange mt-28 mb-7 md:mt-[32%] md:mr-20 lg:w-[500px] lg:h-[438px] xl:mt-[11%] xl:w-[500px] xl:h-[480px] relative ">
            <img
              src={myimg}
              className="w-72 absolute top-[-90px] ml-[px]  md:top-[-155px]  md:w-80  lg:w-[400px] lg:left-[40px] xl:top-[-113px] "
            />
          </div>

          <div className="md:flex md:flex-col md:justify-center md:items-center md:mt-[20%] xl:mt-[10%]">
            <div>
              <div className="hidden md:block ">
                <p className="text-4xl text-orange md:text-6xl md:mr-36 lg:text-7xl">
                  Hi I'm
                </p>
                <h1 className="text-6xl dark:text-white md:text-8xl lg:text-9xl">
                  Ameer
                </h1>
              </div>
            </div>

            <div>
              <p className="w-64 text-justify pt-2 dark:text-white md:text-xl lg:text-2xl xl:w-80">
                I am a web developer living in Iraq, born in 1997, and hold a
                bachelor’s degree in law. If you have any questions, do not
                hesitate to message me.
              </p>
            </div>
            <div className="mt-3">
              <Link to="/conact">
                {" "}
                <button className="bg-orange p-1 rounded-md  mr-44 text-white  md:mt-2 md:text-xl lg:text-2xl lg:ml-2 xl:px-8 dark:text-black dark:font-bold">
                  contact me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
