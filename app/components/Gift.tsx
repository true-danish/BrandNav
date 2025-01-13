import Image from "next/image";

const Gift = () => {
  return (
    <section className="bg-[url('/background.png')] max-container  py-10 bg-no-repeat bg-cover flex flex-col-reverse md:flex-row justify-center gap-[5rem] items-center">
      <div className="relative  w-[40rem] h-[75.2rem]">
        <Image src="/gift.png" alt="gift" layout="fill" />
      </div>
      <div className="text-white font-semibold">
        <h1 className="text-[3rem] sm:text-[4rem]">Not convinced yet?</h1>
        <h1 className="text-[3.4rem]  sm:text-[4.4rem]">
          Take it for a <span className="text-[#49A7FF]">FREE</span> spin
        </h1>
        <h1 className="text-[3rem] sm:text-[4rem]">before committing</h1>
      </div>
    </section>
  );
};

export default Gift;
