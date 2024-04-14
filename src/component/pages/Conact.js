import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
function Conact() {
  return (
    <div className="relative">
      <motion.div
        className="w-svw h-[1000px] absolute top-[-200px] bg-orange z-10 "
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        exit={{ opacity: 3 }}
      ></motion.div>
      <motion.div
        className="flex flex-col w-svw justify-center pt-[200px] items-center lg:flex-row lg:justify-around "
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        exit={{ opacity: 2 }}
      >
        <div className="mb-10">
          <h1 className="text-9xl xl:text-[170px] text-orange">let’s talk</h1>
          <h3 className="text-4xl dark:text-white">
            Ask me any thing or just say hi...
          </h3>
          <span className="pt-10 dark:text-white ">
            <HiOutlineMail className=" inline text-orange" />
            ameerahmed202397@gmail.com
          </span>
        </div>
        <div>
          <form>
            <input
              className="bg-white dark:bg-black mr-3 w-40 mb-6 xl:w-60 xl:mb-9 dark:text-white"
              type="text"
              id="input"
              placeholder="Name"
            ></input>
            <input
              className="bg-white dark:bg-black w-40 xl:w-60 dark:text-white"
              id="input"
              placeholder="Email"
              type="email"
            ></input>
            <div>
              <input
                className="bg-white dark:bg-black w-[332px] xl:w-[493px] dark:text-white "
                id="input"
                placeholder="Write your message here"
                type="text"
              ></input>
            </div>
          </form>
          <div>
            <button className="bg-orange w-[332px] mt-2 p-1 rounded-md font-bold xl:mt-6 xl:w-[493px] dark:text-white dark:font-normal">
              SEND
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default Conact;
