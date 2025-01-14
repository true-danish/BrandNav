import Image from "next/image";
import Credit from "./Credit";

const Faq = () => {
  const data = [
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
    "What is the purpose of email verifier?",
    "How do you find email addresses?",
  ];
  return (
    <main className="bg-[#f2f2fa]">
      <section className="max-container px-[1.6rem] pt-[11.2rem] pb-[3rem] sm:pt-[8rem ] sm:pb-[6rem]">
        <h1 className="pb-[4rem] sm:pb-[6rem] text-[#2F327D] font-bold text-[3rem] sm-[5.4rem] sm:text-center">
          Got a Question? Get Your Answers
        </h1>

        <div className="w-full max-w-[99rem] mx-auto bg-white  rounded-[1.2rem] shadow-xl">
          {data.map((Question) => (
            <div className=" cursor-pointer border-b border-[#E2E2E2] py-[1.7rem] flex items-center justify-between px-[2rem] sm:pl-[8.1rem] sm:pr-[6.4rem]">
              <h1 className="font-semibold text-[#616161] text-[1.6rem]">
                {Question}
              </h1>

              <Image
                src="/plusicon.svg"
                alt="plus icon"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>

        <section className="mt-[8rem] max-w-[108rem] text-center flex flex-col justify-center items-center  mx-auto rounded-[1.6rem] overflow-hidden bg-[url('/bglast.png')] bg-no-repeat pb-[7rem]">
          <h1 className="text-white font-bold text-[3rem] sm:text-[4rem] sm:mt-[8rem] sm:mb-[2rem] mt-[6rem] mb-[1rem]">
            Want to see BrandNav in action?
          </h1>
          <h2 className="sm:text-[2rem] text-[1.8rem] font-semibold text-white">
            Try BrandNav for free today!
          </h2>
          <button className="font-medium  mt-[3rem] mb-[2.5rem] text-[1.6rem] py-[.8rem] bg-[#0084FF]  rounded-[.5rem] text-white w-[33.4rem] sm:w-[17.5rem]">
            Grab free leads
          </button>
          <div className="flex gap-4 items-center text-[1.2rem] font-semibold text-white ">
            <Image
              src="/credit.png"
              alt="credit card "
              width={16}
              height={16}
            />
            <p>No credit card required</p>
            <span>|</span>
            <Image src="/5star.png" alt="credit card " width={65} height={16} />
            <p>4.8/5 G2 Rating</p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Faq;
