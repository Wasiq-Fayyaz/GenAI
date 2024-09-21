"use client";
import Lottie from "lottie-react";
import React from "react";
import whyAnimation from '../../../Images/whyAnimation2.json'
import { GrTechnology } from "react-icons/gr";
import { SiHiveBlockchain } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { RiCopperCoinFill } from "react-icons/ri";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import Image from "next/image";
import atom from '../../../Images/globe.png'
import animate_1 from '../../../Images/whyAnimation3.json'
import { Fade,Slide } from "react-awesome-reveal";
import { useState } from "react";
import { TransitionPanel } from "../../Effects/transitionPanel";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../Effects/Carousel';
import { RiSparkling2Fill } from "react-icons/ri";
const ITEMS = new Array(3).fill(null).map((_, index) => index + 1);

export default function Discover() {
  const [index, setIndex] = useState(0);



  return (

    <section className="mt-8 lg:mt-24">
      <Fade>
      <h2 className="text-5xl font-bold tracking-tight text-white text-center md:text-5xl lg:text-6xl">
        About Us 
      </h2>
      <div className="flex flex-col items-center mt-5 w-full xl:mt-5 xl:w-full">
            <h3 className="text-xl md:text-2xl lg:text-4xl font-normal text-white tracking-tight md:mt-2 lg:mt-2 text-center">
              Our <span className="logo--gradient font-normal">Vision</span> &
              <span className="logo--gradient font-normal">
                {" "}
                Mission
              </span>{" "}
              
            </h3>
          </div>
      </Fade>
      
        <p className="text-white text-justify lg:text-center text-lg md:text-xl tracking-tight w-full lg:w-full leading-8 md:leading-8 mt-4">
        At GenAI, we believe in the power of innovation and community. Our mission is to empower crypto enthusiasts with the tools they need to succeed in a competitive market. By combining cutting-edge AI technology with user-friendly design, we aim to simplify crypto marketing and make it accessible to everyone.
        </p>
      
      <div>

      <div className="flex justify-start mt-8">








        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
            <div className="flex flex-col justify-center items-center gap-3 rounded-xl p-5 transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 h-40">
              <div className="flex items-center gap-2">
              <RiSparkling2Fill className="text-white text-3xl md:text-xl lg:text-2xl"/>
              <h3 className="logo--gradient text-4xl font-bold md:text-2xl lg:text-4xl">Founders</h3>
              <RiSparkling2Fill className="text-white text-3xl rotate-180 md:text-xl lg:text-2xl"/>
              </div>
              <p className="text-white text-justify xl:text-center lg:text-lg">Visionaries with a deep awareness of both AI and the crypto space.</p>
            </div>

          

            <div className="flex flex-col justify-center items-center gap-3 p-5 transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl cursor-pointer h-40">
              <div className="flex items-center gap-2">
              <RiSparkling2Fill className="text-white text-3xl md:text-xl lg:text-2xl"/>
              <h3 className="logo--gradient text-4xl font-bold md:text-2xl lg:text-4xl">Developers</h3>
              <RiSparkling2Fill className="text-white text-3xl rotate-180 md:text-xl lg:text-2xl"/>
              </div>
              <p className="text-white text-justify xl:text-center lg:text-lg">A skilled team of developers committed to building a robust, secure platform.</p>
            </div>

          

            <div className="flex flex-col justify-center items-center gap-3 p-5 transition ease-in-out delay-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl h-40">
              <div className="flex items-center gap-2">
              <RiSparkling2Fill className="text-white text-3xl md:text-xl lg:text-2xl"/>
              <h3 className="logo--gradient text-4xl font-bold md:text-2xl lg:text-4xl">Managers</h3>
              <RiSparkling2Fill className="text-white text-3xl rotate-180 md:text-xl lg:text-2xl"/>
              </div>
              <p className="text-white text-justify xl:text-center lg:text-lg">Professionals focused on nurturing and growing the GEN AI community.</p>
            </div>
            
        </div>
    </div>

    <div className="flex justify-center mt-8 w-90">
      <fieldset className="flex text-center p-5 border-2 rounded-xl border-green-200 2xl:w-1/2">
        <legend className="logo--gradient text-3xl lg:text-4xl font-bold"> Our Commitment </legend>
        <i className="text-white text-lg xl:text-xl text-center lg:p-5">&quot; We are committed to continuous improvement, transparency, and building a platform that meets the evolving needs of our users. Join us on our journey to revolutionize crypto marketing &quot;</i>
      </fieldset>
  
    </div>
    
      </div>
      
    </section>
  
  );
}
