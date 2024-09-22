"use client";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import etherscan from "../Images/etherscan.png";
import Image from "next/image";
import Link from "next/link";
import logo from "../Images/logo.png";
import {motion} from 'framer-motion'

export default function Footer() {
  return (
    <footer className="flex flex-wrap flex-col backdrop-blur  py-6 bg-neutral-900">
      <div className="flex flex-wrap md:flex-nowrap px-5 pt-5 gap-6 md:gap-0 items-center justify-center md:justify-between">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-12"></Image>
          <h2 className="text-xl text-slate-200 font-semibold logo--gradient tracking-wide">
            GenAI
          </h2>
        </div>

        <div className="flex flex-col w-full md:w-1/2  items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center">
            <small className="text-white font-medium tracking-wide text-center">
              
              Copyright © GenAI 2024. All rights reserved.
                          </small>
            {/* <small className='text-slate-200 font-semibold tracking-wide'>TEMPLATE DESIGNED BY <span className='font-custom text-lg'>Ghost</span></small> */}
          </div>
          {/* <div className="flex items-center justify-center space-x-4 text-sm w-full md:w-1/2  ">
                <div className='text-slate-200 '>Press</div>
                <div className='text-slate-200'>|</div>
                <div className='text-slate-200'>Terms</div>
                <div className='text-slate-200'>|</div>
                <div className='text-slate-200'>Conditions</div>
            </div> */}
        </div>

        <div className="flex gap-3 text-slate-200 justify-center md:justify-end w-auto">
          <div className="flex items-center gap-6 md:gap-4">

            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Link href={""} title="Telegram">
              <FaTelegramPlane className="w-8 h-8 text-slate-200" />
            </Link>
            </motion.div>

            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Link href={""} title="medium">
              <FaMedium className="w-8 h-8 text-slate-200" />
            </Link>
            </motion.div>

            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Link href={""} title="X">
              <FaXTwitter className="w-8 h-8 text-slate-200" />
            </Link>
            </motion.div>

            <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.9}}>
            <Link href={""} title="etherscan">
              <Image
                src={etherscan}
                alt="etherscan"
                className="w-8 h-8"
              ></Image>
            </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
