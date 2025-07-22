"use client";
import locationArrow from "@/public/icons/locationArrow.svg";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">Recent projects</span>
      </h1>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
        {projects.map((item) => (
          <div
            className="my-40 flex h-32 w-[80vw] items-center justify-center sm:my-0 sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer
              direction={item.dir as "left" | "right"}
              title={item.title}
              href={item.link}
            >
              <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px]">
                <div
                  className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" fill />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  className="absolute bottom-0 z-10"
                  fill
                />
              </div>

              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {item.title}
              </h1>

              <p
                className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" fill className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex pr-2 text-sm text-purple md:text-xs lg:text-xl">
                    Check Live Site
                  </p>

                  <Image
                    src={locationArrow}
                    alt="location-arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
