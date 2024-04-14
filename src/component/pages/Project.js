import website from "../../assets/imgs/website.jpg";
import { motion } from "framer-motion";
import car from "../../assets/imgs/car.png";
import fastfood from "../../assets/imgs/fastfood.png";
import pokemon from "../../assets/imgs/pokemon.png";
import space from "../../assets/imgs/space.png";
import { PiGithubLogoFill } from "react-icons/pi";

function Project() {
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
        exit={{ insetInline: 1 }}
        className="flex justify-center w-svw flex-wrap gap-12 mt-6 mx-14 pb-5"
      >
        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={car} className="" />
          <h1 className="font-bold pt-2">86</h1>
          <span className=" text-xs ">
            This site was created by html and css
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={fastfood} />
          <h1 className="font-bold pt-2">name project</h1>
          <span className=" text-xs ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui b
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={pokemon} />
          <h1 className="font-bold pt-2">name project</h1>
          <span className=" text-xs ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui b
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>

        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={space} />
          <h1 className="font-bold pt-2">name project</h1>
          <span className=" text-xs ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui b
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>
        <div
          id="img"
          className=" bg-orange hover:bg-lightOrange w-[300px] xl:w-[400px]"
        >
          <img src={space} />
          <h1 className="font-bold pt-2">name project</h1>
          <span className=" text-xs ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui b
          </span>
          <PiGithubLogoFill className="text-3xl pt-2" />
        </div>
      </motion.div>
    </div>
  );
}
export default Project;
