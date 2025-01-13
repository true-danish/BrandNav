import Image from "next/image";

const Credit = () => {
  return (
    <div className="flex gap-4 items-center text-[1.4rem] text-[#8A8A8A] ">
      <Image src="/credit.png" alt="credit card " width={16} height={16} />
      <p>No credit card required</p>
      <span>|</span>
      <Image src="/5star.png" alt="credit card " width={65} height={16} />
      <p>4.8/5 G2 Rating</p>
    </div>
  );
};

export default Credit;
