import React from "react";
import "../styles/Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader">
      <motion.svg
        className="loader-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <title>Abdulmalik Loader</title>
        <g>
          <motion.path
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="hexagon"
          />

          <motion.path
            d="M 50, 25
               L 25, 75
               M 75, 75
               L 50, 25
               M 33, 60
               L 67, 60"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: 0.5, 
            }}
            className="letter"
          />
        </g>
      </motion.svg>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="loader-text"
      >
        Abdulmalik Gayratov
      </motion.p>
    </div>
  );
};

export default Loader;
