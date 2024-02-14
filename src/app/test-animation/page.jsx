"use client";
import React from "react";
import { motion } from "framer-motion";

const TestAnimation = () => {
  const variants = {
    variant1: {
      x: 400,
      opacity: 0.5,
    },
    variant2: {
      x: -200,
      opactity: 0.5,
    },
  };
  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        variants={variants}
        animate="variant2"
        transition={{ delay: 2, duration: 4 }}
      ></motion.div>
    </div>
  );
};

export default TestAnimation;
