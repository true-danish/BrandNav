import Image from "next/image";

const Ideas = () => {
  const data = [
    { url: "/idea1.svg", title: "Financials" },
    { url: "/idea2.svg", title: "Company Name & Website" },
    { url: "/idea3.svg", title: "Company location " },
    { url: "/idea4.svg", title: "Country code " },
    { url: "/idea5.svg", title: "Employee count" },
    { url: "/idea6.svg", title: "Industry" },
    { url: "/idea7.svg", title: "and 20+ more" },
  ];
  const data2 = [
    { url: "/idea8.svg", title: "Phone" },
    { url: "/idea9.svg", title: "Email" },
    { url: "/idea10.svg", title: "Job Title" },
    { url: "/idea11.svg", title: "Linkedin" },
  ];

  return (
    <main className="bg-[#f2f2fa]">
      <section className="max-container px-[1.6rem]  pt-[8rem] sm:pt-[12rem] flex flex-col sm:items-center">
        <h1 className="text-[#2F327D] sm:text-center text-[3rem] sm:text-[3.6rem] font-bold leading-[4.5rem] sm:leading-[5.4rem] max-w-[64.9rem] ">
          Pinpoint your ideal customer with relevant data attributes
        </h1>

        <section className="w-full max-w-[102.6rem] pt-[6.5rem] sm:pt-[9rem] pb-[7.5rem] sm:pb-[12rem]">
          <h2 className="font-semibold text-[1.8rem] sm:text-[2.4rem] text-[#007DF2] sm:text-center pb-[3.5rem] sm:pb-[6rem]">
            Screener attributes
          </h2>
          <div className="flex flex-wrap justify-center items-center max-w-[126rem] gap-x-[11rem] gap-y-[7rem] ">
            {data.map((e) => (
              <div className="flex-1 min-w-[12rem] flex flex-col  text-center items-center justify-center ">
                <Image src={e.url} alt="idea icon" width={90} height={90} />

                <h3 className="text-[1.5rem] text-[#2F327D] font-semibold sm:text-[2rem]">
                  {e.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full max-w-[102.6rem] pb-[10rem] sm:pb-[15.5rem] ">
          <h2 className="font-semibold text-[1.8rem] sm:text-[2.4rem] text-[#007DF2] sm:text-center pb-[3.5rem] sm:pb-[6rem]">
            Enricher attributes
          </h2>
          <div className="flex flex-wrap justify-center items-center max-w-[126rem] gap-x-[11rem] gap-y-[7rem] ">
            {data2.map((e) => (
              <div className="flex-1 min-w-[12rem] flex flex-col  text-center items-center justify-center ">
                <Image src={e.url} alt="idea icon" width={90} height={90} />

                <h3 className="text-[1.5rem] text-[#2F327D] font-semibold sm:text-[2rem]">
                  {e.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Ideas;
