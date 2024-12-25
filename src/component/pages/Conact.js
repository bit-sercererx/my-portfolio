import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Conact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "917e34ab-92b8-49f2-98af-5577b0e2f8e3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast("Message sent successfully!");
    }
  };

  return (
    <div className="relative">
      <motion.div
        className="w-svw h-[2000px] fixed top-[-200px] bg-orange z-10 "
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
        <div className="mb-10 ">
          <h1 className="text-6xl xl:text-[170px] text-orange">let’s talk</h1>
          <h3 className="text-2xl dark:text-white">
            Ask me any thing or just say hi...
          </h3>
          <span className="pt-10 dark:text-white ">
            <HiOutlineMail className=" inline text-orange" />
            ameerahmed202397@gmail.com
          </span>
        </div>
        <div>
          <form className="ml-9" onSubmit={onSubmit}>
            <input
              className="bg-white dark:bg-black mr-3 w-36 mb-6 xl:w-60 xl:mb-9 dark:text-white"
              type="text"
              name="name"
              id="input"
              placeholder="Name"
            ></input>
            <input
              className="bg-white dark:bg-black w-36 xl:w-60 dark:text-white"
              id="input"
              placeholder="Email"
              name="email"
              type="email"
            ></input>
            <div>
              <input
                className="bg-white dark:bg-black w-[300px] xl:w-[493px] dark:text-white "
                id="input"
                placeholder="Write your message here"
                type="text"
                name="message"
              ></input>
            </div>{" "}
            <button
              type="submit"
              className="bg-orange  w-[300px] mt-2 p-1 rounded-md font-bold xl:mt-6 xl:w-[493px] dark:text-white dark:font-normal"
            >
              SEND
            </button>
          </form>
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </motion.div>
    </div>
  );
}
export default Conact;
