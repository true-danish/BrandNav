"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header: React.FunctionComponent = () => {
  const [isBackground, setIsBackground] = useState<boolean>(false);
  useEffect(() => {
    function runScroll() {
      if (document.documentElement.scrollTop > 100) setIsBackground(true);
      else setIsBackground(false);
    }
    document.addEventListener("scroll", runScroll);

    return () => {
      document.removeEventListener("scroll", runScroll);
    };
  }, []);

  return (
    <header className="w-full sticky top-0  z-[100]  ">
      <div className="max-container  sm:pt-[2.2rem]   ">
        {/* Content  of Header*/}

        <div
          className={`flex gap-[6.1rem]  items-center  max-w-[109.2rem] max-sm:bg-white max-sm:rounded-none mx-auto  ${
            isBackground && "sm:bg-white"
          }    py-[1rem] px-[1.6rem]    rounded-3xl`}
        >
          {/* logo  section */}
          <div className="flex gap-2 justify-around items-center ">
            <div className="relative w-[2.8rem] sm:w-[3.3rem] h-[2rem] sm:h-[2.4rem] ">
              <Image
                src="/logo.svg"
                alt="loarrgo"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="font-semibold text-[2rem]  tracking-[-1px]  sm:text-[2.4rem] text-[#0D2052]">
              BrandNav
            </span>
          </div>

          {/* nav and login section */}
          <section className="flex justify-between items-center flex-1">
            {/* Navigation */}
            <div className="hidden md:flex ">
              <ul className="flex ">
                <li className="flex items-center justify-center gap-2 px-[1.2rem] py-[.9rem] cursor-pointer">
                  <span className="text-[#0D2052] text-[1.4rem] ">
                    Products
                  </span>
                  <div className="relative w-[1.8rem] aspect-square">
                    <Image
                      src="/down_arrow.svg"
                      alt="down arrow"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </li>
                <li className="flex items-center justify-center gap-2 px-[1.2rem] py-[.9rem] cursor-pointer">
                  <span className="text-[#0085FF] text-[1.4rem] ">Pricing</span>
                  <div className="relative w-[1.8rem] aspect-square">
                    <Image
                      src="/down_arrow.svg"
                      alt="down arrow"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </li>
                <li className="text-[#0D2052] text-[1.4rem] -mx-2  py-[.9rem] cursor-pointer">
                  Blogs
                </li>
                <li className="flex items-center justify-center gap-2 px-[3rem] py-[.9rem] cursor-pointer">
                  <span className="text-[#0D2052] text-[1.4rem] ">
                    Resources
                  </span>
                  <div className="relative w-[1.8rem] aspect-square">
                    <Image
                      src="/down_arrow.svg"
                      alt="down arrow"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </li>
              </ul>
            </div>

            {/* Login */}
            <div className="hidden  md:flex text-[1.4rem]  font-medium gap-[1rem] ">
              <button className="bg-white border-[#287DFF] border px-[2.4rem] py-[1.1rem] rounded-[.8rem]">
                Login
              </button>
              <button className="bg-[#0084FF] px-[2.6rem] py-[1.1rem] rounded-[.8rem] text-white">
                Start for free
              </button>
            </div>

            {/* hamburger Menu */}

            <div className="relative w-[3.2rem] h-[3.2rem] md:hidden ml-auto cursor-pointer">
              <Image
                src="/menu.png"
                alt="menu"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
