"use client";
import Image from "next/image";
import Header from "./Header";
import Credit from "./Credit";
import { useEffect, useState } from "react";
import { run } from "node:test";

const Hero = () => {
  const words: string[] = ["Bussiness", "Agency", "Brand", "Start-Up"];
  const [currWord, setCurrWord] = useState<string>("");
  useEffect(() => {
    let wordIndx = 0;
    let charIndx = 0;
    let skip = 0;
    function runAnimation() {
      if (skip) {
        skip--;
        return;
      }
      let temp = words[wordIndx].slice(0, charIndx + 1);
      charIndx++;
      if (charIndx >= words[wordIndx].length) {
        wordIndx++;
        charIndx = 0;
        skip = 4;
      }
      if (wordIndx >= words.length) {
        wordIndx = charIndx = 0;
      }
      setCurrWord(temp);
    }
    setInterval(runAnimation, 300);
  }, []);
  return (
    <main className=" relative ">
      {/* Hero Section */}
      <div className="max-container  flex flex-col items-center justify-center px-[1.6rem] bg-[#EBEFFA] ">
        {/* Text */}
        <section className="flex flex-col items-start sm:items-center justify-center relative z-10">
          <h1 className="text-[4.2rem] sm:text-[5.6rem] max-w-[57rem] leading-[5.2rem] sm:leading-[7.2rem] mt-[4.8rem] sm:mt-[7.5rem] font-medium  sm:text-center  text-[#0D2052]">
            Weapons to grow your {currWord}
          </h1>
          <p className="text-[1.6rem] text-[#666666] mt-[2rem]  mb-[3.4rem] sm:text-center flex flex-col">
            <span className=" max-w-[40rem]">
              {" "}
              Turbocharge your business growth.
            </span>
            <span className=" max-w-[50rem]">
              Our products help ignite sales and entrepreneurship.
            </span>
          </p>
          <button className="bg-gradient-to-r w-full from-[#52A8FF] to-[#0084FF] text-white font-medium text-[2rem] max-w-full  sm:max-w-[22.9rem] px-[5.2rem] py-[1.6rem] rounded-[1.2rem]">
            Start for free
          </button>
          <div className="relative  mt-[1.7rem] hidden lg:block">
            <Credit />
          </div>
        </section>

        {/* Images */}
        <div
          className=" w-full max-w-[106rem] mx-auto grid  mt-[8.6rem] md:-mt-12  grid-flow-row-dense sm:grid-cols-2  md:grid-cols-4
         sm:gap-[1.2rem] md:items-end"
        >
          <div className="relative  h-[30rem]  max-sm:hidden   w-full ">
            <Image src={`/hero1.svg`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[30rem]    sm:h-[30rem]   sm:hidden w-full ">
            <Image src={`/hero1mobile.svg`} alt="hero image" layout="fill" />
          </div>
          <div className="relative  h-[20.8rem] max-sm:hidden w-full">
            <Image src={`/hero2.svg`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[20.8rem]  sm:h-[30rem]   sm:hidden w-full ">
            <Image src={`/hero2mobile.png`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[20.8rem] max-sm:hidden w-full">
            <Image src={`/hero3.svg`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[20.8rem]  sm:h-[30rem]   sm:hidden w-full ">
            <Image src={`/hero3mobile.png`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[30rem] max-sm:hidden w-full">
            <Image src={`/hero4.png`} alt="hero image" layout="fill" />
          </div>
          <div className="relative h-[30rem]  sm:h-[30rem]   sm:hidden w-full ">
            <Image src={`/hero4mobile.png`} alt="hero image" layout="fill" />
          </div>
        </div>

        {/* Company Names */}

        <div>
          <h1 className="text-[#666666] text-[1.6rem] text-center md:mt-[6.5rem] md:mb-[2.8rem]   mt-[5rem] mb-[2rem]">
            Modern companies are using{" "}
            <span className="font-semibold">BrandNav</span>
          </h1>

          <div className="">
            <div className="relative w-[70rem] h-[3.4rem] hidden md:block">
              <Image src={`/company.png`} alt="hero image" layout="fill" />
            </div>

            <div className="relative w-[32rem] h-[13.6rem]  md:hidden">
              <Image
                src={`/company_mobile.png`}
                alt="hero image"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* background image  desktop*/}

      <section className="absolute bg-blac w-full h-screen -top-[100px] left-0 overflow-hidden">
        <div className="absolute bg-red-60 hidden sm:block  left-[110px] -top-[60px] w-[1200px] h-[765px]">
          <Image
            src="/herobg1.svg"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>
        <div className="absolute bg-red-60 hidden sm:block left-[370px] -top-[60px] w-[1200px] h-[765px]">
          <Image
            src="/herobg2.svg"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>
        <div className="absolute bg-red-60  hidden sm:block left-[470px]  -top-[250px] w-[1200px] h-[765px]">
          <Image
            src="/herobg2.svg"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>
      </section>

      {/* background image mobile */}
      <section className="absolute bg-blac w-full h-screen top-0 left-0 overflow-hidden">
        <div className="absolute   sm:hidden  -left-[160px] -top-[50px] w-[600px] h-[400px]">
          <Image
            src="/herobgm1.svg"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>

        <div className="absolute bg-red-30 sm:hidden  left-[50px] -top-[100px] w-[600px] h-[400px]">
          <Image
            src="/herobgm1.svg"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>

        <div className="absolute bg-red-60  hidden sm:block left-[470px]  -top-[250px] w-[1200px] h-[765px]">
          <Image
            src="/herobg3m.png"
            alt="background"
            layout="fill"
            className="absolute top-10"
          />
        </div>
      </section>
    </main>
  );
};

export default Hero;
