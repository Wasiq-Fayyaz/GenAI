"use client"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import etherscan from "../Images/etherscan.png";
import Image from "next/image";
import Link from "next/link";



export default function Footer(){
  
    return(
        
        <footer className="flex flex-wrap flex-col backdrop-blur bg-sky-400/10 py-4">
        <div className='flex flex-wrap md:flex-nowrap px-5 pt-5 gap-6 md:gap-0 items-center justify-center md:justify-between'>

      
            <h2 className='text-xl text-slate-200 font-semibold tracking-wide'>0xFreelance</h2>
        

        <div className='flex flex-col w-full md:w-1/2  items-center justify-center gap-2'>
            <div className='flex flex-col items-center justify-center'>
                <small className='text-slate-200 font-semibold tracking-wide text-center'>COPYRIGHT © 0xFreelance 2024. ALL RIGHTS RESERVED.</small>
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

            <div className='flex gap-3 text-slate-200 justify-center md:justify-end w-auto'>
          
            <div className="flex items-center gap-6 md:gap-2">
        <Link href={""} title="Telegram">
          <FaTelegramPlane className="w-8 h-8 text-slate-200" />
        </Link>

        <Link href={""} title="medium">
          <FaMedium className="w-8 h-8 text-slate-200" />
        </Link>

        <Link href={""} title="X">
          <FaXTwitter className="w-8 h-8 text-slate-200" />
        </Link>

        <Link href={""} title="etherscan">
          <Image
            src={etherscan}
            alt="etherscan"
            className="w-8 h-8"
          ></Image>
        </Link>
      </div>
               
            </div>
        </div>

       
















      
       

        </footer>
    )
}