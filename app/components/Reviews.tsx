import Image from "next/image";
import Credit from "./Credit";

const Reviews = () => {
  return (
    <main className="bg-[#E1F1FE]">
      <section className="max-container px-[1.6rem] pt-[6rem] pb-[9rem] ">
        <h1 className="font-bold text-[3rem] sm:text-[3.6rem] text-[#2F327D] mb-[2.3rem] sm:text-center">
          Don’t just take our word for it
        </h1>
        <div className="flex justify-center items-center">
          <Credit />
        </div>
        <div className="mt-[4rem] flex flex-col md:flex-row  items-center justify-center gap-[2rem] sm:gap-[6rem]">
          {/* Left  section*/}
          <section className="w-full max-w-[45rem] bg-white px-[3rem] pt-[3.5rem] pb-[5rem] rounded-[.8rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center  gap-[1.6rem]">
                <Image src="/user1.png" alt="5 star" width={50} height={50} />
                <div className="text-[1.4rem] text-[#696984] flex flex-col">
                  <span className="font-medium ">Sai</span>
                  <span>CEO, Sentry Ecom</span>
                </div>
              </div>
              <Image src="/5stars.png" alt="5 star" width={125} height={25} />
            </div>

            <div>
              <h1 className="text-[1.7rem] font-semibold text-[#2F327D] mt-[1.2rem] mb-[.9rem]">
                “Super helpful tool for lead generation!”
              </h1>
              <p className="text-[#808080] text-[1.4rem]">
                “BrandNav has been extremely useful in helping us find high
                quality leads for our agency. It’s the best tool I’ve used so
                far for scrapping leads. Would definitely recommend BrandNav to
                businesses looking for a lead gen tool.”
              </p>
            </div>
          </section>

          {/* Right Section */}
          <section className="w-full max-w-[45rem] bg-white px-[3rem] pt-[3.5rem] pb-[5rem] rounded-[.8rem]">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center  gap-[1.6rem]">
                <Image src="/user2.png" alt="5 star" width={50} height={50} />
                <div className="text-[1.4rem] text-[#696984] flex flex-col">
                  <span className="font-medium ">Sairaj Matkar</span>
                  <span>Founder, AceXmedia</span>
                </div>
              </div>
              <Image src="/5stars.png" alt="5 star" width={125} height={25} />
            </div>

            <div>
              <h1 className="text-[1.7rem] font-semibold text-[#2F327D] mt-[1.2rem] mb-[.9rem]">
                “Highly recommended...”
              </h1>
              <p className="text-[#808080] text-[1.4rem]">
                “Best tool I've used so far for scrapping leads. Helps me scrape
                my target audience data with ease. Low effort, amazing response
                rates. Saves a lot of time and manual work”
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
