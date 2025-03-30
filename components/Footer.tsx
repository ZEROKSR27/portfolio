import { FaFacebook, FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ibrahimhaidersonics777@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="mb-4 text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Ibrahim Haider
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          <a href="https://www.facebook.com/ZEROKSR27">
            <div className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter">
              <Image src="/git.svg" alt="icons" width={20} height={20} />
            </div>
          </a>
          <a href="https://www.facebook.com/ZEROKSR27">
            <div className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter">
              <Image src="/twit.svg" alt="icons" width={20} height={20} />
            </div>
          </a>
          <a href="https://www.facebook.com/ZEROKSR27">
            <div className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter">
              <Image src="/link.svg" alt="icons" width={20} height={20} />
            </div>
          </a>
          <a href="https://www.facebook.com/ZEROKSR27">
            <div className="saturate-180 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter">
              <FaFacebook className="scale-110" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
