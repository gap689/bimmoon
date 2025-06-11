const HeroSecondary = () => {
  return ( 
    <div className="relative w-full h-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bimmoonlaser.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="absolute left-0 right-0 top-0 bottom-0 z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <div className="xl:text-6xl text-5xl md:text-7xl font-bold mb-4 uppercase">
            <p>No vendemos productos.</p>
            <span className="text-[rgb(255,220,72)]">Vendemos estilo.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default HeroSecondary;