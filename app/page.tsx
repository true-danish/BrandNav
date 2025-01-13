import Gift from "./components/Gift";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Weapon from "./components/Weapon";

export default function Home() {
  return (
    <div className=" bg-[#EBEFFA]  h-[300vh] ">
      <Header />
      <Hero />
      <Weapon />
      {/* <Gift /> */}
    </div>
  );
}
