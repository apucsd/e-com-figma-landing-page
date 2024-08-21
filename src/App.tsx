import Banner from "./components/home/Banner";
import Marquee from "./components/home/Marquee";
import OurPicks from "./components/home/OurPicks";
import TrendingBrand from "./components/home/TrendingBrand";
import TrendingProduct from "./components/home/TrendingProduct";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto text-primary">
      <Navbar />
      <Banner />
      <Marquee />
      <TrendingBrand />
      <TrendingProduct />
      <OurPicks />
      <Footer />
    </div>
  );
}

export default App;
