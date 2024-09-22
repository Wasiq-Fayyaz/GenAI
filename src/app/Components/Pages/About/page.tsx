"use client";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { SiHiveBlockchain } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { SiDogecoin } from "react-icons/si";
import Lottie, { LottiePlayer } from "lottie-react";
import aboutAnimate from "../../../Images/aboutAnimate.json";
import aboutAnimation from "../../../Images/aboutAnimation.json";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import useInView from "../../CustomHooks";
import Image from "next/image";
import caBG from "../../../Images/ca_bg.png";
import globe from "../../../Images/globe.png";
import { useViewportScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { Fade, Slide, JackInTheBox } from "react-awesome-reveal";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../CSS/common.css";
import { RiSparkling2Fill } from "react-icons/ri";
import { TextEffect } from "../../Effects/textEffect";
import { InView } from "../../Effects/inView";
import '../../../Components/CSS/about.css'
import { InfiniteSlider } from "../../Effects/infiniteSlider";
import apple from '../../../Images/apple.jpeg'
import google from '../../../Images/google.png'
import nvidia from '../../../Images/nvidia.png'
import amazon from '../../../Images/amazon.jpeg'
import spotfiy from '../../../Images/spotify.png'
import open_ai from '../../../Images/open_ai.png'
import meta from '../../../Images/meta.png'
import microsoft from '../../../Images/microsoft.png'
import adobe from '../../../Images/adobe.png'

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  const aboutOptions = {
    animationData: aboutAnimation,
    loop: true,
  };

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
    <section className="flex flex-col items-center justify-center mt-12">
      <div className="flex flex-col items-center mt-6 md:mt-10">
        <Fade cascade>
          <div className="flex justify-center items-center gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-white text-center md:text-5xl lg:text-6xl">
              Greetings from <span className="logo--gradient">GenAI</span>
            </h2>

          </div>
          <div className="flex flex-col items-center mt-5 w-full xl:mt-7 xl:w-full">
            <h3 className="flex items-center gap-2 lg:gap-3 text-xl md:text-3xl lg:text-4xl font-normal text-white tracking-tight md:mt-2 lg:mt-2 text-center">
            <RiSparkling2Fill className="text-white text-lg md:text-3xl lg:text-4xl" />
              The <span className="logo--gradient font-normal">Future</span> of
              <span className="logo--gradient font-normal text-base md:text-3xl lg:text-4xl">
                {" "}
                Crypto Marketing
                
              </span>{" "}
              <RiSparkling2Fill className="text-white text-2xl lg:text-4xl rotate-180" />
              
            </h3>
          </div>
        </Fade>
        <p className="text-gray-200 text-justify lg:text-center text-base md:text-xl tracking-tight w-full lg:w-full leading-8  md:leading-8 mt-4 lg:mt-6">
          In the ever-evolving world of cryptocurrency, making your project
          stand out is more important than ever. GenAI is your ultimate tool,
          designed to revolutionize how you promote and market your crypto
          assets. Our AI-powered platform helps you create professional,
          eye-catching posts and share your shill posts with targeted groups,
          ensuring your message reaches the right audience at the right time
          with minimal effort
        </p>
        <div className="flex justify-center mt-10">
          <Slide>
          <span className="text-white text-3xl">
            <motion.div
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
            <button className="flex justify-center items-center gap-5 button-54 font-normal tracking-tight ">
              <RiSparkling2Fill/>
              <span>
              Join the Revolution
              </span>
              <RiSparkling2Fill className="rotate-180"/>
            </button>
            </motion.div>
          </span>
          </Slide>
        </div>
        <div className="slider">
        <InfiniteSlider gap={24} reverse className="mt-12" durationOnHover={75}>
      <Image
        src={apple}
        alt='Apple Music logo'
        className='h-[60px] w-auto rounded-2xl'
      />
      <Image
        src={google}
        alt='Chrome logo'
        className='h-[60px] w-auto rounded-2xl'
      />
      <Image
        src={nvidia}
        alt='Nvidia logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={amazon}
        alt='amazon logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={spotfiy}
        alt='spotfiy logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={open_ai}
        alt='openai logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={microsoft}
        alt='microsoft logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={meta}
        alt='meta logo'
        className='h-[60px] w-auto rounded-2xl'
      />

<Image
        src={adobe}
        alt='adobe logo'
        className='h-[60px] w-auto rounded-2xl'
      />
      
    </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}
