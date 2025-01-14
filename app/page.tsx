import Benifits from "./components/Benifits";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Gift from "./components/Gift";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ideas from "./components/Ideas";
import Reviews from "./components/Reviews";
import Solutions from "./components/Solutions";
import Usage from "./components/Usage";
import Weapon from "./components/Weapon";

export default function Home() {
  return (
    <div className=" bg-[#E6ECFA]  sm:bg-red-5  ">
      <Header />
      <Hero />
      <Weapon />
      <Gift />
      <Benifits />
      <Ideas />
      <Solutions />
      <Usage />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
}
