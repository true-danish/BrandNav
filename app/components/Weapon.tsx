import Image from "next/image";

const Weapon = () => {
  return (
    <section className=" pt-[6rem] pb-[8.5rem] bg-[#F2F2FA] sm:pt-[11.6rem]  ">
      <div className="max-container px-[1.6rem] bg-[#F2F2FA] overflow-hidden">
        {/* Text */}
        <div className="sm:text-center text-start">
          <h1 className="text-[#2F327D] text-[3.2rem] font-extrabold mb-[.6rem] ">
            Choose Your Weapon
          </h1>
          <p className="text-[#595B97]  font-medium text-[1.6rem] ">
            BrandNav is a multi-dimensional platform designed for revenue growth
          </p>
        </div>

        {/* Cards */}

        <div className="w-full flex flex-col gap-4 relative  max-w-[97.7rem] mx-auto mt-[3.8rem] ">
          <div className="   rounded-[2.7rem] w-full   ">
            <div className="flex flex-col gap-[1.2rem] lg:gap-0 items-center lg:flex-row  ">
              {/* Card1 */}
              <div className="bg-white rounded-t-[1.8rem] overflow-hidden">
                <div className=" flex gap-6 bg-red-30  justify-start items-start  border-t border-l   p-[1.7rem] rounded-t-[1.8rem] max-lg:rounded-t-[1.8rem]  lg:flex-col  lg:w-[23.4rem] lg:h-[29.2rem] ">
                  {/* Image */}
                  <div className="relative  w-[20rem] h-[12.5rem] grid place-items-center  border border-[#D8DDEB] rounded-[1.8rem]">
                    <Image
                      src="/weapon1.svg"
                      alt="weapon image"
                      width={92}
                      height={106}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold text-[1.6rem]  pb-[.8rem] pt-[3.4rem]">
                      Screener Search
                    </h1>
                    <p className="text-[1.4rem] leading-[1.8rem] text-[#6C7A7A]">
                      Build your list with advanced search filters
                    </p>
                  </div>
                </div>
                <div className="lg:hidden p-[1.6rem]">
                  <h1 className="text-[2rem] font-semibold  pb-[1.8rem]">
                    The ultimate eCom leads database
                  </h1>
                  <p className="text-[1.6rem] max-w-[36rem] pb-[3rem]">
                    Discover untapped eCommerce brands with our high-quality
                    unsaturated leads database.
                  </p>

                  <div className="flex  gap-4 text-[1.5rem] pl-3 ">
                    <button className="bg-[#0084FF] py-[.8rem] px-[1.6rem] text-white font-semibold  rounded-xl shadow-xl">
                      Try for free
                    </button>
                    <button className="text-[#0084FF] font-semibold">
                      Learn more &gt;
                    </button>
                  </div>
                </div>
              </div>

              {/* 3cards */}
              <div className="flex flex-col lg:flex-row gap-[1.2rem] bg-[#F8FCFF] sm:bg-red-30  border-l  border-b rounded-t-[1.9rem] rounded-bl-[1.8rem] pl-[1rem] pb-[.5rem] ">
                <div className="w-full gap-6 shadow-lg bg-white flex  justify-start items-start  border border-[#D8DDEB] p-[1.7rem] rounded-[1.8rem]  lg:flex-col  lg:w-[23.4rem] lg:h-[28.9rem] ">
                  {/* Image */}
                  <div className="relative  w-[20rem] h-[12.5rem] grid place-items-center  border border-[#D8DDEB] rounded-[1.8rem]">
                    <Image
                      src="/weapon2.png"
                      alt="weapon image"
                      width={92}
                      height={106}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold text-[1.6rem]  pb-[.8rem] pt-[3.2rem]">
                      Enricher Lookup
                    </h1>
                    <p className="text-[1.4rem] text-[#6C7A7A]">
                      Get verified contact information from Enricher
                    </p>
                  </div>
                </div>
                <div className="w-full gap-6 shadow-lg bg-white flex  justify-start items-start  border border-[#D8DDEB] p-[1.7rem] rounded-[1.8rem]  lg:flex-col  lg:w-[23.4rem] lg:h-[28.9rem] ">
                  {/* Image */}
                  <div className="relative  w-[20rem] h-[12.5rem] grid place-items-center  border border-[#D8DDEB] rounded-[1.8rem]">
                    <Image
                      src="/weapon3.png"
                      alt="weapon image"
                      width={92}
                      height={106}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold text-[1.6rem]  pb-[.8rem] pt-[3.2rem]">
                      Email Verifier
                    </h1>
                    <p className="text-[1.4rem] text-[#6C7A7A]">
                      Reduce bounces with 100% verified emails
                    </p>
                  </div>
                </div>
                <div className="w-full gap-6 shadow-lg bg-white flex  justify-start items-start  border border-[#D8DDEB] p-[1.7rem] rounded-[1.8rem]  lg:flex-col  lg:w-[23.4rem] lg:h-[28.9rem] ">
                  {/* Image */}
                  <div className="relative  w-[20rem] h-[12.5rem] grid place-items-center  border border-[#D8DDEB] rounded-[1.8rem]">
                    <Image
                      src="/weapon4.png"
                      alt="weapon image"
                      width={92}
                      height={106}
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-start">
                    <h1 className="font-semibold text-[1.6rem]  pb-[.8rem] pt-[3.2rem]">
                      Blacklist Shield
                    </h1>
                    <p className="text-[1.4rem] text-[#6C7A7A]">
                      Monitor and boost your email deliverability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 */}

            <div className="lg:flex hidden  bg-white border-b border-l border-r rounded-b-[2.7rem] rounded-tr-[2.7rem] justify-between pl-[2.5rem] pt-[5.8rem] pb-[1.8rem] ">
              <div>
                <h1 className="text-[2rem] font-semibold  pb-[1.8rem]">
                  The ultimate eCom leads database
                </h1>
                <p className="text-[1.6rem] max-w-[36rem] pb-[3rem]">
                  Discover untapped eCommerce brands with our high-quality
                  unsaturated leads database.
                </p>

                <div className="flex  gap-4 text-[1.5rem] pl-3 ">
                  <button className="bg-[#0084FF] py-[.8rem] px-[1.6rem] text-white font-semibold  rounded-xl shadow-xl">
                    Try for free
                  </button>
                  <button className="text-[#0084FF] font-semibold">
                    Learn more &gt;
                  </button>
                </div>
              </div>
              <div className="relative mr-[11rem]  w-[26.4rem] h-[22.7rem] hidden md:block ">
                <Image src="/weapon11.png" alt="weapon" layout="fill" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weapon;
