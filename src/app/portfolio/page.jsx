"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Homeato",
    desc: "Created a fully functioning ,responsive full stack food delievery app with next.js 14 ,tailwind css ,MongoDB,S3 bucket and stripe. Created an admin panel to manage website",
    img: "/Screenshot (393).png",
    link: "https://homeato.vercel.app",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "YOOM",
    desc: "Created a Fully functioning zoom clone using typescript ,stream api,next.js ,clerk,Shadcn Ui and tailwind css,it supports all features such as video calling,personal rooms ,recordings with amazing speed and incredible experience,ready to use saas software ",
    img: "/Screenshot (435).png",
    link: "https://zoom-clone-chi-tawny.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Iphone 15 pro clone ",
    desc: "Created a beautiful apple website of Iphone 15 pro ,with gsap ,three.js and react.js and tracked performance of website with sentry. ",
    img: "/Screenshot (433).png",
    link: "https://iphone-15-pro-phi.vercel.app/",
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "Movix",
    desc: "Created An Ott Platform with react js and Redux,Implemented serach functionality,lazy loading ui and inbuilt trailer features",
    img: "/Screenshot (395).png",
    link: "https://movix-eqtg.vercel.app/",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "What's up",
    desc: "Created a fully functioning realtime chat app with mern stack and socket io ,tailwind css and daisy ui ",
    img: "/Screenshot (478).png",
    link: "https://mern-chat-app-er1v.onrender.com",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Youtube one line video description generator",
    desc: "Created a cool python project which fetch all comments of a video and generates a one line description of the video this project uses bart and bert models to generate the description ,its trains model live on sample data and then tells us if the video is good or bad ",
    img: "/Screenshot (495).png",
    link: "https://github.com/soodsahb/youtube-one-line-video-description",
  },
  {
    id: 7,
    color: "from-red-300 to-blue-300",
    title: "Linkedin who viewed your profile",
    desc: "created linkedin who viewed your profile feature with mern stack ",
    img: "/Screenshot (507).png",
    link: "https://github.com/soodsahb/linkedin-who-viewed-your-profile-feature",
  },
  {
    id: 8,
    color: "from-red-300 to-blue-300",
    title: "Weather App",
    desc: "Created a basic weather and forecast app with react js using react select async paginate and react accessible accordian",
    img: "/Screenshot (397).png",
    link: "https://weather-app-virid-five-10.vercel.app/",
  },
  {
    id: 9,
    color: "from-red-300 to-blue-300",
    title: "Ip reporting system",
    desc: "Created a basic ip reporting system using express js when user tries to access non existent route his ip is reported to another server",
    img: "/Screenshot (508).png",
    link: "https://github.com/soodsahb/ip-reporting-system/blob/main/index.js",
  },
  {
    id: 10,
    color: "from-blue-300 to-violet-300",
    title: "Object Detection App",
    desc: "Created a basic object detection app with coco ssd ai model and react js ",
    img: "/Screenshot (432).png",
    link: "https://object-detection-snowy.vercel.app/",
  },
 
  
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl lg:mt-8 xl:text-5xl xl:">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-96 lg:h-64 xl:w-96 xl:h-64">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end ">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded ">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-16">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
