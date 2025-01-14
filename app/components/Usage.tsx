import Image from "next/image";

const Usage = () => {
  const data = [
    {
      url: "/idea1.svg",
      title: "Sales & Marketing Teams",
      para: `Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers.`,
    },
    {
      url: "/idea2.svg",
      title: "Software & IT Companies",
      para: `IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability.`,
    },
    {
      url: "/idea3.svg",
      title: "Service Providers",
      para: `Service providers are using BrandNav  to locate accurate email addresses  build a list of contacts, and improve the efficiency of their sales process.`,
    },
    {
      url: "/idea4.svg",
      title: "Recruiters",
      para: `Recruiters are using BrandNav to locate and verify the email addresses of job candidates, build a talent pool, and streamline their hiring process.`,
    },
    {
      url: "/idea5.svg",
      title: "Backlinks Outreach",
      para: `SEO link builders are using BrandNav to locate and verify the email addresses of potential link partners, and build outreach lists for link-building purposes.`,
    },
    {
      url: "/idea6.svg",
      title: "Investors",
      para: `Investors are using BrandNav to quickly find and verify contact information for key executives and decision-makers and streamline their workflow.`,
    },
  ];

  return (
    <main className="bg-[#f2f2fa]">
      <section className="max-container px-[1.6rem]  pt-[6rem] sm:pt-[9rem] flex flex-col sm:items-center">
        <h1 className="text-[#2F327D] text-[3rem] sm:text-center sm:text-[3.6rem] font-bold leading-[4.5rem] sm:leading-[5.4rem] max-w-[64.9rem] ">
          Who is using BrandNav?
        </h1>
        <p className="font-medium text-[1.5rem] sm:text-[1.6rem] text-[#595B97] sm:mt-[3.6rem] sm:  mb-[5rem]">
          BrandNav has become irreplaceable tool for businesses
        </p>

        <section className="w-full max-w-[102.6rem] pb-[10rem] sm:pb-[16.5rem] ">
          <div className="flex flex-wrap justify-center items-center max-w-[95.6rem]  mx-auto gap-x-[5rem] gap-y-[6.5rem] sm:gap-y-[10rem] ">
            {data.map((e) => (
              <div className="flex-1 min-w-[27.6rem]  flex flex-col  text-center items-start  sm:items-center justify-center ">
                <Image src={e.url} alt="idea icon" width={90} height={90} />

                <h3 className="text-[1.5rem] text-[#2F327D] font-semibold sm:text-[2rem]">
                  {e.title}
                </h3>

                <p className="text-[#595B97] text-[1.6rem] text-start  sm:text-center">
                  Sales and marketing teams are using BrandNav to efficiently
                  locate and verify prospect contact information and identify
                  key decision-makers.
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Usage;
