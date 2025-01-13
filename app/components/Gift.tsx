import Image from "next/image";

const Gift = () => {
  return (
    <div className="bg-[url('/background.png')] bg-no-repeat bg-cover">
      <section className=" max-container pt-[5rem] pb-[9rem]  sm:py-[8rem]  flex flex-col-reverse md:flex-row justify-center gap-[5.5rem] items-center">
        <div className="relative  w-[40.9rem] h-[76.2rem] sm:h-[75.2rem]">
          <Image src="/gift.png" alt="gift" layout="fill" />
        </div>
        <div className="text-white ">
          <h1 className="text-[3rem] sm:text-[4rem] font-semibold">
            Not convinced yet?
          </h1>
          <h1 className="text-[3.4rem]  sm:text-[4.4rem] font-bold">
            Take it for a <span className="text-[#49A7FF]">FREE</span> spin
          </h1>
          <h1 className="text-[3rem] sm:text-[4rem] font-semibold">
            before committing
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Gift;
