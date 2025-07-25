"use client";
import { useState } from "react";
import CopySVG from "@/public/icons/copy.svg";
import Lottie from "lottie-react";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import world from "../../public/worldMap.png";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "md:grid-row-7 mx-auto grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-5 lg:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["React-Native", "Express", "Typescript"];
  const rightLists = ["NextJS", "Docker", "GSAP"];

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "ibrahimhaidersonics777@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-blue-400/[0.4] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              width={`${700}`}
              height={`${550}`}
              priority
            />
          )}
        </div>
        {spareImg && (
          <div
            className={`absolute -bottom-5 right-0 h-[130px] w-[400px] ${
              id === 5 && "h-[100%] w-[100%]"
            } `}
          >
            {
              <Image
                src={spareImg}
                alt={spareImg}
                fill
                className="h-full w-full object-cover object-center"
              />
            }
          </div>
        )}
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center px-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}

          <div
            className={`z-10 max-w-96 font-sans text-lg font-bold lg:text-3xl`}
          >
            {title}
          </div>

          <div className="z-10 font-sans text-sm font-extralight text-[#C1C2D3] md:max-w-72 md:text-xs lg:text-base">
            {description}
          </div>
          {/* for the github 3d globe */}
          {id === 2 && <Image src={world} alt="world map" fill />}

          {/* this is the Tech stack list div */}
          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-1 lg:gap-6">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 pt-5 md:gap-5">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 md:gap-5">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="rounded-lg bg-[#10132E] px-3 py-2 text-center text-xs opacity-50 lg:px-3 lg:text-base lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="relative mt-5">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Image
                  src="/confetti.gif"
                  alt="confetti"
                  unoptimized
                  height={200}
                  width={400}
                />

                <Lottie
                  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 400 }}
                  rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<Image src={CopySVG} alt="copy" width={16} height={16} />}
                position="left"
                handleClick={handleCopy}
                other="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
