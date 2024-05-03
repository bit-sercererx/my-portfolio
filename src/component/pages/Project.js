import website from "../../assets/imgs/website.jpg";
import { motion } from "framer-motion";
import { PiGithubLogoFill } from "react-icons/pi";
import car from "../../assets/imgs/car.png";
import space from "../../assets/imgs/space.png";
import pokemon from "../../assets/imgs/pokemon.png";
import fastfood from "../../assets/imgs/fastfood.png";
import movie from "../../assets/imgs/movie.png";
function Project() {
  return (
    <div className="">
      <motion.div
        className="w-svw h-[1000px] fixed top-[-200px] bg-orange z-10 "
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
        className="flex justify-center w-svw flex-wrap gap-12 mt-6  pb-5"
      >
        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <a href="https://shopping-web-site-86.netlify.app/" target="-blank">
            <img src={car} className="" />
          </a>
          <h1 className="font-bold pt-2">86</h1>
          <span className=" text-xs ">
            An online store for selling car modification parts has been
            created:html/css{" "}
          </span>
          <a
            href="https://github.com/bit-sercererx/shopping-web-site-86-"
            target="-blank"
          >
            {" "}
            <br />
            <PiGithubLogoFill className="text-3xl pt-2 inline" />
          </a>
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <a href="https://fast-food-shop-01.netlify.app/" target="-blank">
            <img src={fastfood} />
          </a>
          <h1 className="font-bold pt-2">Fast Food</h1>
          <span className=" text-xs ">
            An online restaurant that sells fast food, created by : html/css{" "}
          </span>
          <br />
          <a
            href="https://github.com/bit-sercererx/fast-food-shop"
            target="-blank"
          >
            <PiGithubLogoFill className="text-3xl pt-2 inline" />
          </a>
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <a href="https://pokemon-api-detils.netlify.app/" target="-blank">
            <img src={pokemon} />
          </a>
          <h1 className="font-bold pt-2">pokemon</h1>
          <span className=" text-xs ">
            A website displaying Pokemon and its details. It was created
            by:html/css/js{" "}
          </span>
          <br />
          <a
            href="https://github.com/bit-sercererx/JS-Pokemon_API_Project"
            target="-blank"
          >
            <PiGithubLogoFill className="text-3xl pt-2 inline" />
          </a>
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <a href="https://our-space-01.netlify.app/" target="-blank">
            <img src={space} />
          </a>
          <h1 className="font-bold pt-2">our space</h1>
          <span className=" text-xs ">
            A website to display details of our space ,made by: html/css{" "}
          </span>
          <br />
          <a href="https://github.com/bit-sercererx/our-space" target="-blank">
            <PiGithubLogoFill className="text-3xl pt-2" />
          </a>
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={movie} />
          <h1 className="font-bold pt-2">move</h1>
          <span className=" text-xs ">
            A website for displaying and watching films and displaying actors
            and their films. It was created by: html/js/react/tallwind{" "}
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>
      </motion.div>
    </div>
  );
}
export default Project;
