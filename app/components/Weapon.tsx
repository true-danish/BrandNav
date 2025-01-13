import Image from "next/image";

const Weapon = () => {
  return (
    <section className=" mt-[6rem] sm:mt-[12.6rem]  ">
      <div className="max-container px-[1.6rem] bg-[#EBEFFA] overflow-hidden">
        {/* Text */}
        <div className="sm:text-center text-start">
          <h1 className="text-[#2F327D] text-[3.2rem] font-extrabold mb-[1rem] ">
            Choose Your Weapon
          </h1>
          <p className="text-[#595B97]  font-medium text-[1.6rem] ">
            BrandNav is a multi-dimensional platform designed for revenue growth
          </p>
        </div>

        {/* Cards */}

        <div className="w-full flex flex-col gap-4 relative  max-w-[97.7rem] mx-auto mt-[3.8rem] ">
          <div className="bg-white  p-6 border-2 border-[#D8DDEB] rounded-[2.7rem] w-full">
            {/* Card1 */}
            <div className="w-full flex gap-6 justify-start items-start  sm:flex-col  sm:w-[23.4rem] sm:h-[28.9rem] ">
              {/* Image */}
              <div className="relative  w-[20rem] h-[12.5rem]  border-2 border-[#D8DDEB] rounded-[1.8rem]">
                <Image src="/weapon1.svg" alt="weapon image" layout="fill" />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-start">
                <h1 className="font-semibold text-[1.6rem]  pb-4">
                  Screener Search
                </h1>
                <p className="text-[1.4rem] text-[#6C7A7A]">
                  Build your list with advanced search filters
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex justify-between ">
              <div>
                <h1 className="text-[2rem] font-semibold pt-16 pb-8">
                  The ultimate eCom leads database
                </h1>
                <p className="text-[1.6rem] max-w-[36rem] pb-8">
                  Discover untapped eCommerce brands with our high-quality
                  unsaturated leads database.
                </p>

                <div className="flex  gap-4 text-[1.5rem] mt-6">
                  <button className="bg-[#0084FF] py-[.8rem] px-[1.6rem] text-white font-semibold  rounded-xl shadow-xl">
                    Try for free
                  </button>
                  <button className="text-[#0084FF] font-semibold">
                    Learn more &gt;
                  </button>
                </div>
              </div>
              <div className="relative mr-[10rem]  w-[26.4rem] h-[22.7rem] hidden md:block  mt-10">
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
