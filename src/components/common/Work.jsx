import React from "react";
import { motion } from "framer-motion";
import Upwork from "../../resources/images/Upwork.png";
import Fiverr from "../../resources/images/fiverr.png";
import Amazon from "../../resources/images/amazon.png";
import Shopify from "../../resources/images/Shopify.png";
import Facebook from "../../resources/images/Facebook.png";

const Work = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-between px-40">
      <div className="flex flex-col items-start justify-center font-urbanist">
        <span className="text-3xl font-bold text-black">Work For All These</span>
        <span className="text-5xl font-bold text-blue-500">Brands & Clients</span>
        <button className="mt-4 px-6 py-2 bg-[#0088c8] text-white rounded-full hover:bg-blue-600 transition duration-300">
          Hire Us
        </button>
      </div>
      <motion.div
        initial={{ rotate: 45 }}
        whileInView={{ rotate: 0 }}
        viewport={{ margin: "-40px" }}
        transition={{ duration: 3.5, type: "spring" }}
        className="relative w-96 h-96 rounded-full bg-white shadow-lg flex justify-center items-center"
      >
        <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex justify-center items-center top-[-4rem] left-[8rem] hover:scale-110 transition-transform duration-300">
          <img src={Upwork} alt="Upwork" className="scale-75" />
        </div>
        <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex justify-center items-center top-[7rem] left-[-4rem] hover:scale-110 transition-transform duration-300">
          <img src={Fiverr} alt="Fiverr" className="scale-75" />
        </div>
        <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex justify-center items-center top-[7rem] left-[8rem] hover:scale-110 transition-transform duration-300">
          <img src={Amazon} alt="Amazon" className="scale-75" />
        </div>
        <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex justify-center items-center top-[7rem] left-[19rem] hover:scale-110 transition-transform duration-300">
          <img src={Shopify} alt="Shopify" className="scale-75" />
        </div>
        <div className="absolute w-28 h-28 rounded-full bg-white shadow-md flex justify-center items-center top-[19rem] left-[8rem] hover:scale-110 transition-transform duration-300">
          <img src={Facebook} alt="Facebook" className="scale-75" />
        </div>
      </motion.div>
    </div>
  );
};

export default Work;
