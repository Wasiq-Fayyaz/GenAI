"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Fade, Slide } from "react-awesome-reveal";

import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { AnimatedNumber } from "../../Effects/animatedNumber";
import { useEffect, useState, useRef } from "react";
import { RiSparkling2Fill } from "react-icons/ri";
import { useInView } from "framer-motion";
import AnimatedBackground from "../../Effects/animatedBackground";
import { Percent, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import "../../CSS/tokenomics.css";
import { LineSegment, VictoryPie } from "victory";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { it } from "node:test";

export default function Tokenomics() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value === 0) {
    setValue(10000000);
  }

  const ITEMS = [
    {
      id: 1,
      title: "Platform Access",
      description:
        "Use GenAI tokens to unlock premium features and advanced customization tools",
    },
    {
      id: 2,
      title: "Rewards",
      description:
        "Earn tokens by actively participating in the GEN AI community and sharing content",
    },
    {
      id: 3,
      title: "Governance",
      description:
        "Token holders can vote on future platform developments and upgrades",
    },
    {
      id: 4,
      title: "Secure & Transparent",
      description:
        "GenAI ensures regular audits and clear communication with our community",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-24 w-full">
      <Fade>
        <h2 className="text-4xl font-bold tracking-normal logo--gradient text-center md:text-5xl">
          Tokenomics
        </h2>
      </Fade>

      <div className="flex flex-col w-full">
        <div
          className="flex flex-col w-full items-center justify-center"
          ref={ref}
        >
          {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        width='16'
        height='16'
        className='mr-3 h-3 w-3 fill-transparent stroke-zinc-800 stroke-[1.3] dark:stroke-zinc-50'
      >
        <path d='M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z'></path>
      </svg> */}

          <AnimatedNumber
            className="inline-flex items-center font-mono text-6xl md:text-8xl mt-24 font-semibold text-zinc-800 dark:text-zinc-50 logo--gradient"
            springOptions={{
              bounce: 0,
              duration: 1000,
            }}
            value={value}
          />
          <div className="flex items-center gap-2 mt-6">
            <RiSparkling2Fill className="text-white text-xl" />
            <p className="text-zinc-200 font-medium text-xl sm:text-2xl">
              10 Million <span className="logo--gradient font-bold">GenAI</span>{" "}
              Tokens
            </p>
            <RiSparkling2Fill className="rotate-180 text-white text-xl" />
          </div>
        </div>

        {/*---------------------Tax Distribution + chart*--------------------- */}

        <div className="flex flex-col 2xl:flex-row items-center">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col 2xl:flex-row justify-center gap-4 p-5">
              {/*Tax Distribution # 1* */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileDrag={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 rounded-xl w-72 md:w-52 h-40 lg:h-48 transition ease-in-out duration-150 hover:bg-neutral-800 p-5 cursor-pointer bg-neutral-900">
                    <h3 className="flex items-center text-8xl md:text-7xl lg:text-8xl font-semibold logo--gradient">
                      2%
                    </h3>
                    <p className="text-white text-lg md:text-xs">
                      Teams & Advisors
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileDrag={{ scale: 0.9 }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 rounded-xl w-72 md:w-52 h-40 lg:h-48 transition ease-in-out duration-150 hover:bg-neutral-800 p-5 cursor-pointer bg-neutral-900">
                    <h3 className="flex items-center gap-2 text-8xl md:text-7xl lg:text-8xl font-semibold logo--gradient">
                      5%
                    </h3>
                    <p className="text-white text-lg md:text-xs">
                      Marketing & Partnerships
                    </p>
                  </div>
                </motion.div>
              </div>

              {/*Tax Distribution # 1* */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 rounded-xl  w-72 md:w-52 h-36 lg:h-48 transition ease-in-out duration-150 hover:bg-neutral-800 p-5 cursor-pointer bg-neutral-900">
                    <h3 className="flex items-center gap-2 text-8xl md:text-7xl lg:text-8xl font-semibold logo--gradient">
                      2%
                    </h3>
                    <p className="text-white text-lg md:text-xs">
                      Development & Operations
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 rounded-xl transition ease-in-out duration-150 hover:bg-neutral-800 p-5 w-72 md:w-52 h-36 lg:h-48 cursor-pointer bg-neutral-900">
                    <h3 className="flex items-center gap-2 text-8xl md:text-7xl lg:text-8xl  font-semibold logo--gradient">
                      1%
                    </h3>
                    <p className="text-white text-lg md:text-xs">
                      Community & Rewards
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/*-----------------------CHART DIV-----------------------* */}
            <div className="transition ease-in-out duration-150 w-72 md:w-4/5 h-64 md:h-80 lg:h-96  cursor-pointer bg-neutral-900 rounded-xl hover:bg-neutral-800 ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <VictoryPie
                  style={{
                    labels: {
                      fontSize: 15,
                      fill: "#FFFFFF",
                    },
                  }}
                  colorScale={["#57CC99", "#80ED99", "#57CC99", "#57CC99"]}
                  padAngle={({ datum }) => datum.y}
                  innerRadius={100}
                  width={700}
                  // labelIndicator
                  labelIndicator={
                    <LineSegment
                      style={{
                        stroke: "#FFFFFF",
                        strokearray: 3,
                        fill: "none",
                      }}
                    />
                  }
                  data={[
                    { x: "Team & Advisors", y: 2 },
                    { x: "Marketing & Partnerships", y: 5 },
                    { x: "Development & Operations", y: 2 },
                    { x: "Community & Rewards", y: 1 },
                  ]}
                />
              </motion.div>
            </div>
          </div>

          <div></div>

          <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, index) => (
              <div key={index} className="flex w-full cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col gap-2 transition ease-in-out duration-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl p-5 w-72 h-36 md:h-44 lg:w-60 xl:w-72 ">
                    <h3 className="flex gap-2 items-center logo--gradient font-bold text-base xl:text-lg lg:text-sm">
                      <RiSparkling2Fill className="text-white" />
                      {item.title}
                    </h3>
                    <p className="text-white text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* <div className='grid grid-cols-1 gap-4 ps-6 lg:ps-10 mt-6 md:grid-cols-4'>
      
        {ITEMS.map((item, index) => (
          <div key={index} className="flex w-full cursor-pointer"> 
            <div className="flex flex-col gap-2 transition ease-in-out duration-150 bg-neutral-900 hover:bg-neutral-800 rounded-xl p-5 w-72 h-36">
              <h3 className="flex gap-2 items-center logo--gradient font-bold text-base lg:text-lg">
                <RiSparkling2Fill  className="text-white"/>
                {item.title}
              </h3>
              <p className="text-white text-sm md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      
    </div> */}
      </div>
    </section>
  );
}
