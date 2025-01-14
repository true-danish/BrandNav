import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f2f2fa]">
      <main className="max-container px-[1.6rem] flex flex-col gap-32  sm:flex-row items-start justify-between">
        <section>
          <h1 className="text-[#2F327D] text-[1.8rem] font-semibold">
            BrandNav.io
          </h1>
          <p className="py-[2rem] max-sm:pt-[1rem] sm:max-w-[29.3rem] w-full text-[1.5rem] text-[#696984]">
            BrandNav is an Ecom Leads Database with tons of amazing filters. Now
            you can get access to stores with just a simple click.
          </p>

          <div className="flex gap-[3.2rem] mb-[3.8rem]">
            <Image src="/fb.png" alt="facebook" width={24} height={24} />
            <Image src="/twitter.png" alt="facebook" width={24} height={24} />
            <Image src="/insta.png" alt="facebook" width={24} height={24} />
            <Image src="/github.png" alt="facebook" width={24} height={24} />
          </div>
        </section>

        <section className="flex flex-wrap gap-x-[10.9rem] sm:gap-x-[5.5rem] gap-y-[3rem] mb-[3rem]">
          {/* Blogs */}
          <ul className="flex flex-col gap-[.6rem] text-[#008EFF] text-[1.4rem]">
            <li className="text-[#2F327D] text-[1.6rem] font-semibold pb-[.6rem] sm:pb-[1.4rem]">
              Blogs
            </li>
            <li>All Blogs</li>
            <li>Cold Emailing</li>
          </ul>

          {/* Documentation */}
          <ul className="flex flex-col gap-[.6rem] text-[#008EFF] text-[1.4rem]">
            <li className="text-[#2F327D] text-[1.6rem] font-semibold pb-[.6rem] sm:pb-[1.4rem]">
              Documentation
            </li>
            <li>Gettin Started</li>
          </ul>

          {/* Resources */}
          <ul className="flex flex-col gap-[.6rem] text-[#008EFF] text-[1.4rem]">
            <li className="text-[#2F327D] text-[1.6rem] font-semibold pb-[.6rem] sm:pb-[1.4rem]">
              Resources
            </li>
            <li>Latest Update</li>
            <li>Roadmap</li>
            <li>About us</li>
            <li>Join us</li>
          </ul>

          {/* Legal */}
          <ul className="flex flex-col gap-[.6rem] text-[#008EFF] text-[1.4rem]">
            <li className="text-[#2F327D] text-[1.6rem] font-semibold pb-[.6rem] sm:pb-[1.4rem]">
              Legal
            </li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Contact Us</li>
          </ul>
        </section>
      </main>
      <div className="max-w-[92rem] w-full bg-gray-400 mx-auto h-[1px]"></div>
      <p className="text-[#1211278F]/60 text-[1.6rem] text-center pt-[4.4rem] pb-[2.4rem] sm:pb-[4.8rem]">
        © 2022 BrandNav. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
