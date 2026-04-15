import { Header } from "../components/Header";
import { VideoHero } from "../components/VideoHero";
import { Footer } from "../components/Footer";  

export const Home = () => {
  return (
    <div>
      <Header />
      <VideoHero />

      <div className="">
        <p>Popular Destination</p>
      </div>
      <Footer />
    </div>
  );
};
