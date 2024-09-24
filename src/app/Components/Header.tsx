"use client";
import React from "react";
import { useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from "@/components/ui/button";
import About from "./Pages/About/page";
import Discover from "./Pages/Why/page";
import Guide from "./Pages/Guide/page";
import Community from "./Pages/Community/page";
import Tokenomics from "./Pages/Tokenomics/page";
import Features from "./Pages/Features/page";
import Dapp from "./Pages/Dapp/page";
import useInView from "./CustomHooks";
import { motion } from "framer-motion";
import { RiSparkling2Fill } from "react-icons/ri";

import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";
import CA from "./Pages/CA/page";

import "../Components/CSS/header.css";
import logo from "../Images/logo.png";

export default function Header() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  let [isMenuOpen, setisMenuOpen] = useState(false);
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

  function ToggleNav() {
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <header className="w-full flex items-center justify-center sm:flex items-center lg:flex flex-col justify-between items-center ">
      <div className="header--img "></div>
      <div className="p-4 lg:p-6 flex justify-center items-center w-full z-50">
        {/* <div className="flex items-center gap-2">
          <Image src={logo} width={60} height={60} alt="genAI"></Image>
          <h2 className="text-3xl xl:block text-white font-semibold tracking-normal logo--gradient">
            GenAI
          </h2>
        </div> */}

        {/** Mobile Menu */}
        <ul
          className={`${isMenuOpen ? "mobile--header--categories" : "hidden"}`}
        >
          <li>
            <AnchorLink href="#about">
              <p
                className="leading-7 text-base font-regular tracking-wide"
                onClick={ToggleNav}
              >
                Meet GenAI
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#discover">
              <p
                className="leading-7 text-base font-regular tracking-wide"
                onClick={ToggleNav}
              >
                About us
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#features">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Utility
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#tokenomics">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Tokenomics
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#guide">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Roadmap
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#community">
              <p
                className="leading-7 text-base font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Community
              </p>
            </AnchorLink>
          </li>
          {/*       
          <li>
            <AnchorLink href="">
              <p className="leading-7 text-base font-regular tracking-wider text-white">
                Buy Now
              </p>
            </AnchorLink>
          </li> */}
        </ul>

        {/** Desktop Menu */}
        <div
          className="flex justify-end w-full  lg:hidden "
          onClick={ToggleNav}
        >
          {isMenuOpen ? (
            <CloseOutlinedIcon className="fontSize: 60px text-white" />
          ) : (
            <MenuOutlinedIcon className="fontSize: 60px text-white" />
          )}
        </div>

        <ul className="hidden lg:flex gap-5 text-white bg-neutral-900 rounded-sm p-3">
          <li>
            <AnchorLink href="#about">
              <p className="text-slade-800 leading-7 text-lg font-nomral tracking-wide">
                Meet GenAI
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#discover">
              <p className="leading-7 text-lg font-normal tracking-wide">
                About us
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#features">
              <p className="leading-7 text-lg font-normal tracking-wide">
                Utility
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#tokenomics">
              <p className="leading-7 text-lg font-normal tracking-wide">
                Tokenomics
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#guide">
              <p className="leading-7 text-lg font-normal tracking-wide">
                Roadmap
              </p>
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href="#community">
              <p
                className="leading-7 text-lg font-regular tracking-wider"
                onClick={ToggleNav}
              >
                Community
              </p>
            </AnchorLink>
          </li>
        </ul>

        {/* <div className="hidden lg:flex">
          <Button
            className="hidden md:block backdrop-blur bg-sky-400/50 hover:bg-sky-600 transition duration-500 ease-in-out text-white"
            onClick={notify}
          >
            
            Buy Now
          </Button>
        </div> */}
      </div>

      <section
        id="home"
        className="relative flex flex-col justify-center p-2 lg:p-7 w-full mt-12"
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <Fade cascade className="flex justify-center w-full">
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="flex items-center justify-center">
                  <Image src={logo} alt="404" className="w-1/5 xl:w-1/5"></Image>
                  <span className="flex logo--gradient font-bold tracking-normal text-center bg-white home--logo text-6xl sm:text-6xl md:text-8xl lg:text-8xl 2xl:text-9xl">
                    {" "}
                    GenAI
                  </span>
                </div>
              </motion.div>
              <div className="flex items-center gap-3 lg:gap-3">
                <RiSparkling2Fill className="text-white text-xl md:text-3xl lg:text-4xl" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                  <p className="text-white text-md sm:text-xl xl:text-2xl font-base tracking-normal">
                    The Future of Crypto Marketing
                  </p>
                  </motion.div>
                <RiSparkling2Fill className="text-white text-xl md:text-3xl rotate-180" />
              </div>
            </div>

            <div className="flex gap-5 mt-3">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button className="home-button ">Join Now</button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <button className="home-button">Buy Now</button>
              </motion.div>
            </div>

            {/* <div className="flex justify-center">
              <p className="text-white text-justify lg:text-center text-base md:text-xl tracking-normal w-full lg:w-10/12 leading-7 md:leading-8 lg:leading-8">
                Unlock your potential with blockchain-powered freelance
                marketplaces! Seamlessly connect with top clients, ensure secure
                transactions, and maximize your earnings. Experience the future
                of freelancing where blockchain technology meets opportunity,
                transforming the way you work and succeed.
              </p>
            </div> */}
          </Fade>
        </div>
      </section>

      {/* <section className="w-full">
        <CA />
      </section> */}

      <section id="about" className="p-5 w-full">
        <About />
      </section>

      <section id="discover" className="p-5 w-full">
        <Discover />
      </section>

      <section id="features" className="p-5 w-full">
        <Features />
      </section>

      <section id="tokenomics" className="p-5 w-full">
        <Tokenomics />
      </section>

      <section id="guide" className="p-5 w-full">
        <Guide />
      </section>

      {/* <section id="dapp" className="p-5">
        <Dapp />
      </section> */}

      <section id="community" className="p-5">
        <Community />
      </section>
    </header>
  );
}
