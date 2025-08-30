const VideoSection = () => {
  const videoId = "XlrJ_urwp-Y";

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Watch Our Story
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're transforming the industry through innovation and
            dedication.
          </p>
        </div>
      </div>
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`}
            title="Company Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
