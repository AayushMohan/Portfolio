import Image from "next/image";
import React, { useRef } from "react";
import Programmer from "../Assets/Programmer.jpg";
import Wave from "../Assets/wave.svg";
import space from "../Assets/space.gif";
const Hero = () => {
  return (
    <div className="bg-inherit" id="hero">
      <div className="flex">
        <div className="flex flex-col justify-center text-left p-10 static items-start md:mx-10 my-11 md:basis-1/2 transition-all translate-y-5 duration-150">
          <h1 className="md:text-6xl text-3xl font-semibold md:leading-[5rem] leading-relaxed ">
            Hey There, I'm <br /> Aayush Mohan
          </h1>
          <p className="py-4 md:py-14 leading-normal tracking-wide text-gray-300">
            I'm a Frontend Web Developer with a passion for outstanding design
            and technology. I'm extremely enthusiastic about design and carrying
            it through to completion. I'm a big fan of science and technology,
            so I strive to stay on top of things so that our consumers get the
            greatest experience possible.
          </p>
          <button
            className="bg-slate-900 p-4 my-4 rounded-lg transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-900 duration-300"
            onClick={() =>
              (window.location.href = "mailto:aayushmohan1702@gmail.com")
            }
          >
            Contact me
          </button>
        </div>
        <div className="md:items-center md:flex md:mx-6 hidden md:basis-1/2 relative md:bottom-10 :transition -translate-x-1 ">
          <Image
            src={Programmer}
            alt="Programmer"
            className="rounded-lg"
            width="652.23"
            height="380.73"
          />
        </div>
        <div className="md:hidden absolute">
          <Image
            src={space}
            className="opacity-30 mix-blend-lighten bg-inherit color-primary"
            alt="GIF"
            width="500"
            height="500"
          />
        </div>
      </div>
      <Image
        src={Wave}
        className="bg-primary"
        alt="Wave"
        width="1450"
        height="400"
      />
    </div>
  );
};

export default Hero;
