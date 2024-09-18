"use client";
import React, { useRef } from "react";
import { useSwiper } from "swiper/react";
import SwiperCore from "swiper";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import { EffectFade } from "swiper/modules";
import { EffectCards } from "swiper/modules";
import { EffectCube } from "swiper/modules";
import { EffectCoverflow } from "swiper/modules";
import { EffectFlip } from "swiper/modules";
import { EffectCreative } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-coverflow";
import { Button } from "@/components/ui/button";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import useInView from "../../CustomHooks";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ui_1 from "../../../Images/ui_1.jpeg";
import ui_2 from "../../../Images/ui_2.jpeg";
import ui_3 from "../../../Images/ui_3.jpeg";
import ui_4 from "../../../Images/ui_4.jpeg";
import { Fade, Slide, Flip, Rotate } from "react-awesome-reveal";
import Slider from "react-slick";
import Swiper from "react-id-swiper";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Gallery() {
  const params = {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
  };

  const notify = () => toast.info('Coming Soon!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });;

  return (
    <section className="mt-16 md:mt-24">
      <Fade cascade>
        <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
          Dapp
        </h2>
      </Fade>

      <p className="text-white text-justify lg:text-center text-base md:text-xl mt-5 tracking-normal lg:w-full leading-8">
        Explore a cutting-edge decentralized application (DApp) for the
        Freelance Marketplace, seamlessly integrating AI and blockchain
        technology. This innovative platform offers a secure and transparent
        environment for freelancers and clients, utilizing smart contracts to
        automate payment and project management. Leverage advanced AI algorithms
        to match freelancers with suitable projects based on skills, experience,
        and preferences, ensuring optimal collaboration and efficiency
      </p>

      <div className="relative flex justify-center items-center mt-10">
        <Slide className="w-1/3">
          <div className="opacity-70 shadow-inner">
            <Image src={ui_1} alt="404" className="rounded-l-lg" />
          </div>
        </Slide>
        <Rotate className="w-2/5 ">
          <div className="z-10 shadow-2xl opacity-100">
            {" "}
            {/* Added margin to space it correctly */}
            <Image src={ui_2} alt="404" className="rounded-lg" />
          </div>
        </Rotate>
        <Slide className="w-1/3">
          <div className="opacity-70">
            <Image src={ui_3} alt="404" className="rounded-r-lg" />
          </div>
        </Slide>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 xl:mt-14">
        <div className="flex flex-col lg:flex-row items-center justify-center mt-16 xl:mt-14 gap-8  w-full">
          <button className="glowing-btn md:w-3/5 w-full lg:2/5 xl:w-1/3" onClick={notify}>
            <span className="glowing-txt text-lg">
              TO <span className="faulty-letter">DAPP</span>
            </span>
          </button>

          <button className="glowing-btn md:w-3/5 w-full lg:2/5 xl:w-1/3" onClick={notify}>
            <span className="glowing-txt text-lg">
              TO <span className="faulty-letter">UNISWAP</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
