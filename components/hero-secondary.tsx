const HeroSecondary = () => {
  return ( 
    <div className="relative w-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/inkflow.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/40" />
      Hello world
    </div>
  );
}
 
export default HeroSecondary;