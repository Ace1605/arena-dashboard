import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="flex water">
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 0.3,
          delay: 0.3,
        }}
        className="text-8xl font-glitch"
      >
        G
      </motion.span>
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 0.7,
        }}
        className="text-8xl text-yellow-100 font-glitch"
      >
        e
      </motion.span>
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 0.9,
        }}
        className="text-8xl font-glitch"
      >
        k
      </motion.span>
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 1.2,
        }}
        className="text-8xl text-red-700 font-glitch"
      >
        i
      </motion.span>
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 1.4,
        }}
        className="text-8xl font-glitch"
      >
        j
      </motion.span>
      <motion.span
        animate={{ y: [-300, 0] }}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: 1.7,
        }}
        className="text-8xl text-primary-main font-glitch"
      >
        o
      </motion.span>
    </div>
  );
}

export default Logo;
