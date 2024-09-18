"use client"
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import etherscan from "../../../Images/etherscan.png";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import useInView from "../../CustomHooks";
import { motion } from "framer-motion";
import { Fade, Slide } from "react-awesome-reveal";

export default function Community() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  return (
    
    <section className="mt-16 md:mt-24">
      <Fade cascade>
      <h2 className="text-4xl font-bold tracking-normal text-gradient text-center md:text-5xl">
        Community
      </h2>
      
    
      <h2 className="text-base text-center md:text-xl lg:text-2xl font-semibold text-sky-400 tracking-wide mt-8">
      <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("#FreelanceSmarter")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("#ElevateYourBussiness")
                    .start();
                }}
              />
              
      </h2>
      </Fade>
        <p className="text-white text-justify lg:text-center text-base md:text-xl mt-5 tracking-normal lg:w-full leading-8 lg:leading-8">
        Join our thriving community today and become part of a groundbreaking ecosystem that is revolutionizing the way you work and achieve success. Embrace the future with our innovative platform, where blockchain ensures secure, transparent transactions and AI matches you with the best opportunities. Sign up now to unlock limitless possibilities and take your freelancing career to the next level.
        </p>
      
      
     
      <div className="flex justify-center gap-6 mt-10">
        <Fade cascade>
        <Link href={""} title="Telegram">
          <FaTelegramPlane className="w-8 h-8 md:w-12 md:h-12 text-slate-200" />
        </Link>

        <Link href={""} title="medium">
          <FaMedium className="w-8 h-8 md:w-12 md:h-12 text-slate-200" />
        </Link>

        <Link href={""} title="X">
          <FaXTwitter className="w-8 h-8 md:w-12 md:h-12 text-slate-200" />
        </Link>

        <Link href={""} title="etherscan">
          <Image
            src={etherscan}
            alt="etherscan"
            className="w-8 h-8 md:w-12 md:h-12"
          ></Image>
        </Link>
        </Fade>
      </div>
      
    </section>
  
  );
}
