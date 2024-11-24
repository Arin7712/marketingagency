"use client"

import ShowcaseNavbar from "@/components/ui/showcase-navbar";
import React from "react";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import Calendly from "./calendy";

const checkItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  

const page = () => {
  return (
    <div
      className="overflow-hidden 
 inset-0 
 -z-10 h-full w-full bg-yellow-100
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
   >
   <ShowcaseNavbar />
        <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] mx-auto justify-between md:mt-14 md:flex">
            <div className="md:w-2/5">
                <h1>Let&apos;s Meet</h1>
                <p className="text-lg text-black py-4">
                    We are always excited to meet new people and discuss new projects.
                    Please feel free to book a meeting with us.
                </p>
                {[
                {
                  title: "Data-driven ADS",
                  description:
                    "Every move is backed by data to make sure we hit the right audience that maximizes efficiency.",
                },

                {
                  title: "Free Consultation",
                  description:
                    "Get expert advice on how to improve your business and increase your online presence.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Get technical support for your ads campaign.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 1.8 }}
                  className="flex gap-x-4 py-4"
                >
                  <PiCheckCircle className=" rounded-md text-black text-2xl flex-shrink-0" />
                  <ul>
                    <h3 className="text-lg font-bold text-black">
                      {item.title}
                    </h3>
                    <div className="text-black">{item.description}</div>
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="md:w-1/2">
                <Calendly/>
            </div>

        </div>
    </div>
  );
};

export default page;
