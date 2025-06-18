import Main from "../../components/sections/Main";
import Header from "../../components/sections/Header";
import Benefits from "../../components/sections/Benefits";
import Prices from "../../components/sections/Prices";
import Locations from "../../components/sections/Locations";
import Cases from "../../components/sections/Cases";
import Integration from "../../components/sections/Integration";
import FAQ from "../../components/sections/FAQ";
import Footer from "../../components/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Main />
      <Benefits />
      <Prices />
      <Locations />
      <Cases />
      <Integration />
      <FAQ />
      <Footer/>
    </div>
  );
}
