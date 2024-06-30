import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar";
import SideBar from "./component/SideBar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Conact from "./component/pages/Conact";
import Project from "./component/pages/Project";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function App() {
  const [modeButton, setmoedButton] = useState(true);
  const handleButtonMode = () => {
    setmoedButton(!modeButton);
  };

  return (
    <div className={`${modeButton && "dark"}`}>
      {modeButton ? (
        <style>{`body {
            background-color: #1B1A17;
             
          }
            
        `}</style>
      ) : (
        <style>{`body{background-color:#FFFFFF;}
          `}</style>
      )}
      <div className=" bg-white w-full h-svh dark:bg-black font-body z-30  ">
        <NavBar handleButtonMode={handleButtonMode} />
        <div className=" flex h-svh w-svw">
          <div className="fixed top-[30%] z-40">
            <SideBar />
          </div>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/conact" element={<Conact />} />
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
