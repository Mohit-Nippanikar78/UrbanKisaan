import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { GlowButton } from "./GlowButton";
import HeroPng from "../assets/hero.png";
export function Hero() {
  return (
    <BackgroundLines className="flex items-start justify-center  flex-col px-4 -mt-12">
      <div className="flex justify-around w-full">
        <div className="w-max-md">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Track Your Crops, <br /> Grow Smarter,<br /> Earn more
          </h2>
          <p className="max-w-xl text-sm md:text-lg text-neutral-700 dark:text-neutral-400 ">
          Get help from experts to understand soil health, monitor your crops, and improve your farm with ease.
          </p>
          <GlowButton />
        </div>
        <div className="m-0">
          <img className="w-96" src={HeroPng} alt="Here" />
        </div>
      </div>
    </BackgroundLines>
  );
}
