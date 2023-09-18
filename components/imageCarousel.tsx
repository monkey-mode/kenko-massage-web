"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: string[];
  autoSlideInterval?: number;
};
const ImageCarousel = ({ images, autoSlideInterval = 3000 }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(intervalId);
  }, [images, autoSlideInterval]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center absolute w-full">
        <button
          onClick={prevImage}
          className="bg-gray-800 text-white px-2 py-1 rounded-full hover:bg-gray-600"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="bg-gray-800 text-white px-2 py-1 rounded-full hover:bg-gray-600"
        >
          Next
        </button>
      </div>
      <Image
        src={images[currentImageIndex]}
        width={500}
        height={0}
        alt={`Image ${currentImageIndex + 1}`}
        className="w-auto h-auto"
      />
    </div>
  );
};

export default ImageCarousel;
