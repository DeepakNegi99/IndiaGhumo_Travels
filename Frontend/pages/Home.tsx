import { Header } from "../components/Header";
import { VideoHero } from "../components/VideoHero";
import { Footer } from "../components/Footer";  

export const Home = () => {
  return (
    <div>
      <Header />
      <VideoHero />

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold">
          Popular Destination
        </h2>
      </div>
      <Footer />
    </div>
  );
};
