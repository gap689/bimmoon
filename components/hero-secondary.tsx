const HeroSecondary = () => {
  return ( 
    <div className="relative w-full">
      <video
        className="w-full h-[90vh] object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/lasercut.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Content */}
      <div className="absolute left-0 right-0 top-0 bottom-0 z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div>
          <div className="text-5xl md:text-7xl font-bold mb-4 font-serif">
            <p>No vendemos productos.</p>
            <span className="text-[rgb(255,220,72)]">Vendemos estilo.</span>
          </div>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            {/* Unlocking possibilities with <span className="text-blue-400">technology-driven</span> solutions that 
            shape the future. */}
            Diseñamos productos y creamos historias visuales que dejan huella en vinil y más allá.
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default HeroSecondary;