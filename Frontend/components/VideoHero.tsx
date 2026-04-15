export const VideoHero = () => {
  return (
    <div className="">
      <video autoPlay loop muted className="">
        <source src="/videos/travel.mp4" type="/video.mp4" />
      </video>
      <div className="">
        <h1 className="">Explore the World!</h1>
        <p className="">Himachal, Uttarakhand and More</p>
      </div>
    </div>
  );
};
