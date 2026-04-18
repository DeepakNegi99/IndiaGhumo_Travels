export const VideoHero = () => {
  return (
    <div className="relative h-[80vh]">
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src="/videos/travel.mp4" type="/video.mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Explore the World!</h1>
        <p className="mt-2">Himachal, Uttarakhand and More</p>
      </div>
    </div>
  );
};
