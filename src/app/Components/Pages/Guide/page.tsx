"use client";
import Image from "next/image";
import guideRobot from "../../../Images/guideRobot.json";
import Lottie from "lottie-react";
import Gallery from "../Dapp/page";
import { Button } from "@mui/material";
import { FaTelegramPlane } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiSparkling2Fill } from "react-icons/ri";
import { Disc } from "lucide-react";
import '../../CSS/guide.css'

export default function Guide() {
  const notify = () =>
    toast.info("Coming Soon!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  return (
    <section className="flex flex-col items-center mt-24 w-full">
      <Fade>
        <h2 className="text-4xl font-bold tracking-normal logo--gradient text-center md:text-5xl bg-white">
          RoadMap
        </h2>
      </Fade>

      <p className="text-white text-justify lg:text-justify text-base md:text-lg mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        GenAI has embarked on amazing journey.We have a long way to go
      </p>

      {/**RoadMap Div */}
      <div className="flex justify-center gap-10 mt-16">
        {/**Phases Div */}
        <div className="flex flex-col">
          <Fade cascade>
          <div className="mt-8 border-l-2 border-green-200">
            <h3 className="text-white text-sm tracking-widest ms-2">Phase - I</h3>
            <p className="logo--gradient text-4xl font-bold tracking-tight ms-2">
              Concept & Development
            </p>
          </div>

          <div className="mt-32 border-l-2 border-green-200">
            <h3 className="text-white text-sm tracking-widest ms-2">Phase - II</h3>
            <p className="logo--gradient text-4xl font-bold tracking-tight ms-2">
              Launch & Expansion
            </p>
          </div>

          <div className="mt-24 border-l-2 border-green-200">
            <h3 className="text-white text-sm tracking-widest ms-2">Phase - III</h3>
            <p className="logo--gradient text-4xl font-bold tracking-tight ms-2">
              Feature Enhancement
            </p>
          </div>

          <div className="mt-32 border-l-2 border-green-200">
            <h3 className="text-white text-sm tracking-widest ms-2">Phase - IV</h3>
            <p className="logo--gradient text-4xl font-bold tracking-tight ms-2">
              Community & Growth
            </p>
          </div>
          </Fade>

        </div>

        {/**Seperator */}
        <div className="w-2 seperator rounded-full"></div>

        {/**Phases Content */}
        <div className="flex flex-col gap-10 ms-10">
          <Fade cascade>
          {/**Phases Content 1 */}
          <div className="transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer">
            <ol className="text-white p-5">
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-gradient-to-r from-indigo-500" />
                Market research and concept validation
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                AI engine development and integration
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Initial platform design and user interface creation
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Beta testing with early adopters
              </li>
            </ol>
          </div>


{/**Phases Content 2 */}
          <div className="transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer ">
            <ol className="text-white p-5">
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Official GenAI platform launch
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Marketing campaign kickoff to build community awareness
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Introduction of advanced customization features
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Partnership announcements with leading crypto projects
              </li>
            </ol>
          </div>


          {/**Phases Content 3 */}
          <div className="transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer">
            <ol className="text-white p-5">
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Integration of multilingual support for global users
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                AI enhancements for even more precise content generation
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Expansion of design templates and customization options
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Launch of mobile app for on-the-go content creation
              </li>
            </ol>
          </div>


          {/**Phases Content 4 */}
          <div className="transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer">
            <ol className="text-white p-5">
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Introduction of community-driven features
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Launch of GenAI rewards program for active users
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Expansion into new markets and partnerships
              </li>
              <li className="flex gap-2 items-center">
                <RiSparkling2Fill className="text-white" />
                Continuous platform improvements based on user feedback
              </li>
            </ol>
          </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
