import { Link } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { GrProjects } from "react-icons/gr";
import { GrContact } from "react-icons/gr";

function SideBar() {
  return (
    <div className=" h-4/5 dark:bg-black bg-white flex items-center fixed z-10 ">
      <div className="  bg-orange rounded-r-md h-96">
        <div className="flex flex-col gap-10 p-1 pt-2">
          <ul className="flex flex-col gap-16 p-1 pt-3">
            <li>
              <Link to="/">
                <CiHome className="text-4xl focus:text-white font-bold hover:text-lightOrange" />
              </Link>
            </li>
            <li>
              <Link to="/about">
                <IoMdInformationCircleOutline className="text-3xl pl-1 hover:text-lightOrange" />
              </Link>
            </li>
            <li>
              <Link to="/project">
                <GrProjects className="text-3xl pl-1 hover:text-lightOrange" />
              </Link>
            </li>
            <li>
              <Link to="/conact">
                <GrContact className="text-3xl pl-1 hover:text-lightOrange" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
