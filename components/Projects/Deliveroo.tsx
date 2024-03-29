import Image from "next/image";
import React from "react";
import HoverVideoPlayer from "react-hover-video-player";
import deliveroo from "../../Assets/Deliveroo.png";
import Tools4 from "../../Assets/Tools4.svg";

const Deliveroo = () => {
  return (
    <div className="overflow-hidden pb-12 bg-inherit flex md:flex-row-reverse flex-col">
      <div>
        <HoverVideoPlayer
          videoSrc="https://res.cloudinary.com/upwork-fp/video/upload/c_scale,w_1000,q_auto/v1659711269/profile/portfolio/1396689749490266112/fox6ewdoyztnrhrhuwlm.mov"
          className="md:h-[40rem] md:w-[40rem] md:space-x-2 p-8 transition ease-in duration-150"
          pausedOverlay={
            <Image
              src={deliveroo}
              width="1050"
              height="650"
              objectFit="fill"
              alt="Deliveroo Thumbnail"
              className="rounded-lg"
            />
          }
        />
      </div>
      <div className="md:p-10 md:space-x-10 px-10">
        <h2 className="text-4xl text-center font-bold md:mx-10 md:text-left">
          Deliveroo Clone
        </h2>
        <p className="md:text-xl md:my-4 md:w-auto text-center md:text-left mt-4 text-gray-400">
          This is a clone of Deliveroo, It is a British online food delivery
          company founded by Will Shu and Greg Orlowski in 2013 in London,
          England. It operates in over two hundred locations across the United
          Kingdom, the Netherlands, France, Belgium, Ireland, Italy, Australia,
          Singapore, Hong Kong, the United Arab Emirates and Kuwait.
        </p>

        <div className="h-[6rem] w-[16rem] md:w-[21rem] my-4 md:h-[8rem] items-center cursor-pointer flex justify-start">
          <Image src={Tools4} alt="Tools" />
        </div>
        <div className="flex md:space-x-4 md:justify-start justify-between">
          <a href="https://github.com/AayushMohan/deliveroo-clone">
            <button className=" p-4 rounded-lg bg-slate-900 font-medium transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
              Source Code
            </button>
          </a>

          <a href="https://expo.dev/@aayush_mohan/deliveroo-clone?serviceType=classic&distribution=expo-go">
            <button className="p-4 rounded-lg px-8 bg-slate-300 text-slate-900 transition hover:ease-in  ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-100 duration-300">
              Live URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deliveroo;
