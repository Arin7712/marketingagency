"use client";

import { AnimatedShinyTextDemo } from "@/components/ui/demos/animated-shiny-text-demo";
import { CoverDemo } from "@/components/ui/demos/cover-demo";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import BoxReveal from "@/components/ui/box-reveal";
import NumberTicker from "@/components/ui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import { WordPullUpDemo } from "@/components/ui/demos/word-pullup-demo";
import { ScrollBasedVelocityDemo } from "@/components/ui/demos/scroll-based-velocity-demo";
import BoxRevealDemo from "@/components/ui/demos/box-reveal-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/ui/demos/animated-beam";
import {IconStarFilled} from '@tabler/icons-react'
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/ui/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import StarRate from '@mui/icons-material/StarRate';
import Gesture from '@mui/icons-material/Gesture';

const services = [
  {
    icon: "/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
    
    <div
      className="overflow-hidden 
 inset-0 
 -z-10 h-full w-full bg-white
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden bg-yellow-200 text-white rounded-[6px] top-5 sticky md:mx-auto z-50 xl:4/5 2xl:w-[68%] flex items-center justify-between py-6 px-4 md:px-8 mx-6 transition-all ease-in-out"
      >
        <Link href={"/"}>
          <Image
            src="/momedia1.jpg"
            alt="logo"
            width={120}
            height={80}
            className=" rounded-sm"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link
              href={"/showcase"}
              className=" text-black duration-500"
            >
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className=" text-black duration-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className=" text-black duration-500"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className=" text-black duration-500"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">

          <Link
            href={"/meeting"}
            className="
        px-6
        py-3
        text-lg
        rounded-[6px]
        border-black 
        border-2 uppercas
        text-black
        bg-white
        transition
        duration-200
        hoevr:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
        dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 text-center xl:w-4/5 2xl:w-[60%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>

          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-yellow-200 
      rounded-[6px]
      border-4 
      border-black 
      dark:border-white 
       bg-yellow-200
       text-black 
       hover:text-black
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#fde68a"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-yellow-200" />
                Design
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#fde68a"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-yellow-200" />
                Development
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#fde68a"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-yellow-200" />
                Marketing
              </p>
            </BoxReveal>

            <BoxReveal boxColor={"#fde68a"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-yellow-200" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            {/*<div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-yellow-200 text-3xl md:text-5xl">
                    <NumberTicker value={1000} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-yellow-200 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>*/}

            <section className="overflow-hidden mt-10 md:w-full">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/momedia1.jpg",
                    name: "Logo",
                  },
                  {
                    logo: "/momedia1.jpg",
                    name: "Logo2",
                  },
                  {
                    logo: "/momedia1.jpg",
                    name: "Logo3",
                  },
                  {
                    logo: "/momedia1.jpg",
                    name: "Logo4",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-[4rem]">
          <h1>
            <WordPullUpDemo/>
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-1/2 mx-auto text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                {services.map((service) => (
                  <div
                  key={service.title}
                  className="flex flex-col justify-between h-full space-y-4 text-center bg-yellow-200 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
                  >
                    <Image 
                    src={service.icon}
                    alt={service.title}
                    width={10000}
                    height={10000}
                    className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                    />

                    <h1 className="text-xl font-medium text-white">{service.title}</h1>
                    <p className="text-black">{service.description}</p>

                  </div>

                ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
                <ScrollBasedVelocityDemo/>
      </section>

      <Element name="process">
        <main className="md:px-0 px-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
                Our{" "}
                <span className="text-blur-500 flex gap-x-1 items-center">
                  {" "}
                  <StarRate style={{ fontSize: 30, color: 'yellow' }} className="mb-8"/>
              <span className="text-yellow-200">Creative</span>
              <Gesture style={{ fontSize: 30, color: 'yellow' }} className="mb-8"/>
                </span>{" "}
                Process
          </h1>

          <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          All of our services are designed to help your business to get noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                    <AnimatedBeamMultipleOutputDemo/>
                </div>

                <div className="w-full md:w-1/2 order-2 md:order-1 md:ml-0">
                  <BoxRevealDemo/>
                </div>
          </div>
        </main>
      </Element>

      
      <Element name="guareentees">
        <ShootingStarsAndStarsBackgroundDemo/>
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
                <LetsMakeThingsHappenSection/>
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/momedia1.jpg"}
              width={10000}
              height={10000}
              className="w-48 rounded-sm"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">519-200-5000</p>
          <p className="text-left  text-xl  text-gray-500">
            admin@birdsoftware.ca
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Bird. All Rights Reserved.
          <Link href="/" className="text-yellow-200">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
