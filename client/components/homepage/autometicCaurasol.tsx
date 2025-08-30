"use client";
import image1 from "@/assets/home/img1.jpg";
import image2 from "@/assets/home/img2.jpg";
import image3 from "@/assets/home/img3.jpg";
import image4 from "@/assets/home/img4.jpg";
import image5 from "@/assets/home/img5.jpg";
import Image, { StaticImageData } from "next/image";

import { useEffect, useState } from "react";
const AutomaticCarousel = () => {
  const images = [image2, image1, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="border-2 border-black h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {images.map((img: StaticImageData, index: number) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            <Image
              src={img}
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        ))}
      </div>

      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>

      {/* Project Title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wider">
          Chol-kheli
        </h1>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_: StaticImageData, index: number) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutomaticCarousel;
