import Gift from "./components/Gift";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Weapon from "./components/Weapon";

export default function Home() {
  return (
    <div className=" bg-[#EBEFFA]  sm:bg-red-500   ">
      <Header />
      <Hero />
      <Weapon />
      <Gift />
    </div>
  );
}
