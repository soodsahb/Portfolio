"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src={"/hero.png"}
            alt="hero-image"
            fill
            className={`object-contain z-2`}
          ></Image>
        </div>
        <div className="h-1/2 flex flex-col gap-8 sm:items-center md:items-center lg:items-start justify-center lg:h-full lg:w-1/2">
          <h1 className="text-4xl font-bold md:text-4xl md:max-w-md sm:max-w-md mt-1 lg:w-full lg:text-left lg:pl-[-24px] ">
            Hi! I am Pranav and I am a frontEnd developer.
          </h1>
          <p>
            Welcome to my portfolio ,feel free to look at my projects and you
            can contact me if you want.
          </p>
          {/* {buttons} */}
          <div className="flex gap-4 w-full md:justify-center sm:justify-center lg:justify-start">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
              href={"/portfolio"}
            >
              View My Work
            </Link>
            <Link
              className="p-4 rounded-lg ring-1 ring-black"
              href={"/contact"}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
