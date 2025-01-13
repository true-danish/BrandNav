import Image from "next/image";

const Benifits = () => {
  const data = [
    {
      url1: "/benifit1.svg",
      url2: "/csv.svg",
      title: "Enrich any CSV",
      para: `  BrandNav transforms your CSV files by adding valuable contact,
                  firmographics, and technographics data. With just a few
                  clicks, you can enhance your data with enriched information
                  and unlock new insights and opportunities. `,
    },
    {
      url1: "/benefit2.svg",
      url2: "/sync.svg",
      title: "Fresh data updates everyday",
      para: `  BrandNav updates its data every day, providing the most recent and accurate information to its users. With a constant stream of new information, BrandNav ensures that users have access to the latest contact, firmographics, and technographics data for better decision-making.  `,
    },
    {
      url1: "/benefit3.svg",
      url2: "/filter.svg",
      title: "Advanced search with 25+ unique filters",
      para: ` BrandNav offers over 25+ filters to help users build highly segmented lists for better prospecting. With BrandNav, you can create highly targeted lists that are tailored to your specific needs, streamlining your workflow and maximizing your productivity. `,
    },
  ];
  return (
    <main className="bg-[#f2f2fa]">
      <section className="max-container bg-[#f2f2fa] mx-auto px-[1.6rem]">
        {/* Text */}
        <div className="sm:text-center text-start pt-[11.7rem] sm:pt-[13.2rem] sm:pb-[4.2rem]">
          <h1 className="text-[#2F327D] text-[3rem]  sm:text-[3.6rem] font-bold mb-[.6rem] ">
            Why should you use BrandNav?
          </h1>
          <p className="text-[#595B97] text-[1.4rem]  font-medium sm:text-[1.6rem] ">
            Why should you use BrandNav? Optimize your workflow for faster
            results and higher revenue
          </p>
        </div>

        {/* Cards */}
        <div>
          {data.map((e, i) => (
            <div
              className={`flex flex-col-reverse items-center lg:flex-row ${
                i == 1 && "lg:flex-row-reverse"
              } `}
            >
              {/* Image section */}
              <div className="flex-1  flex items-center justify-start sm:justify-center">
                <div className="relative  w-[47.3rem] h-[40.7rem]">
                  <Image src={e.url1} alt="benefit1" layout="fill" />
                </div>
              </div>

              {/* Text Section */}
              <div className="flex-1 flex flex-col ">
                <Image src={e.url2} alt="benefits" width={50} height={50} />
                <h1 className="text-[2.6rem] font-semibold text-[#2F327D] mt-[2.5rem] mb-[3rem]">
                  {e.title}
                </h1>
                <p className="text-[1.5rem] sm:text-[1.6rem] text-[#595B97] max-w-[46.6rem]">
                  {e.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Benifits;
