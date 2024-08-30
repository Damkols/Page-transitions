import React from "react";
import { motion } from "framer-motion";

const Stairs = ({ children }) => {
  const anim = (variants, custom) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  };

  const expand = {
    initial: {
      top: 0,
    },
    enter: (i) => ({
      top: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
      transitionEnd: {
        height: 0,
        // top: 0,
      },
    }),

    exit: (i) => ({
      height: "100%",
      transition: {
        duration: 0.4,
        delay: 0.05 * i,
      },
    }),
  };

  const nbOfColums = 5;

  return (
    <div className="page stairs">
      <div className="transition-container">
        {[...Array(nbOfColums)].map((_, i) => {
          return <motion.div {...anim(expand, nbOfColums - i)} key={i} />;
        })}
      </div>
      {children}
    </div>
  );
};

export default Stairs;
