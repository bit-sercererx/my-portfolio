import aboutimg from "../../assets/imgs/aboutimg.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <motion.div
        className="w-svw h-[1000px] absolute top-[-200px] bg-orange z-10 "
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
        className="flex flex-col items-center mx-[60px] mt-4 lg:flex-row lg:w-svw lg:justify-center lg:items-start lg:mx-20 xl:mx-1"
      >
        <div className="">
          <img
            src={aboutimg}
            className="w-[150px] rounded-md mb-4 lg:w-[200px] xl:w-[300px]"
          />
          <div className="hidden lg:block">
            <div className="lg:w-[300px] xl:w-[400px]">
              <div>
                <h2 className="text-orange text-3xl xl:text-4xl py-2">
                  My skills
                </h2>
                <div class="box">
                  <div class="content">
                    <span className="dark:text-white">css</span>
                    <span className="dark:text-white">85%</span>
                  </div>
                  <div class="line-area">
                    <div id="line-1"></div>
                  </div>
                </div>
                <div class="box">
                  <div class="content">
                    <span className="dark:text-white">html</span>
                    <span className="dark:text-white">95%</span>
                  </div>
                  <div class="line-area">
                    <div id="line-2"></div>
                  </div>
                </div>
                <div class="box">
                  <div class="content">
                    <span className="dark:text-white">javascript</span>
                    <span className="dark:text-white">75%</span>
                  </div>
                  <div class="line-area">
                    <div id="line-3"></div>
                  </div>
                </div>
                <div class="box">
                  <div class="content">
                    <span className="dark:text-white">react js</span>
                    <span className="dark:text-white">60%</span>
                  </div>
                  <div class="line-area">
                    <div id="line-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-[10%] xl:ml-[20%]">
          <p className="text-5xl text-orange xl:text-7xl ">About me</p>
          <hr className="w-24 mt-1 text-white" />
          <p className="text-justify dark:text-white lg:text-xl lg:w-96 xl:text-2xl xl:w-[500px] ">
            I'm a web developer with a strong foundation in front-end
            technologies. I'm skilled in the core languages of web development:
            HTML, CSS, and JavaScript. This allows me to build the structure,
            style, and interactivity of websites. Additionally, I have
            experience with React, a popular JavaScript library that helps
            create complex and dynamic user interfaces. To further enhance the
            development process, I'm proficient in Figma, a design tool that
            enables me to seamlessly translate design mockups into functional
            web interfaces
          </p>{" "}
        </div>
        <div className="lg:hidden ">
          <div className="w-[400px]">
            <div class="skill-area">
              <h2 className="text-orange text-3xl">My skills</h2>
              <div class="box">
                <div class="content">
                  <span className="dark:text-white">css</span>
                  <span className="dark:text-white">85%</span>
                </div>
                <div class="line-area">
                  <div id="line-1"></div>
                </div>
              </div>
              <div class="box">
                <div class="content">
                  <span className="dark:text-white">html</span>
                  <span className="dark:text-white">95%</span>
                </div>
                <div class="line-area">
                  <div id="line-2"></div>
                </div>
              </div>
              <div class="box">
                <div class="content">
                  <span className="dark:text-white">javascript</span>
                  <span className="dark:text-white">75%</span>
                </div>
                <div class="line-area">
                  <div id="line-3"></div>
                </div>
              </div>
              <div class="box">
                <div class="content">
                  <span className="dark:text-white">react js</span>
                  <span className="dark:text-white">60%</span>
                </div>
                <div class="line-area">
                  <div id="line-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default About;
