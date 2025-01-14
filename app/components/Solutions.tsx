import Image from "next/image";

const Solutions = () => {
  return (
    <main className="bg-[#f2f2fa]">
      <section className="max-container px-[1.6rem] flex flex-col sm:items-center pt-[9rem] sm:pt-[11rem]">
        <h1 className="text-[#2F327D] text-[3rem] sm:text-[3.6rem] font-bold leading-[4.5rem] sm:leading-[5.4rem] max-w-[66.2rem] sm:text-center ">
          Fix data accuracy problems with BrandNav
        </h1>

        <section className=" w-full max-w-[102rem]  flex flex-col sm:flex-row items-center justify-center gap-[2.4rem] sm:gap-[4.3rem] h-[55rem] sm:h-[42.6rem] mt-[5rem] mb-[10rem] sm:mt-[5.9rem] sm:mb-[12rem] ">
          <div className="flex-1 h-full max-sm:max-w-[25rem] w-full relative flex items-center justify-center ">
            <Image src="/before.png" alt="solution" layout="fill" />
          </div>
          <div className=" flex-1 h-full max-sm:max-w-[25rem]  w-full max-w-[53.8rem] relative flex items-center justify-center ">
            <Image src="/after.png" alt="solution" layout="fill" />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Solutions;
