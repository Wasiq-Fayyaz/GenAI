"use client";
import * as React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { SiBlockchaindotcom } from "react-icons/si";
import { AiOutlineVerified } from "react-icons/ai";
import { HiMiniCpuChip } from "react-icons/hi2";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { BsSafeFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";
import backgroundFeature from "../../../Images/backgroundFeature.jpeg";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";
import { RiSparkling2Fill } from "react-icons/ri";

export default function Features() {
  const ITEMS = [
    {
      id: 1,
      title: "AI-Driven Shill Post",
      description:
        "Generate high-quality, market-ready posts instantly, tailored to your project needs.",
    },
    {
      id: 2,
      title: "Editable Designs",
      description:
        "Personalize your posts with flexible design options, including layouts, fonts, colors, and images.",
    },
    {
      id: 3,
      title: "Real-Time Content Creation",
      description:
        "Stay ahead of the curve with instant post generation, allowing you to capitalize on market trends without delay.",
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      description:
        "Whether you are a crypto novice or an experienced marketer, GEenAI intuitive interface ensures you can create compelling content with ease.",
    },
    {
      id: 5,
      title: "Auto-Shilling",
      description:
        "Automatically share your shill posts with targeted groups, ensuring your message reaches the right audien ce at the right time with minimal effort.",
    },
    // {
    //   id: 6,
    //   title: 'Swipe to Delete',
    //   description: 'Delete items with swipe gestures.',
    // },
  ];

  return (
    <section className="flex flex-col items-center mt-12 md:mt-16">
      <Fade>
        <h2 className="text-5xl font-bold tracking-normal text-center md:text-5xl logo--gradient">
          GenAI Utility
        </h2>
        <div className="mt-8">
          <h3 className="text-lg md:text-2xl lg:text-3xl font-normal text-white tracking-tight md:mt-2 lg:mt-2 text-center">
            <span className="logo--gradient">Empowering</span> Your{" "}
            <span className="logo--gradient ">Crypto</span> Journey
          </h3>
        </div>
      </Fade>
      <p className="text-white text-justify lg:text-center text-lg md:text-xl mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        GenAI is not just another marketing tool. It is a game-changer for the
        crypto community. Here's what makes GenAI indispensable:
      </p>

      <div className="grid gap-6 grid-cols-1 mt-10 md:grid-cols-3">
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <Slide cascade>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
                <div className="flex select-none gap-2 flex-col space-y-1 p-4 rounded-xl transition ease-in-out duration-150 bg-neutral-900 hover:bg-neutral-800 w-90 md:h-64 lg:h-48 cursor-pointer">
                  <h3 className="flex items-center gap-2 md:text-base lg:text-base xl:text-2xl font-medium logo--gradient dark:text-zinc-50">
                    <RiSparkling2Fill />
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 md:text-base text-white">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </Slide>
          </div>
        ))}
      </div>
    </section>
  );
}
